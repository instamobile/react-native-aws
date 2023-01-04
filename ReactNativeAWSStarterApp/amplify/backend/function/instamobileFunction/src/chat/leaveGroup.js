const {
  hydrateChannelFeedsForAllParticipants,
  getExistingChannel,
  getChannelParticipants,
  updateChannelItem,
  leaveChat,
} = require('./common')

exports.leaveGroup = async event => {
  const channelID = event.arguments.channelID
  const userID = event.arguments.userID
  const content = event.arguments.content

  try {
    await onLeaveGroup(userID, channelID, content)

    return JSON.stringify({ statusCode: 200 })
  } catch (err) {
    return err
  }
}

const onLeaveGroup = async (userID, channelID, content) => {
  const res = await getExistingChannel(channelID)

  if (!res?.id) {
    return { statusCode: 404, message: 'invalid op, channel does not exist' }
  }

  const { participants } = res
  const user = participants.find(participant => participant?.id === userID)
  const newParticipants = participants.filter(
    participant => participant?.id !== userID,
  )

  await updateChannelItem({
    id: channelID,
    participants: getChannelParticipants(newParticipants),
  })

  await leaveChat(channelID, userID)

  await hydrateChannelFeedsForAllParticipants(
    { ...res, participants: getChannelParticipants(newParticipants) },
    {
      senderID: userID,
      sender: user,
      content: content,
    },
    false,
  )
}
