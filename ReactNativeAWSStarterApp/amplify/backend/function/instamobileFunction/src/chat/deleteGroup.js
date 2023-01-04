const {
  getUserChannelFeed,
  deleteChannelFeedItem,
  deleteMessages,
  deleteChannel,
} = require('./common')

exports.deleteGroup = async event => {
  const channelID = event.arguments.channelID

  try {
    await onDeleteGroup(channelID)
    return JSON.stringify({ statusCode: 200 })
  } catch (err) {
    return err
  }
}

const onDeleteGroup = async channelID => {
  const res = await getUserChannelFeed(channelID)

  if (!res.items?.length) {
    return { statusCode: 404, message: 'invalid op, channel does not exist' }
  }

  await deleteChannel(channelID)

  const deleteChannelFeedTask = res.items?.map(async item => {
    // we delete channel feed for each participant
    return await deleteChannelFeedItem(item.id)
  })
  await Promise.all(deleteChannelFeedTask)
  await deleteMessages(channelID)
}
