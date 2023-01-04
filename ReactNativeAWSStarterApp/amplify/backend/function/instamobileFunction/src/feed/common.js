const graphqlQuery = require('../graphql/queries')
const graphqlMutation = require('../graphql/mutations')
const gql = require('graphql-tag')
const {
  updateItem,
  createItem,
  deleteItem,
  getItem,
  getUnixTimeStamp,
} = require('../core/helpers')

exports.extractHashtags = text => {
  const regexp = /(\s|^)\#\w\w+\b/gm
  let result = text?.match(regexp)
  if (result) {
    result = result.map(hashtag => hashtag.trim())
    return result
  } else {
    return []
  }
}

exports.createPost = post => {
  const mutation = gql(graphqlMutation.createPost)

  return createItem(mutation, post)
}

exports.updatePost = post => {
  const mutation = gql(graphqlMutation.updatePost)

  return updateItem(mutation, post)
}

exports.getPost = async postID => {
  const query = gql(graphqlQuery.getPost)
  const variables = {
    id: postID,
  }

  const res = await getItem(query, variables)

  return res.getPost
}

exports.listPosts = async (nextToken, limit) => {
  const query = gql(graphqlQuery.listPosts)
  const variables = {
    nextToken,
    limit,
  }

  const res = await getItem(query, variables)

  return res.listPosts
}

exports.listEntityPostFeed = async (hashtag, nextToken, limit) => {
  const query = gql(graphqlQuery.getEntityPostFeedByhashtag)
  const variables = {
    hashtag,
    limit,
    nextToken,
  }

  const res = await getItem(query, variables)

  return res.getEntityPostFeedByhashtag
}

exports.createComment = comment => {
  const mutation = gql(graphqlMutation.createComment)

  return createItem(mutation, comment)
}

const getFeed = async (query, authorID, filter) => {
  const variables = {
    authorID,
    filter,
    limit: 300,
  }

  const res = await getItem(query, variables)
  return res
}

const dehydrateDestUserPostFeed = async (authorID, destUserID) => {
  const query = gql(graphqlQuery.getPostFeedByAuthor)

  const filter = {
    destUserID: {
      eq: destUserID,
    },
  }

  const res = await getFeed(query, authorID, filter)

  if (!res.getPostFeedByAuthor.items?.length) {
    return
  }

  const mutation = gql(graphqlMutation.deletePostFeed)
  const tasks = res.getPostFeedByAuthor.items?.map(async postFeedItem => {
    return await deleteItem(mutation, postFeedItem.id)
  })
  await Promise.all(tasks)
  process.nextTick(() => {
    dehydrateDestUserPostFeed(authorID, destUserID)
  })
}

exports.dehydrateDestUserPostFeed = dehydrateDestUserPostFeed

const dehydrateDestUserStoryFeed = async (authorID, destUserID) => {
  const query = gql(graphqlQuery.getStoryFeedByAuthor)

  const currentTime = getUnixTimeStamp()
  const dayInterVal = 60 * 60 * 24
  const dayAgo = currentTime - dayInterVal

  const filter = {
    createdAt: {
      gt: dayAgo,
    },
  }

  const res = await getFeed(query, authorID, filter)

  if (!res.getStoryFeedByAuthor.items?.length) {
    return
  }

  const mutation = gql(graphqlMutation.deleteStoryFeed)
  const tasks = res.getStoryFeedByAuthor.items?.map(async storyFeedItem => {
    return await deleteItem(mutation, storyFeedItem.id)
  })
  await Promise.all(tasks)
  process.nextTick(() => {
    dehydrateDestUserStoryFeed(authorID, destUserID)
  })
}

exports.dehydrateDestUserStoryFeed = dehydrateDestUserStoryFeed
