const { makeGraphqlRequest } = require('./graphqlRequest')
const uuid = require('uuid')

const getUnixTimeStamp = () => {
  const date = new Date()
  return Math.floor(date.getTime() / 1000)
}

exports.getUnixTimeStamp = getUnixTimeStamp

const updateItem = async (mutation, item) => {
  const operation = {
    variables: {
      input: {
        ...item,
        updatedAt: getUnixTimeStamp(),
      },
    },
    mutation,
  }
  await makeGraphqlRequest(operation)
}

exports.updateItem = updateItem

exports.createItem = async (mutation, item) => {
  await updateItem(mutation, {
    id: uuid.v4(),
    ...item,
    createdAt: getUnixTimeStamp(),
  })
}

exports.deleteItem = async (mutation, id) => {
  const operation = {
    variables: {
      input: { id },
    },
    mutation,
  }
  await makeGraphqlRequest(operation)
}

exports.getItem = async (query, variables) => {
  const operation = {
    variables,
    query,
  }

  const res = await makeGraphqlRequest(operation)

  return res
}
