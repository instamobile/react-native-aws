const { makeGraphqlRequest } = require('../core/graphqlRequest')
const graphqlQuery = require('../graphql/queries')
const graphqlMutation = require('../graphql/mutations')
const gql = require('graphql-tag')
const {
  createItem,
  deleteItem,
  getItem,
  updateItem,
} = require('../core/helpers')

exports.createFriendship = async (sourceUserID, destUserID, type) => {
  const mutation = gql(graphqlMutation.createFriendship)

  return createItem(mutation, {
    id: sourceUserID + destUserID,
    sourceUserID,
    destUserID,
    type,
  })
}

exports.createMutualFriendship = async (sourceUserID, destUserID, type) => {
  const mutation = gql(graphqlMutation.createMutualFriendship)

  return createItem(mutation, {
    id: sourceUserID + destUserID,
    sourceUserID,
    destUserID,
    type,
  })
}

exports.createUnmutualFriendship = async (sourceUserID, destUserID, type) => {
  const mutation = gql(graphqlMutation.createUnmutualFriendship)

  return createItem(mutation, {
    id: sourceUserID + destUserID,
    sourceUserID,
    destUserID,
    type,
  })
}

const getFriendshipType = async (
  query,
  sourceUserID,
  destUserID,
  type,
  nextToken,
  size,
) => {
  const operation = {
    variables: {
      sourceUserID: sourceUserID,
      filter: {},
      size,
    },
    query,
  }

  if (type) {
    operation.variables.filter.type = {
      eq: type,
    }
  }

  if (destUserID) {
    operation.variables.filter.destUserID = {
      eq: destUserID,
    }
  }

  if (nextToken) {
    operation.variables.nextToken = nextToken
  }

  const res = await makeGraphqlRequest(operation)
  return res
}

exports.getFriendshipType = getFriendshipType

exports.deleteFriendship = async (sourceUserID, destUserID, type) => {
  const query = gql(graphqlQuery.friendshipsBySourceUser)

  const res = await getFriendshipType(query, sourceUserID, destUserID, type)

  const data = res.friendshipsBySourceUser

  if (!data.items?.length) {
    return
  }

  const tasks = data.items.map(async item => {
    const mutation = gql(graphqlMutation.deleteFriendship)
    return await deleteItem(mutation, item.id)
  })
  await Promise.all(tasks)
}

exports.deleteMutualFriendship = async (sourceUserID, destUserID, type) => {
  const query = gql(graphqlQuery.mutualsBySourceUser)

  const res = await getFriendshipType(query, sourceUserID, destUserID, type)

  const data = res.mutualsBySourceUser

  if (!data.items?.length) {
    return
  }

  const tasks = data.items.map(async item => {
    const mutation = gql(graphqlMutation.deleteMutualFriendship)
    return await deleteItem(mutation, item.id)
  })
  await Promise.all(tasks)
}

exports.deleteUnmutualFriendship = async (sourceUserID, destUserID, type) => {
  const query = gql(graphqlQuery.unmutualsBySourceUser)

  const res = await getFriendshipType(query, sourceUserID, destUserID, type)

  const data = res.unmutualsBySourceUser

  if (!data.items?.length) {
    return
  }

  const tasks = data.items.map(async item => {
    const mutation = gql(graphqlMutation.deleteUnmutualFriendship)
    return await deleteItem(mutation, item.id)
  })
  await Promise.all(tasks)
}

exports.fetchUser = async userID => {
  const query = gql(graphqlQuery.getUser)
  const variables = {
    id: userID,
  }

  const res = await getItem(query, variables)

  return res.getUser
}

exports.getMutualFrienship = async (userID, limit = 50) => {
  const query = gql(graphqlQuery.mutualsBySourceUser)

  const variables = {
    sourceUserID: userID,
    limit,
  }

  const res = await getItem(query, variables)

  return res.mutualsBySourceUser.items
}

exports.getFriendshipCountUpdater = async (sourceUserID, destUserID) => {
  const query = gql(graphqlQuery.getUser)

  const sourceUserRes = await getItem(query, {
    id: sourceUserID,
  })
  const sourceUser = sourceUserRes.getUser

  const destUserRes = await getItem(query, {
    id: destUserID,
  })
  const destUser = destUserRes.getUser

  const userIDToUser = {
    sourceUserID: sourceUser,
    destUserID: destUser,
  }

  return {
    increaseUnmutualFriendshipCount: (
      sourceUserID,
      destUserID,
      friendshipType,
    ) => {
      return updateUnmutualFriendshipCountsForUser(
        userIDToUser,
        sourceUserID,
        destUserID,
        friendshipType,
        'increase',
      )
    },
    decreaseUnmutualFriendshipCount: (
      sourceUserID,
      destUserID,
      friendshipType,
    ) => {
      return updateUnmutualFriendshipCountsForUser(
        userIDToUser,
        sourceUserID,
        destUserID,
        friendshipType,
        'decrease',
      )
    },
    increaseMutualFriendshipCount: (sourceUserID, destUserID) => {
      return updateMutualFriendshipCountForUser(
        userIDToUser,
        sourceUserID,
        destUserID,
        'increase',
      )
    },
    decreaseMutualFriendshipCount: (sourceUserID, destUserID) => {
      return updateMutualFriendshipCountForUser(
        userIDToUser,
        sourceUserID,
        destUserID,
        'decrease',
      )
    },
  }
}

const updateUnmutualFriendshipCountsForUser = async (
  userIDToUser,
  sourceUserID,
  destUserID,
  friendshipType,
  operationType,
) => {
  const friendshipQuery = gql(graphqlQuery.unmutualsBySourceUser)

  const res = await getFriendshipType(
    friendshipQuery,
    sourceUserID,
    destUserID,
    friendshipType,
  )

  const doesExist = !!res.unmutualsBySourceUser.items?.length

  let fieldKey = 'inboundFriendshipCount'
  if (friendshipType === 'outbound') {
    fieldKey = 'outboundFriendshipCount'
  }

  return updateFriendshipUserCount(
    userIDToUser,
    sourceUserID,
    doesExist,
    operationType,
    fieldKey,
  )
}

const updateMutualFriendshipCountForUser = async (
  userIDToUser,
  sourceUserID,
  destUserID,
  operationType,
) => {
  const friendshipQuery = gql(graphqlQuery.friendshipsBySourceUser)

  const res = await getFriendshipType(
    friendshipQuery,
    sourceUserID,
    destUserID,
    'reciprocal',
  )

  const doesExist = !!res.friendshipsBySourceUser.items?.length

  return updateFriendshipUserCount(
    userIDToUser,
    sourceUserID,
    doesExist,
    operationType,
    'mutualFriendshipCount',
  )
}

const updateFriendshipUserCount = async (
  userIDToUser,
  userID,
  doesExist,
  operationType,
  friendshipKey,
) => {
  const userMutation = gql(graphqlMutation.updateUser)

  const previousCountValue = userIDToUser?.[userID]?.[friendshipKey] || 0

  if (!doesExist && operationType === 'increase') {
    const newCountValue = previousCountValue + 1
    return updateItem(userMutation, {
      id: userID,
      [friendshipKey]: newCountValue,
    })
  }
  if (doesExist && operationType === 'decrease') {
    newCountValue = previousCountValue - 1
    return updateItem(userMutation, {
      id: userID,
      [friendshipKey]: newCountValue >= 0 ? newCountValue : 0,
    })
  }
}
