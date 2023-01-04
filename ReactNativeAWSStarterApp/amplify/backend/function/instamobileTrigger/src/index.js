/* Amplify Params - DO NOT EDIT
	API_INSTAMOBILE_GRAPHQLAPIENDPOINTOUTPUT
	API_INSTAMOBILE_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ const AWS = require('aws-sdk')
const { triggerResolvers } = require('./resolvers')

exports.handler = async event => {
  //eslint-disable-line
  // console.log(JSON.stringify(event, null, 2))
  const records = getRecords(event)

  console.log('formatted Records: %j', records)

  try {
    await triggerResolvers(records)

    return Promise.resolve('Successfully processed DynamoDB record')
  } catch (error) {
    console.log('triggerResolvers error: %j', error)
  }
}

const getRecords = event => {
  return event.Records.map(record => {
    const newImage = AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage)
    const oldImage = AWS.DynamoDB.Converter.unmarshall(record.dynamodb.OldImage)
    return {
      new: newImage,
      old: oldImage,
      typename: newImage.__typename || oldImage.__typename,
      eventName: record.eventName,
    }
  })
}
