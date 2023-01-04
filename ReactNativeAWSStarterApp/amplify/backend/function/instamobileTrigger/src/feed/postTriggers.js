const {
  createPostFeed,
  getFollowers,
  createEntityPostFeed,
  deleteEntityPostFeed,
  deletePostFeed,
  listRelatedPostFeed,
} = require('./common')

exports.hydratePostFeed = async record => {
  const newPost = record.new
  const followers = await getFollowers(newPost.authorID)

  if (!followers?.length) {
    return
  }

  // we hydrate the post feed for the author
  await hydratePostFeedForAuthor(newPost.authorID, newPost)

  // we hydrate the post feed for followers
  await hydratePostFeedForFollowers(followers, newPost)

  // we hydrate the entity post feed like hashtags
  await hydrateEntityPostFeed(newPost)
}

const hydratePostFeedForAuthor = async (authorID, newPost) => {
  const newFeedPost = {
    authorID: newPost.authorID,
    postID: newPost.id,
    destUserID: authorID,
  }
  return await createPostFeed(newFeedPost)
}

const hydratePostFeedForFollowers = async (followers, newPost) => {
  const newFeedPost = {
    authorID: newPost.authorID,
    postID: newPost.id,
  }
  const task = followers.map(async follower => {
    return await createPostFeed({
      ...newFeedPost,
      destUserID: follower.user.id,
    })
  })

  await Promise.all(task)
}

const hydrateEntityPostFeed = async newPost => {
  if (!newPost.hashtags?.length) {
    return
  }
  const newEntityFeedPost = {
    postID: newPost.id,
  }
  const hydrationTask = newPost.hashtags?.map(async hashtag => {
    return await createEntityPostFeed({
      ...newEntityFeedPost,
      hashtag: hashtag,
    })
  })

  await Promise.all(hydrationTask)
}

// When a post is deleted, we remove related post in PostFeed table
const dehydrateFeedUponPostDeletion = async record => {
  const oldPost = record.old

  const relatedPosts = await listRelatedPostFeed(oldPost.id)

  if (!relatedPosts?.length) {
    return
  }

  await deleteRelatedPost(relatedPosts)
  await deleteEntityPostFeed(oldPost.id)

  process.nextTick(() => {
    dehydrateFeedUponPostDeletion(record)
  })
}

exports.dehydrateFeedUponPostDeletion = dehydrateFeedUponPostDeletion

const deleteRelatedPost = async posts => {
  const task = posts.map(async post => {
    return await deletePostFeed(post.id)
  })

  await Promise.all(task)
}
