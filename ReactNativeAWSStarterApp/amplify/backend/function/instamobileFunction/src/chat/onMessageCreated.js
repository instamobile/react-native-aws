const {
  hydrateChannelFeedsForAllParticipants,
  getExistingChannel,
  updateChannelItem,
  getMessageItem,
  getChannelParticipants,
} = require('./common')

exports.onMessageCreated = async event => {
  const messageID = event.arguments.messageID
  const channelID = event.arguments.channelID

  try {
    return onMessageCreated(messageID, channelID)
  } catch (err) {
    return err
  }
}

const onMessageCreated = async (messageID, channelID) => {
  const channel = await getExistingChannel(channelID)
  const message = await getMessageItem(messageID)

  if (!channel?.id || !message?.id) {
    return {
      statusCode: 404,
      message: 'invalid op, Channel or Message does not exist',
    }
  }

  await updateChannelItem({
    id: channel.id,
    creatorID: channel.creatorID,
    participants: getChannelParticipants(channel.participants),
    lastMessage: message?.content || message?.url,
    lastMessageDate: message.createdAt,
    lastMessageSenderId: message?.senderID,
    lastThreadMessageId: messageID,
    readUserIDs: [message?.senderID],
    // participantProfilePictureURLs: message?.participantProfilePictureURLs,
  })

  await hydrateChannelFeedsForAllParticipants(channel, message)
  return channel
}
