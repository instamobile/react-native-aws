const {
  hydrateChannelFeedsForAllParticipants,
  getExistingChannel,
} = require('./common')

exports.onGroupUpdate = async event => {
  const channelID = event.arguments.channelID
  const userID = event.arguments.userID
  const content = event.arguments.content

  try {
    await onGroupUpdate(userID, channelID, content)

    return JSON.stringify({ statusCode: 200 })
  } catch (err) {
    return err
  }
}

const onGroupUpdate = async (userID, channelID, content) => {
  const res = await getExistingChannel(channelID)

  if (!res?.id) {
    return { statusCode: 404, message: 'invalid op, channel does not exist' }
  }

  const { participants } = res
  const user = participants.find(participant => participant?.id === userID)

  await hydrateChannelFeedsForAllParticipants(res, {
    senderID: userID,
    sender: user,
    content: content,
  })
}
