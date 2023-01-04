const {
  getExistingChannel,
  getChatFeedToUpdate,
  updateChannelItem,
  updateMessageItem,
  updateChannelFeedItem,
} = require('./common')

exports.markAsRead = async event => {
  const messageID = event.arguments.messageID
  const channelID = event.arguments.channelID

  const readUserIDs = event.arguments.readUserIDs

  try {
    await onMarkAsRead(messageID, channelID, readUserIDs)

    return JSON.stringify({ statusCode: 200 })
  } catch (err) {
    return err
  }
}

async function onMarkAsRead(messageID, channelID, readUserIDs) {
  const res = await getExistingChannel(channelID)

  if (!res?.id) {
    return { statusCode: 404, message: 'invalid op, channel does not exist' }
  }

  await updateChannelItem({ id: channelID, readUserIDs })
  await updateMessageItem({ id: messageID, readUserIDs })

  const res2 = await getChatFeedToUpdate(channelID)

  if (!res2.items?.length) {
    return { statusCode: 404, message: 'invalid op, no feed to update' }
  }

  const tasks = res2.items.map(async feedItem => {
    return await updateChannelFeedItem({
      id: feedItem.id,
      markedAsRead: true,
    })
  })
  await Promise.all(tasks)
}
