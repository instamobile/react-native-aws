const graphqlQuery = require('../graphql/queries')
const gql = require('graphql-tag')
const { listPosts } = require('./common')
const {
  getAllUsersBlockedByMe,
  getAllUsersBlockingMe,
} = require('../user-reporting/common')
const { getFriendshipType } = require('../socialGraph/common')

exports.fetchDiscoverFeedPosts = async event => {
  const userID = event.arguments.userID
  const limit = event.arguments.limit
  const nextToken = event.arguments.nextToken

  try {
    return onFetchDiscoverFeedPosts(userID, limit, nextToken)
  } catch (err) {
    return err
  }
}

const onFetchDiscoverFeedPosts = async (userID, limit, nextToken) => {
  const harshedUsersBlockedByMe = await getAllUsersBlockedByMe(userID) // List of users the viewer is blocking
  const harshedUsersBlockingMe = await getAllUsersBlockingMe(userID) // List of users who have blocked the viewer

  const res = await fetchNonRelatedPosts(
    userID,
    nextToken,
    limit,
    [],
    harshedUsersBlockedByMe,
    harshedUsersBlockingMe,
  )

  if (res.posts?.length > 0) {
    console.log(`fetched posts: ${JSON.stringify(res.posts)} `)
    return { items: res.posts, success: true, nextToken: res.newNextToken }
  } else {
    return { items: [], success: true, nextToken: null }
  }
}

const fetchNonRelatedPosts = async (
  userID,
  nextToken,
  limit,
  postsSoFar,
  harshedUsersBlockedByMe,
  harshedUsersBlockingMe,
) => {
  if (postsSoFar.length >= limit) {
    return { posts: postsSoFar, newNextToken: nextToken }
  }

  const res = await listPosts(nextToken, limit)
  const allPosts = res.items
  const newNextToken = res.nextToken

  if (allPosts.length === 0) {
    return { posts: postsSoFar, newNextToken }
  }

  const promises = allPosts.map(async post => {
    const { authorID } = post
    let query = gql(graphqlQuery.friendshipsBySourceUser)
    query = gql(graphqlQuery.mutualsBySourceUser)
    const res = await getFriendshipType(query, userID, authorID)

    let frienshipExist = !!res['friendshipsBySourceUser']?.items?.length
    frienshipExist = !!res['mutualsBySourceUser']?.items?.length

    if (frienshipExist) {
      return null
    }
    return { ...post }
  })

  const postsWithNull = await Promise.all(promises)
  const posts = postsWithNull.filter(post => post && userID !== post.authorID)

  const finalPosts = posts.filter(
    post =>
      post.authorID &&
      !harshedUsersBlockedByMe[post.authorID] &&
      !harshedUsersBlockingMe[post.authorID],
  )

  if (finalPosts.length < limit) {
    // if we didn't fetch enough discover posts from non-related friends AND we still have more posts in the database, we fetch one more page, etc.
    // WARNING: This is a recursive call, be extremely careful with this, make sure your stop condition is correct and you don't recurse infinitely.

    const newRes = await fetchNonRelatedPosts(
      userID,
      newNextToken,
      limit,
      [...postsSoFar, ...finalPosts],
      harshedUsersBlockedByMe,
      harshedUsersBlockingMe,
    )

    return {
      posts: [...finalPosts, ...(newRes.posts ?? [])],
      newNextToken: newRes.newNextToken,
    }
  } else {
    return { posts: [...postsSoFar, ...finalPosts], newNextToken }
  }
}
