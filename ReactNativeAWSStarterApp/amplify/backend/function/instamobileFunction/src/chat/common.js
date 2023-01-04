const { makeGraphqlRequest } = require('../core/graphqlRequest')
const graphqlQuery = require('../graphql/queries')
const graphqlMutation = require('../graphql/mutations')
const gql = require('graphql-tag')
const { updateItem, createItem, deleteItem } = require('../core/helpers')

exports.updateChannelItem = async item => {
  const mutation = gql(graphqlMutation.updateChannel)

  await updateItem(mutation, item)
}

const updateChannelFeedItem = async item => {
  const mutation = gql(graphqlMutation.updateChannelFeed)

  await updateItem(mutation, item)
}
exports.updateChannelFeedItem = updateChannelFeedItem

exports.updateMessageItem = async item => {
  const mutation = gql(graphqlMutation.updateMessage)

  await updateItem(mutation, item)
}

exports.deleteMessageItem = async itemID => {
  const mutation = gql(graphqlMutation.deleteMessage)
  await deleteItem(mutation, itemID)
}

const deleteChannelFeedItem = async itemID => {
  const mutation = gql(graphqlMutation.deleteChannelFeed)

  await deleteItem(mutation, itemID)
}

exports.deleteChannelFeedItem = deleteChannelFeedItem

exports.getExistingChannel = async id => {
  const query = gql(graphqlQuery.getChannel)
  const operation = {
    variables: {
      id: id,
    },
    query,
  }
  const res = await makeGraphqlRequest(operation)

  return res.getChannel
}

exports.getMessageItem = async id => {
  const query = gql(graphqlQuery.getMessage)
  const operation = {
    variables: {
      id: id,
    },
    query,
  }
  const res = await makeGraphqlRequest(operation)

  return res.getMessage
}

const createChannelFeed = async item => {
  const mutation = gql(graphqlMutation.createChannelFeed)
  return createItem(mutation, item)
}

const getUserChannelFeed = async (channelID, userID) => {
  const query = gql(graphqlQuery.channelFeedByChannelID)
  const variables = {
    channelID,
  }

  if (userID) {
    variables.filter = {
      userID: {
        eq: userID,
      },
    }
  }

  const operation = {
    variables,
    query,
  }

  const res = await makeGraphqlRequest(operation)

  return res.channelFeedByChannelID
}

exports.getUserChannelFeed = getUserChannelFeed

exports.getMostRecentMessage = async channelID => {
  const query = gql(graphqlQuery.messagesByChannelID)
  const operation = {
    variables: {
      channelID,
      limit: 1,
      sortDirection: 'DESC',
    },
    query,
  }
  const res = await makeGraphqlRequest(operation)

  return res.messagesByChannelID
}

const getChannelParticipants = participants => {
  return participants.map(participant => ({
    id: participant.id,
    fullName: participant.fullName || '',
    username: participant.username || '',
    firstName: participant.firstName || '',
    lastName: participant.lastName || '',
    profilePictureKey: participant.profilePictureKey || '',
  }))
}

exports.getChannelParticipants = getChannelParticipants

exports.hydrateChannelFeedsNewChannel = async (channel, message) => {
  const allParticipants = [...channel.participants]

  const tasks = channel.participants.map(async participant => {
    let otherParticipants = allParticipants?.filter(
      otherParticipant => otherParticipant?.id != participant.id,
    )

    let titleForChatChannel = channel?.name
    if (otherParticipants?.length == 1) {
      titleForChatChannel = otherParticipants[0].fullName
    }

    return await createChannelFeed({
      id: participant.id + channel.id,
      channelID: channel.id,
      creatorID: channel.creatorID,
      title: titleForChatChannel || '',
      content: message?.content || '',
      markedAsRead: participant.id === message.sender?.id ? true : false,
      userID: participant.id,
      participants: getChannelParticipants(otherParticipants),
    })
  })
  await Promise.all(tasks)
}

const getChatFeedToUpdate = async channelID => {
  const query = gql(graphqlQuery.channelFeedByChannelID)
  const operation = {
    variables: {
      channelID,
    },
    query,
  }
  const res = await makeGraphqlRequest(operation)

  return res.channelFeedByChannelID
}
exports.getChatFeedToUpdate = getChatFeedToUpdate

exports.hydrateChannelFeedsForAllParticipants = async (channel, message) => {
  const res = await getChatFeedToUpdate(channel.id)

  if (!res.items?.length) {
    return { statusCode: 404, message: 'invalid op, no feed to update' }
  }

  const allParticipants = [...channel.participants]

  const tasks = res.items.map(async feedItem => {
    let otherParticipants = allParticipants?.filter(
      otherParticipant => otherParticipant?.id != feedItem.userID,
    )

    let titleForChatChannel = channel?.name
    if (otherParticipants?.length == 1) {
      titleForChatChannel = otherParticipants[0].fullName
    }

    return await updateChannelFeedItem({
      id: feedItem.id,
      channelID: channel.id,
      creatorID: channel.creatorID,
      title: titleForChatChannel ?? '',
      content: message?.content || '',
      markedAsRead: feedItem.userID === message.sender?.id ? true : false,
      participants: getChannelParticipants(otherParticipants),
    })
  })
  await Promise.all(tasks)
}

exports.leaveChat = async (channelID, userID) => {
  const res = await getUserChannelFeed(channelID, userID)

  const tasks = res.items.map(async feedItem => {
    return await deleteChannelFeedItem(feedItem.id)
  })
  await Promise.all(tasks)
}

exports.deleteChannel = async channelID => {
  const mutation = gql(graphqlMutation.deleteChannel)

  await deleteItem(mutation, channelID)
}

const deleteMessages = async channelID => {
  const mutation = gql(graphqlMutation.deleteMessage)
  const query = gql(graphqlQuery.messagesByChannelID)
  const operation = {
    variables: {
      channelID,
      limit: 200,
    },
    query,
  }
  const res = await makeGraphqlRequest(operation)

  if (!res.messagesByChannelID.items?.length) {
    return
  }

  const tasks = res.messagesByChannelID.items?.map(async messageItem => {
    return await deleteItem(mutation, messageItem.id)
  })
  await Promise.all(tasks)
  process.nextTick(() => {
    deleteMessages(channelID)
  })
}

exports.deleteMessages = deleteMessages
