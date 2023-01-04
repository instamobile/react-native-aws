const { createStoryFeed, getFollowers } = require('./common')

exports.hydrateFollowersStoryFeed = async record => {
  const newStory = record.new
  const followers = await getFollowers(newStory.authorID)

  if (!followers?.length) {
    return
  }

  // we hydrate the story feed for the author
  await hydrateStoryFeedForAuthor(newStory.authorID, newStory)

  // we hydrate the story feed for followers
  await hydrateStoryFeedForFollowers(followers, newStory)
}

const hydrateStoryFeedForAuthor = async (authorID, newStory) => {
  const newFeedStory = {
    authorID: newStory.authorID,
    storyID: newStory.id,
    destUserID: authorID,
  }
  return await createStoryFeed(newFeedStory)
}

const hydrateStoryFeedForFollowers = async (followers, newStory) => {
  const newFeedStory = {
    authorID: newStory.authorID,
    storyID: newStory.id,
  }
  const task = followers.map(async follower => {
    return await createStoryFeed({
      ...newFeedStory,
      destUserID: follower.user.id,
    })
  })

  await Promise.all(task)
}
