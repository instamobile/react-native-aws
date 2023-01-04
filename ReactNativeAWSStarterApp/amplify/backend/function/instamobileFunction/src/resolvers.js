// social graph
const { addFriendship } = require('./socialGraph/addFriendship')
const { unfollow } = require('./socialGraph/unfollow')
const { unfriend } = require('./socialGraph/unfriend')
const { onSearchUsers } = require('./socialGraph/onSearchUsers')
const { fetchProfile } = require('./socialGraph/fetchProfile')
const {
  fetchOtherUserFriendships,
} = require('./socialGraph/fetchOtherUserFriendships')

// chat
const { deleteMessageAndUpdateChannel } = require('./chat/deleteMessage')
const { leaveGroup } = require('./chat/leaveGroup')
const { markAsRead } = require('./chat/markAsRead')
const { onChannelCreated } = require('./chat/onChannelCreated')
const { onGroupUpdate } = require('./chat/onGroupUpdate')
const { onMessageCreated } = require('./chat/onMessageCreated')
const { deleteGroup } = require('./chat/deleteGroup')
const { addChatReaction } = require('./chat/addChatReaction')

// user-reporting
const { onMarkedAbuse } = require('./user-reporting/onMarkedAbuse')

// feed
const { addComment } = require('./feed/addComment')
const { addReaction } = require('./feed/addReaction')
const { fetchDiscoverFeedPosts } = require('./feed/fetchDiscoverFeedPosts')
const { fetchHashtagFeedPosts } = require('./feed/fetchHashtagFeedPosts')

exports.resolvers = {
  Mutation: {
    // social graph
    addFriendship: event => {
      return addFriendship(event)
    },
    unfollow: event => {
      return unfollow(event)
    },
    unfriend: event => {
      return unfriend(event)
    },
    // chat
    deleteMessageAndUpdateChannel: event => {
      return deleteMessageAndUpdateChannel(event)
    },
    leaveGroup: event => {
      return leaveGroup(event)
    },
    markAsRead: event => {
      return markAsRead(event)
    },
    onChannelCreated: event => {
      return onChannelCreated(event)
    },
    onGroupUpdate: event => {
      return onGroupUpdate(event)
    },
    deleteGroup: event => {
      return deleteGroup(event)
    },
    addChatReaction: event => {
      return addChatReaction(event)
    },
    onMessageCreated: event => {
      return onMessageCreated(event)
    },
    // user-reporting
    onMarkedAbuse: event => {
      return onMarkedAbuse(event)
    },
    //feed
    addComment: event => {
      return addComment(event)
    },
    addReaction: event => {
      return addReaction(event)
    },

  },
  Query: {
    //feed
    fetchDiscoverFeedPosts: event => {
      return fetchDiscoverFeedPosts(event)
    },
    fetchHashtagFeedPosts: event => {
      return fetchHashtagFeedPosts(event)
    },

    // social graph
    fetchOtherUserFriendships: event => {
      return fetchOtherUserFriendships(event)
    },
    onSearchUsers: event => {
      return onSearchUsers(event)
    },
    fetchProfile: event => {
      return fetchProfile(event)
    },
  },
}
