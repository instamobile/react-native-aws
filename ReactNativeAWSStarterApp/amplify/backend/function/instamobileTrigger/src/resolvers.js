const { propagateChatChannel } = require('./chat/chatTriggers')
const {
  dehydrateFeedUponPostDeletion,
  hydratePostFeed,
} = require('./feed/postTriggers')
const { hydrateFollowersStoryFeed } = require('./feed/storyTriggers')

exports.triggerResolvers = async records => {
  const propagationTasks = records.map(async record => {
    if (record.typename === 'User') {
      return await onUserRecordChange(record)
    }
    if (record.typename === 'Post') {
      return await onPostRecordChange(record)
    }

    if (record.typename === 'Story') {
      return await onStoryRecordChange(record)
    }
    return
  })

  return await Promise.all(propagationTasks)
}

const onUserRecordChange = async record => {
  if (record.eventName === 'MODIFY') {
    return await propagateChatChannel(record)
  }
  return
}

const onPostRecordChange = async record => {
  if (record.eventName === 'INSERT') {
    return await hydratePostFeed(record)
  }

  if (record.eventName === 'REMOVE') {
    return await dehydrateFeedUponPostDeletion(record)
  }
  return
}

const onStoryRecordChange = async record => {
  if (record.eventName === 'INSERT') {
    return await hydrateFollowersStoryFeed(record)
  }

  return
}
