const { leaveChat, deleteChannel, deleteMessages } = require('../chat/common')
const { unfollow } = require('../socialGraph/unfollow')
const { unfriend } = require('../socialGraph/unfriend')

exports.onMarkedAbuse = async event => {
  const sourceUserID = event.arguments.sourceUserID
  const destUserID = event.arguments.destUserID
  const channelID =
    sourceUserID < destUserID
      ? sourceUserID + destUserID
      : destUserID + sourceUserID

  try {
    await unfriend(event)
    await unfollow(event)

    await leaveChat(channelID)
    await deleteMessages(channelID)
    await deleteChannel(channelID)

    return JSON.stringify({ statusCode: 200 })
  } catch (err) {
    return err
  }
}
