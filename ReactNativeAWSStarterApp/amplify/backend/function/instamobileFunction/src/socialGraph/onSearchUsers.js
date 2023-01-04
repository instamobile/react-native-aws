const {
  getAllUsersBlockedByMe,
  getAllUsersBlockingMe,
} = require('../user-reporting/common')
const { getFriendshipType } = require('./common')
const graphqlQuery = require('../graphql/queries')
const { makeGraphqlRequest } = require('../core/graphqlRequest')
const gql = require('graphql-tag')

exports.onSearchUsers = async event => {
  const userID = event.arguments.userID
  const keyword = event.arguments.keyword
  const nextToken = event.arguments.nextToken
  const limit = event.arguments.limit

  try {
    return onSearchUsers(userID, keyword, nextToken, limit)
  } catch (err) {
    return err
  }
}

const onSearchUsers = async (userID, keyword, nextToken, limit) => {
  const res = await makeGraphqlSearchRequest(userID, keyword, nextToken, limit)
  const users = res.items

  const newNextToken = res.nextToken

  const harshedUsersBlockedByMe = await getAllUsersBlockedByMe(userID)
  const harshedUsersBlockingMe = await getAllUsersBlockingMe(userID)

  const filteredUsers = users.filter(user => {
    return (
      user?.id &&
      !harshedUsersBlockedByMe[user?.id] &&
      !harshedUsersBlockingMe[user?.id] &&
      user?.id !== userID
    )
  })

  const tasks = filteredUsers.map(async user => {
    const isFrienshipOutBound = await getIsFriendshipOutBound(userID, user.id)

    if (!isFrienshipOutBound) {
      return user
    }
    return null
  })
  const searchResult = await Promise.all(tasks)

  const finalUsers = searchResult.filter(user => !!user)

  return {
    items: finalUsers || [],
    nextToken: newNextToken,
  }
}

const makeGraphqlSearchRequest = async (
  userID,
  keyword,
  nextToken,
  limit = 80,
) => {
  const searchParams = {
    wildcard: `*${keyword}`,
  }
  const query = gql(graphqlQuery.searchUsers)
  const operation = {
    variables: {
      filter: {
        fullName: searchParams,
        id: {
          ne: userID,
        },
      },
      limit: limit,
      nextToken: nextToken,
    },
    query,
  }
  const res = await makeGraphqlRequest(operation)

  return res.searchUsers
}

const getIsFriendshipOutBound = async (sourceUserID, destUserID) => {
  const query = gql(graphqlQuery.friendshipsBySourceUser)

  const res = await getFriendshipType(query, sourceUserID, destUserID)

  return !!res.friendshipsBySourceUser.items?.length
}
