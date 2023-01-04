const {
  hydrateChannelFeedsForAllParticipants,
  updateChannelItem,
  deleteMessageItem,
  getExistingChannel,
  getMostRecentMessage,
} = require('./common')

exports.deleteMessageAndUpdateChannel = async event => {
  const messageID = event.arguments.messageID
  const channelID = event.arguments.channelID

  try {
    await onDeleteMessage(messageID, channelID)

    return JSON.stringify({ statusCode: 200 })
  } catch (err) {
    return err
  }
}

const onDeleteMessage = async (messageID, channelID) => {
  await deleteMessageItem(messageID)

  const res = await getMostRecentMessage(channelID)

  let lastMessage = null
  if (res?.items?.length > 0) {
    lastMessage = res.items[0]
  }
  let updatedMetadata = {
    id: channelID,
    lastMessage: '',
    lastMessageDate: '',
    lastMessageSenderId: '',
    lastThreadMessageId: '',
    readUserIDs: [],
    // participantProfilePictureURLs: [],
  }
  if (lastMessage) {
    updatedMetadata = {
      id: channelID,
      lastMessage:
        lastMessage.content.length > 0 ? lastMessage.content : lastMessage.url,
      lastMessageDate: lastMessage.createdAt,
      lastMessageSenderId: lastMessage.senderID,
      lastThreadMessageId: lastMessage.id,
      readUserIDs: [lastMessage.senderID],
      // participantProfilePictureURLs: lastMessage.participantProfilePictureURLs,
    }
  }
  // We update channel's metadata afected by the new message
  await updateChannelItem(updatedMetadata)

  const res2 = await getExistingChannel(channelID)

  await hydrateChannelFeedsForAllParticipants(res2, lastMessage)
}
