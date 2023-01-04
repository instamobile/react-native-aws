const { makeGraphqlRequest } = require('./graphqlRequest')
const uuid = require('uuid')

const getUnixTimeStamp = () => {
  const date = new Date()
  return Math.floor(date.getTime() / 1000)
}

const updateItem = async (mutation, item, updateSortFeild = true) => {
  const operation = {
    variables: {
      input: {
        ...item,
        ...(updateSortFeild ? { updatedAt: getUnixTimeStamp() } : {}),
      },
    },
    mutation,
  }
  await makeGraphqlRequest(operation)
}

exports.updateItem = updateItem

exports.createItem = async (mutation, item) => {
  await updateItem(mutation, {
    ...item,
    createdAt: getUnixTimeStamp(),
    id: uuid.v4(),
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
