const {
  dehydrateDestUserPostFeed,
  dehydrateDestUserStoryFeed,
} = require('../feed/common')
const {
  deleteFriendship,
  deleteMutualFriendship,
  deleteUnmutualFriendship,
  getFriendshipCountUpdater,
} = require('./common')

exports.unfollow = async event => {
  const sourceUserID = event.arguments.sourceUserID
  const destUserID = event.arguments.destUserID

  try {
    const countUpdater = await getFriendshipCountUpdater(
      sourceUserID,
      destUserID,
    )
    await countUpdater.decreaseUnmutualFriendshipCount(
      sourceUserID,
      destUserID,
      'outbound',
    )
    await countUpdater.decreaseUnmutualFriendshipCount(
      destUserID,
      sourceUserID,
      'inbound',
    )

    // delete from mutual frienships table
    await deleteMutualFriendship(sourceUserID, destUserID, 'mutual_users')
    await deleteMutualFriendship(destUserID, sourceUserID, 'mutual_users')

    // delete from friendships table
    await deleteFriendship(sourceUserID, destUserID, 'reciprocal')
    await deleteFriendship(destUserID, sourceUserID, 'reciprocal')

    // delete from unmutual friendships table
    await deleteUnmutualFriendship(sourceUserID, destUserID, 'outbound')
    await deleteUnmutualFriendship(destUserID, sourceUserID, 'inbound')

    await dehydrateDestUserPostFeed(sourceUserID, destUserID)
    await dehydrateDestUserStoryFeed(sourceUserID, destUserID)

    return JSON.stringify({ statusCode: 200 })
  } catch (err) {
    console.log('++ err: ', err)
    return JSON.stringify(err)
  }
}
