const {
  getUserChannelFeed,
  getMessageItem,
  updateMessageItem,
} = require('./common')

exports.addChatReaction = async event => {
  const channelID = event.arguments.channelID
  const authorID = event.arguments.authorID
  const messageID = event.arguments.messageID
  const reaction = event.arguments.reaction

  try {
    await onAddChatReaction(channelID, authorID, messageID, reaction)
    return JSON.stringify({ statusCode: 200 })
  } catch (err) {
    return JSON.stringify(err)
  }
}

const onAddChatReaction = async (channelID, authorID, messageID, reaction) => {
  const res = await getUserChannelFeed(channelID)

  if (!res.items?.length) {
    return { statusCode: 404, message: 'invalid op, channel does not exist' }
  }

  const reactionKeys = [
    'like',
    'love',
    'laugh',
    'angry',
    'suprised',
    'cry',
    'sad',
  ]

  const message = await getMessageItem(messageID)

  const messageReactionsDict = {}
  reactionKeys.forEach(reactionKey => {
    messageReactionsDict[reactionKey] = message?.reactions?.[reactionKey] ?? []
  })
  var newMessageReactionsDict = {}
  var reactionsCount = message.reactionsCount ?? 0

  const reactionKeyForAuthorAndMessage = reactionKeys.find(
    key =>
      messageReactionsDict[key] && messageReactionsDict[key].includes(authorID),
  )

  if (reactionKeyForAuthorAndMessage) {
    // This user already had a reaction on this message in the past, so we remove it or replace it
    if (reactionKeyForAuthorAndMessage === reaction) {
      // The reaction is the same, so we remove it
      newMessageReactionsDict = { ...messageReactionsDict }
      newMessageReactionsDict[reactionKeyForAuthorAndMessage] =
        messageReactionsDict[reactionKeyForAuthorAndMessage].filter(
          id => id !== authorID,
        )
      reactionsCount = reactionsCount - 1
    } else {
      // The reaction is different, so we replace it
      newMessageReactionsDict = { ...messageReactionsDict }
      newMessageReactionsDict[reactionKeyForAuthorAndMessage] =
        messageReactionsDict[reactionKeyForAuthorAndMessage].filter(
          id => id !== authorID,
        ) // remove the old reaction
      newMessageReactionsDict[reaction] = [
        ...newMessageReactionsDict[reaction],
        authorID,
      ] // add the new reaction
    }
  } else {
    // This user had no reaction on this message in the past, so we add it
    newMessageReactionsDict = { ...messageReactionsDict }
    newMessageReactionsDict[reaction] = [
      ...newMessageReactionsDict[reaction],
      authorID,
    ] // add the new reaction
    reactionsCount = reactionsCount + 1
  }
  const newMessageData = {
    id: message.id,
    reactions: newMessageReactionsDict,
    reactionsCount,
  }
  await updateMessageItem(newMessageData)
}
