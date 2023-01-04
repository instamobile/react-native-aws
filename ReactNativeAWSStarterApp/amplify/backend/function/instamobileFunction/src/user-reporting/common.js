const { makeGraphqlRequest } = require('../core/graphqlRequest')
const graphqlQuery = require('../graphql/queries')
const gql = require('graphql-tag')

exports.getBlockedUsers = async (sourceUserID, destUserID) => {
  const query = gql(graphqlQuery.userReportsBySourceUser)
  const operation = {
    variables: {
      source: sourceUserID,
      filter: {
        dest: {
          eq: destUserID,
        },
      },
    },
    query,
  }
  const res = await makeGraphqlRequest(operation)

  return res.userReportsBySourceUser
}

exports.getAllUsersBlockedByMe = async userID => {
  const query = gql(graphqlQuery.userReportsBySourceUser)
  const operation = {
    variables: {
      source: userID,
    },
    query,
  }
  const res = await makeGraphqlRequest(operation)

  const harshedBlockedUsers = {}
  res.userReportsBySourceUser.items?.forEach(item => {
    harshedBlockedUsers[item.dest] = true
  })
  return harshedBlockedUsers
}

exports.getAllUsersBlockingMe = async userID => {
  const query = gql(graphqlQuery.userReportsByDestUser)
  const operation = {
    variables: {
      dest: userID,
    },
    query,
  }
  const res = await makeGraphqlRequest(operation)

  const harshedBlockedUsers = {}
  res.userReportsByDestUser.items?.forEach(item => {
    harshedBlockedUsers[item.source] = true
  })
  return harshedBlockedUsers
}
