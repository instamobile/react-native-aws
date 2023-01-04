const graphqlQuery = require('../graphql/queries')
const graphqlMutation = require('../graphql/mutations')
const gql = require('graphql-tag')
const { getItem, createItem, deleteItem } = require('../core/helpers')

exports.createPostFeed = async item => {
  const mutation = gql(graphqlMutation.createPostFeed)

  return createItem(mutation, item)
}

exports.deletePostFeed = async id => {
  const mutation = gql(graphqlMutation.deletePostFeed)

  return deleteItem(mutation, id)
}

exports.listRelatedPostFeed = async postID => {
  const query = gql(graphqlQuery.getPostFeedForPost)

  const variables = {
    postID,
    limit: 1000,
  }

  const res = await getItem(query, variables)

  return res.getPostFeedForPost.items
}

exports.createEntityPostFeed = async item => {
  const mutation = gql(graphqlMutation.createEntityPostFeed)

  return createItem(mutation, item)
}

exports.deleteEntityPostFeed = async id => {
  const mutation = gql(graphqlMutation.deleteEntityPostFeed)

  return deleteItem(mutation, id)
}

exports.createStoryFeed = async item => {
  const mutation = gql(graphqlMutation.createStoryFeed)

  return createItem(mutation, item)
}

exports.getFollowers = async userID => {
  const query = gql(graphqlQuery.unmutualsBySourceUser)

  const variables = {
    sourceUserID: userID,
    filter: {
      type: {
        eq: 'inbound',
      },
    },
    limit: 1000,
  }

  const res = await getItem(query, variables)

  return res.unmutualsBySourceUser.items
}
