const graphqlQuery = require('../graphql/queries')
const graphqlMutation = require('../graphql/mutations')
const gql = require('graphql-tag')
const { updateItem } = require('../core/helpers')

const {
  createFriendship,
  createMutualFriendship,
  createUnmutualFriendship,
  getFriendshipCountUpdater,
  getFriendshipType,
} = require('./common')

exports.addFriendship = async event => {
  const sourceUserID = event.arguments.sourceUserID
  const destUserID = event.arguments.destUserID

  try {
    return onAddFrienship(sourceUserID, destUserID)
  } catch (err) {
    console.log('++ err: ', err)
    return JSON.stringify(err)
  }
}

const onAddFrienship = async (sourceUserID, destUserID) => {
  let statusCode = 200

  const countUpdater = await getFriendshipCountUpdater(sourceUserID, destUserID)

  await countUpdater.increaseUnmutualFriendshipCount(
    sourceUserID,
    destUserID,
    'outbound',
  )
  await countUpdater.increaseUnmutualFriendshipCount(
    destUserID,
    sourceUserID,
    'inbound',
  )

  // we create unmutual frienship type for both parties involved
  await createUnmutualFriendship(sourceUserID, destUserID, 'outbound')
  await createUnmutualFriendship(destUserID, sourceUserID, 'inbound')

  // we check if both parties should have a reciprocal frienship type
  // by checking if the destUser has friendship type of "outbound" in relation to the sourceUser
  const query = gql(graphqlQuery.unmutualsBySourceUser)

  const res = await getFriendshipType(
    query,
    destUserID,
    sourceUserID,
    'outbound',
  )

  const data = res.unmutualsBySourceUser

  if (data.items?.length) {
    await countUpdater.increaseMutualFriendshipCount(sourceUserID, destUserID)
    await countUpdater.increaseMutualFriendshipCount(destUserID, sourceUserID)

    // We create mutual frienship type for both parties involved
    await createMutualFriendship(sourceUserID, destUserID, 'mutual_users')
    await createMutualFriendship(destUserID, sourceUserID, 'mutual_users')

    // We change frienship type for both parties involved to reciprocal
    await updateFriendshipToReciprocal(destUserID, sourceUserID, 'outbound')
    await updateFriendshipToReciprocal(sourceUserID, destUserID, 'inbound')

    statusCode = 201
  } else {
    // we create frienship type for both parties involved
    await createFriendship(sourceUserID, destUserID, 'outbound')
    await createFriendship(destUserID, sourceUserID, 'inbound')
  }

  return { statusCode }
}

const updateFriendshipToReciprocal = async (sourceUserID, destUserID, type) => {
  const query = gql(graphqlQuery.friendshipsBySourceUser)
  const res = await getFriendshipType(query, sourceUserID, destUserID, type)

  const data = res.friendshipsBySourceUser

  if (!data.items?.length) {
    return
  }

  const tasks = data.items.map(async item => {
    const mutation = gql(graphqlMutation.updateFriendship)

    return await updateItem(mutation, {
      id: item.id,
      type: 'reciprocal',
    })
  })
  await Promise.all(tasks)
}
