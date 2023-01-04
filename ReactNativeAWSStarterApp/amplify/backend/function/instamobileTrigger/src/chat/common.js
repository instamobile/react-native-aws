const graphqlQuery = require('../graphql/queries')
const graphqlMutation = require('../graphql/mutations')
const gql = require('graphql-tag')
const { updateItem, getItem } = require('../core/helpers')

exports.getUserChannelFeed = async userID => {
  const query = gql(graphqlQuery.channelFeedByUser)

  const variables = {
    userID,
  }

  const res = await getItem(query, variables)

  return res.channelFeedByUser
}

exports.updateUserChannelFeed = async item => {
  const mutation = gql(graphqlMutation.updateChannelFeed)

  return updateItem(mutation, item, false)
}

exports.updateChannel = async item => {
  const mutation = gql(graphqlMutation.updateChannel)

  return updateItem(mutation, item)
}

exports.getChannelParticipants = participants => {
  return participants.map(participant => ({
    id: participant.id,
    fullName: participant.fullName || '',
    username: participant.username || '',
    firstName: participant.firstName || '',
    lastName: participant.lastName || '',
    profilePictureKey: participant.profilePictureKey || '',
  }))
}
