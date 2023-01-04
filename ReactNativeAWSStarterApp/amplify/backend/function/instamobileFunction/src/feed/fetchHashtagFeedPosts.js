const { listEntityPostFeed } = require('./common')
const {
  getAllUsersBlockedByMe,
  getAllUsersBlockingMe,
} = require('../user-reporting/common')

exports.fetchHashtagFeedPosts = async event => {
  const userID = event.arguments.userID
  const hashtag = event.arguments.hashtag
  const limit = event.arguments.limit
  const nextToken = event.arguments.nextToken

  try {
    return onFetchHashtagFeedPosts(userID, hashtag, limit, nextToken)
  } catch (err) {
    return err
  }
}

const onFetchHashtagFeedPosts = async (userID, hashtag, limit, nextToken) => {
  const harshedUsersBlockedByMe = await getAllUsersBlockedByMe(userID) // List of users the viewer is blocking
  const harshedUsersBlockingMe = await getAllUsersBlockingMe(userID) // List of users who have blocked the viewer

  const res = await fetchEntityPosts(
    userID,
    hashtag,
    nextToken,
    limit,
    [],
    harshedUsersBlockedByMe,
    harshedUsersBlockingMe,
  )

  if (res.posts?.length > 0) {
    console.log(`returned Entity posts: ${JSON.stringify(res.posts)} `)
    return { items: res.posts, success: true, nextToken: res.newNextToken }
  } else {
    return { items: [], success: true, nextToken: null }
  }
}

const fetchEntityPosts = async (
  userID,
  hashtag,
  nextToken,
  limit,
  postsSoFar,
  harshedUsersBlockedByMe,
  harshedUsersBlockingMe,
) => {
  if (postsSoFar.length >= limit) {
    return { posts: postsSoFar, newNextToken: nextToken }
  }

  const res = await listEntityPostFeed(hashtag, nextToken, limit)
  const posts = res.items
  const newNextToken = res.nextToken

  if (posts.length === 0) {
    return { posts: postsSoFar, newNextToken }
  }

  const finalPosts = posts.filter(
    item =>
      !harshedUsersBlockedByMe[item.post?.authorID] &&
      !harshedUsersBlockingMe[item.post?.authorID],
  )

  if (finalPosts.length < limit) {
    // if we didn't fetch enough discover posts from non-related friends AND we still have more posts in the database, we fetch one more page, etc.
    // WARNING: This is a recursive call, be extremely careful with this, make sure your stop condition is correct and you don't recurse infinitely.

    const newRes = await fetchEntityPosts(
      userID,
      hashtag,
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
