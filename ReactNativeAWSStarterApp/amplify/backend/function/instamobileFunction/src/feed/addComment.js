const { getPost, updatePost, createComment } = require('./common')

exports.addComment = async event => {
  const postID = event.arguments.postID
  const authorID = event.arguments.authorID
  const commentText = event.arguments.commentText

  try {
    await onAddComment(postID, authorID, commentText)
    return JSON.stringify({ statusCode: 200 })
  } catch (err) {
    return err
  }
}

const onAddComment = async (postID, authorID, commentText) => {
  const commentData = {
    commentText,
    authorID,
    postID,
  }

  await createComment(commentData)

  // We update the post data, with the new comment count
  const post = await getPost(postID)

  const postData = {
    id: post.id,
    commentCount: (post?.commentCount ?? 0) + 1,
  }

  await updatePost(postData)
}
