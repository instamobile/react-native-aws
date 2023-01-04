const { getPost, updatePost } = require('./common')

exports.addReaction = async event => {
  const reaction = event.arguments.reaction
  const postID = event.arguments.postID
  const authorID = event.arguments.authorID

  try {
    await onAddReaction(reaction, postID, authorID)
    return JSON.stringify({ statusCode: 200 })
  } catch (err) {
    return err
  }
}

const onAddReaction = async (reaction, postID, authorID) => {
  const reactionKeys = [
    'like',
    'love',
    'laugh',
    'angry',
    'suprised',
    'cry',
    'sad',
  ]

  const post = await getPost(postID)
  const postReactionsDict = {}
  reactionKeys.forEach(reactionKey => {
    postReactionsDict[reactionKey] = post?.reactions?.[reactionKey] ?? []
  })
  var newPostReactionsDict = {}
  var reactionsCount = post.reactionsCount ?? 0

  const reactionKeyForAuthorAndPost = reactionKeys.find(
    key => postReactionsDict[key] && postReactionsDict[key].includes(authorID),
  )

  if (reactionKeyForAuthorAndPost) {
    // This user already had a reaction on this post in the past, so we remove it or replace it
    if (reactionKeyForAuthorAndPost === reaction) {
      // The reaction is the same, so we remove it
      newPostReactionsDict = { ...postReactionsDict }
      newPostReactionsDict[reactionKeyForAuthorAndPost] = postReactionsDict[
        reactionKeyForAuthorAndPost
      ].filter(id => id !== authorID)
      reactionsCount = reactionsCount - 1
    } else {
      // The reaction is different, so we replace it
      newPostReactionsDict = { ...postReactionsDict }
      newPostReactionsDict[reactionKeyForAuthorAndPost] = postReactionsDict[
        reactionKeyForAuthorAndPost
      ].filter(id => id !== authorID) // remove the old reaction
      newPostReactionsDict[reaction] = [
        ...newPostReactionsDict[reaction],
        authorID,
      ] // add the new reaction
    }
  } else {
    // This user had no reaction on this post in the past, so we add it
    newPostReactionsDict = { ...postReactionsDict }
    newPostReactionsDict[reaction] = [
      ...newPostReactionsDict[reaction],
      authorID,
    ] // add the new reaction
    reactionsCount = reactionsCount + 1
  }
  const newPostData = {
    id: post.id,
    reactions: newPostReactionsDict,
    reactionsCount,
  }
  await updatePost(newPostData)
}
