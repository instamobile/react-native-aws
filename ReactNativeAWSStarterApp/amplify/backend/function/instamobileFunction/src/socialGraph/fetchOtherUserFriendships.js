const graphqlQuery = require('../graphql/queries')
const gql = require('graphql-tag')
const { getFriendshipType } = require('./common')
const {
  getAllUsersBlockedByMe,
  getAllUsersBlockingMe,
} = require('../user-reporting/common')

exports.fetchOtherUserFriendships = async event => {
  const viewerID = event.arguments.viewerID
  const userID = event.arguments.userID
  const type = event.arguments.type
  const limit = event.arguments.limit
  const nextToken = event.arguments.nextToken

  try {
    const res = await onFetchOtherUserFriendships(
      viewerID,
      userID,
      type,
      nextToken,
      limit,
    )
    return res
  } catch (err) {
    console.log('+++ fetchOtherUserFriendships err', err)
    return JSON.stringify(err)
  }
}

const onFetchOtherUserFriendships = async (
  viewerID,
  userID,
  type,
  nextToken,
  limit,
) => {
  const harshedViewerBlockedUsers = await getAllUsersBlockedByMe(viewerID) // List of users the viewer is blocking
  const harshedUsersBlockingViewers = await getAllUsersBlockingMe(viewerID) // List of users who have blocked the viewer

  let query = gql(graphqlQuery.unmutualsBySourceUser)
  let friendshipType = 'outbound'

  if (type === 'reciprocal') {
    query = gql(graphqlQuery.mutualsBySourceUser)
    friendshipType = 'mutual_users'
  } else if (type === 'inbound') {
    friendshipType = 'inbound'
  }
  const response = await getFriendshipType(
    query,
    userID,
    null,
    friendshipType,
    nextToken,
    limit,
  )

  let friendList = response['unmutualsBySourceUser']?.items

  if (type === 'reciprocal') {
    friendList = response['mutualsBySourceUser']?.items
  }

  const friends = friendList.filter(
    friend =>
      !harshedViewerBlockedUsers[friend.user?.id] &&
      !harshedUsersBlockingViewers[friend.user?.id],
  )

  const frienshipQuery = gql(graphqlQuery.friendshipsBySourceUser)

  const promiseFriendships = friends.map(async friend => {
    const friendship = await getFriendshipType(
      frienshipQuery,
      viewerID,
      friend.user?.id,
    )
    return friendship.friendshipsBySourceUser?.items[0] ?? {}
  })

  const friendships = await Promise.all(promiseFriendships)

  var hash = {}
  friendships.forEach(friendship => {
    if (friendship.user?.id) {
      hash[friendship.user?.id] = friendship.type
    }
  })

  const res = friends.map(friend => ({
    ...friend,
    type: hash[friend.user?.id] || 'none',
  }))

  if (res?.length > 0) {
    console.log(JSON.stringify(hash))
    return { friendships: res, success: true }
  } else {
    return { friendships: [], success: true }
  }
}
