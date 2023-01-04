/* eslint-disable */
// this is an auto generated file. This will be overwritten

exports.addFriendship = /* GraphQL */ `
  mutation AddFriendship($sourceUserID: String, $destUserID: String) {
    addFriendship(sourceUserID: $sourceUserID, destUserID: $destUserID)
  }
`
exports.unfriend = /* GraphQL */ `
  mutation Unfriend($sourceUserID: String, $destUserID: String) {
    unfriend(sourceUserID: $sourceUserID, destUserID: $destUserID)
  }
`
exports.unfollow = /* GraphQL */ `
  mutation Unfollow($sourceUserID: String, $destUserID: String) {
    unfollow(sourceUserID: $sourceUserID, destUserID: $destUserID)
  }
`
exports.onMessageCreated = /* GraphQL */ `
  mutation OnMessageCreated($messageID: String, $channelID: String) {
    onMessageCreated(messageID: $messageID, channelID: $channelID)
  }
`
exports.onChannelCreated = /* GraphQL */ `
  mutation OnChannelCreated($channelID: String) {
    onChannelCreated(channelID: $channelID) {
      id
      creatorID
      participants {
        id
        fullName
        username
        firstName
        lastName
        profilePictureKey
      }
      name
      admins
      channelID
      lastMessage
      lastMessageDate
      lastMessageSenderId
      lastThreadMessageId
      readUserIDs
      messages {
        items {
          id
          sender {
            id
            fullName
            username
            firstName
            lastName
            profilePictureKey
          }
          senderID
          participantProfilePictureURLs {
            participantId
            profilePictureURL
            profilePictureKey
          }
          content
          mentions {
            start
            end
            username
            id
            type
          }
          url {
            mime
            url
            urlKey
            thumbnailURL
            thumbnailKey
            fileID
          }
          senderProfilePictureURL
          senderProfilePictureKey
          senderFirstName
          senderLastName
          senderUsername
          readUserIDs
          reactions {
            like
            love
            laugh
            angry
            suprised
            cry
            sad
          }
          reactionsCount
          inReplyToItem {
            senderFirstName
            senderLastName
            content
          }
          channelID
          createdAt
          updatedAt
        }
        nextToken
      }
      channelFeed {
        items {
          id
          creatorID
          channelID
          title
          content
          markedAsRead
          participants {
            id
            fullName
            username
            firstName
            lastName
            profilePictureKey
          }
          admins
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      typingUsers {
        userID
        isTyping
      }
      createdAt
      updatedAt
    }
  }
`
exports.markAsRead = /* GraphQL */ `
  mutation MarkAsRead(
    $channelID: String
    $userID: String
    $messageID: String
    $readUserIDs: [String]
  ) {
    markAsRead(
      channelID: $channelID
      userID: $userID
      messageID: $messageID
      readUserIDs: $readUserIDs
    )
  }
`
exports.deleteMessageAndUpdateChannel = /* GraphQL */ `
  mutation DeleteMessageAndUpdateChannel(
    $channelID: String
    $messageID: String
  ) {
    deleteMessageAndUpdateChannel(channelID: $channelID, messageID: $messageID)
  }
`
exports.leaveGroup = /* GraphQL */ `
  mutation LeaveGroup($channelID: String, $userID: String, $content: String) {
    leaveGroup(channelID: $channelID, userID: $userID, content: $content)
  }
`
exports.onGroupUpdate = /* GraphQL */ `
  mutation OnGroupUpdate(
    $channelID: String
    $userID: String
    $content: String
  ) {
    onGroupUpdate(channelID: $channelID, userID: $userID, content: $content)
  }
`
exports.deleteGroup = /* GraphQL */ `
  mutation DeleteGroup($channelID: String) {
    deleteGroup(channelID: $channelID)
  }
`
exports.onMarkedAbuse = /* GraphQL */ `
  mutation OnMarkedAbuse($sourceUserID: String, $destUserID: String) {
    onMarkedAbuse(sourceUserID: $sourceUserID, destUserID: $destUserID)
  }
`
exports.unblockUser = /* GraphQL */ `
  mutation UnblockUser($sourceUserID: String!, $destUserID: String!) {
    unblockUser(sourceUserID: $sourceUserID, destUserID: $destUserID)
  }
`
exports.addChatReaction = /* GraphQL */ `
  mutation AddChatReaction(
    $messageID: String!
    $authorID: String!
    $reaction: String!
    $channelID: String!
  ) {
    addChatReaction(
      messageID: $messageID
      authorID: $authorID
      reaction: $reaction
      channelID: $channelID
    )
  }
`
exports.addComment = /* GraphQL */ `
  mutation AddComment(
    $postID: String!
    $authorID: String!
    $commentText: String!
  ) {
    addComment(postID: $postID, authorID: $authorID, commentText: $commentText)
  }
`
exports.addReaction = /* GraphQL */ `
  mutation AddReaction(
    $postID: String!
    $authorID: String!
    $reaction: String!
  ) {
    addReaction(postID: $postID, authorID: $authorID, reaction: $reaction)
  }
`
exports.createChannelFeed = /* GraphQL */ `
  mutation CreateChannelFeed(
    $input: CreateChannelFeedInput!
    $condition: ModelChannelFeedConditionInput
  ) {
    createChannelFeed(input: $input, condition: $condition) {
      id
      creatorID
      channelID
      title
      content
      markedAsRead
      participants {
        id
        fullName
        username
        firstName
        lastName
        profilePictureKey
      }
      admins
      userID
      createdAt
      updatedAt
    }
  }
`
exports.updateChannelFeed = /* GraphQL */ `
  mutation UpdateChannelFeed(
    $input: UpdateChannelFeedInput!
    $condition: ModelChannelFeedConditionInput
  ) {
    updateChannelFeed(input: $input, condition: $condition) {
      id
      creatorID
      channelID
      title
      content
      markedAsRead
      participants {
        id
        fullName
        username
        firstName
        lastName
        profilePictureKey
      }
      admins
      userID
      createdAt
      updatedAt
    }
  }
`
exports.deleteChannelFeed = /* GraphQL */ `
  mutation DeleteChannelFeed(
    $input: DeleteChannelFeedInput!
    $condition: ModelChannelFeedConditionInput
  ) {
    deleteChannelFeed(input: $input, condition: $condition) {
      id
      creatorID
      channelID
      title
      content
      markedAsRead
      participants {
        id
        fullName
        username
        firstName
        lastName
        profilePictureKey
      }
      admins
      userID
      createdAt
      updatedAt
    }
  }
`
exports.createChannel = /* GraphQL */ `
  mutation CreateChannel(
    $input: CreateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    createChannel(input: $input, condition: $condition) {
      id
      creatorID
      participants {
        id
        fullName
        username
        firstName
        lastName
        profilePictureKey
      }
      name
      admins
      channelID
      lastMessage
      lastMessageDate
      lastMessageSenderId
      lastThreadMessageId
      readUserIDs
      messages {
        items {
          id
          sender {
            id
            fullName
            username
            firstName
            lastName
            profilePictureKey
          }
          senderID
          participantProfilePictureURLs {
            participantId
            profilePictureURL
            profilePictureKey
          }
          content
          mentions {
            start
            end
            username
            id
            type
          }
          url {
            mime
            url
            urlKey
            thumbnailURL
            thumbnailKey
            fileID
          }
          senderProfilePictureURL
          senderProfilePictureKey
          senderFirstName
          senderLastName
          senderUsername
          readUserIDs
          reactions {
            like
            love
            laugh
            angry
            suprised
            cry
            sad
          }
          reactionsCount
          inReplyToItem {
            senderFirstName
            senderLastName
            content
          }
          channelID
          createdAt
          updatedAt
        }
        nextToken
      }
      channelFeed {
        items {
          id
          creatorID
          channelID
          title
          content
          markedAsRead
          participants {
            id
            fullName
            username
            firstName
            lastName
            profilePictureKey
          }
          admins
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      typingUsers {
        userID
        isTyping
      }
      createdAt
      updatedAt
    }
  }
`
exports.updateChannel = /* GraphQL */ `
  mutation UpdateChannel(
    $input: UpdateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    updateChannel(input: $input, condition: $condition) {
      id
      creatorID
      participants {
        id
        fullName
        username
        firstName
        lastName
        profilePictureKey
      }
      name
      admins
      channelID
      lastMessage
      lastMessageDate
      lastMessageSenderId
      lastThreadMessageId
      readUserIDs
      messages {
        items {
          id
          sender {
            id
            fullName
            username
            firstName
            lastName
            profilePictureKey
          }
          senderID
          participantProfilePictureURLs {
            participantId
            profilePictureURL
            profilePictureKey
          }
          content
          mentions {
            start
            end
            username
            id
            type
          }
          url {
            mime
            url
            urlKey
            thumbnailURL
            thumbnailKey
            fileID
          }
          senderProfilePictureURL
          senderProfilePictureKey
          senderFirstName
          senderLastName
          senderUsername
          readUserIDs
          reactions {
            like
            love
            laugh
            angry
            suprised
            cry
            sad
          }
          reactionsCount
          inReplyToItem {
            senderFirstName
            senderLastName
            content
          }
          channelID
          createdAt
          updatedAt
        }
        nextToken
      }
      channelFeed {
        items {
          id
          creatorID
          channelID
          title
          content
          markedAsRead
          participants {
            id
            fullName
            username
            firstName
            lastName
            profilePictureKey
          }
          admins
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      typingUsers {
        userID
        isTyping
      }
      createdAt
      updatedAt
    }
  }
`
exports.deleteChannel = /* GraphQL */ `
  mutation DeleteChannel(
    $input: DeleteChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    deleteChannel(input: $input, condition: $condition) {
      id
      creatorID
      participants {
        id
        fullName
        username
        firstName
        lastName
        profilePictureKey
      }
      name
      admins
      channelID
      lastMessage
      lastMessageDate
      lastMessageSenderId
      lastThreadMessageId
      readUserIDs
      messages {
        items {
          id
          sender {
            id
            fullName
            username
            firstName
            lastName
            profilePictureKey
          }
          senderID
          participantProfilePictureURLs {
            participantId
            profilePictureURL
            profilePictureKey
          }
          content
          mentions {
            start
            end
            username
            id
            type
          }
          url {
            mime
            url
            urlKey
            thumbnailURL
            thumbnailKey
            fileID
          }
          senderProfilePictureURL
          senderProfilePictureKey
          senderFirstName
          senderLastName
          senderUsername
          readUserIDs
          reactions {
            like
            love
            laugh
            angry
            suprised
            cry
            sad
          }
          reactionsCount
          inReplyToItem {
            senderFirstName
            senderLastName
            content
          }
          channelID
          createdAt
          updatedAt
        }
        nextToken
      }
      channelFeed {
        items {
          id
          creatorID
          channelID
          title
          content
          markedAsRead
          participants {
            id
            fullName
            username
            firstName
            lastName
            profilePictureKey
          }
          admins
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      typingUsers {
        userID
        isTyping
      }
      createdAt
      updatedAt
    }
  }
`
exports.createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      sender {
        id
        fullName
        username
        firstName
        lastName
        profilePictureKey
      }
      senderID
      participantProfilePictureURLs {
        participantId
        profilePictureURL
        profilePictureKey
      }
      content
      mentions {
        start
        end
        username
        id
        type
      }
      url {
        mime
        url
        urlKey
        thumbnailURL
        thumbnailKey
        fileID
      }
      senderProfilePictureURL
      senderProfilePictureKey
      senderFirstName
      senderLastName
      senderUsername
      readUserIDs
      reactions {
        like
        love
        laugh
        angry
        suprised
        cry
        sad
      }
      reactionsCount
      inReplyToItem {
        senderFirstName
        senderLastName
        content
      }
      channelID
      createdAt
      updatedAt
    }
  }
`
exports.updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      sender {
        id
        fullName
        username
        firstName
        lastName
        profilePictureKey
      }
      senderID
      participantProfilePictureURLs {
        participantId
        profilePictureURL
        profilePictureKey
      }
      content
      mentions {
        start
        end
        username
        id
        type
      }
      url {
        mime
        url
        urlKey
        thumbnailURL
        thumbnailKey
        fileID
      }
      senderProfilePictureURL
      senderProfilePictureKey
      senderFirstName
      senderLastName
      senderUsername
      readUserIDs
      reactions {
        like
        love
        laugh
        angry
        suprised
        cry
        sad
      }
      reactionsCount
      inReplyToItem {
        senderFirstName
        senderLastName
        content
      }
      channelID
      createdAt
      updatedAt
    }
  }
`
exports.deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      sender {
        id
        fullName
        username
        firstName
        lastName
        profilePictureKey
      }
      senderID
      participantProfilePictureURLs {
        participantId
        profilePictureURL
        profilePictureKey
      }
      content
      mentions {
        start
        end
        username
        id
        type
      }
      url {
        mime
        url
        urlKey
        thumbnailURL
        thumbnailKey
        fileID
      }
      senderProfilePictureURL
      senderProfilePictureKey
      senderFirstName
      senderLastName
      senderUsername
      readUserIDs
      reactions {
        like
        love
        laugh
        angry
        suprised
        cry
        sad
      }
      reactionsCount
      inReplyToItem {
        senderFirstName
        senderLastName
        content
      }
      channelID
      createdAt
      updatedAt
    }
  }
`
exports.createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      postText
      commentCount
      location
      postMedia {
        url
        thumbnailURL
        thumbnailKey
        mime
        urlKey
      }
      mentions {
        start
        end
        username
        id
        type
      }
      hashtags
      reactions {
        like
        love
        laugh
        angry
        suprised
        cry
        sad
      }
      reactionsCount
      comments {
        items {
          id
          createdAt
          updatedAt
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          commentText
          postID
        }
        nextToken
      }
      postFeed {
        items {
          id
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          destUserID
          postID
          post {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      entityPostFeed {
        items {
          id
          postID
          post {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          hashtag
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`
exports.updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      postText
      commentCount
      location
      postMedia {
        url
        thumbnailURL
        thumbnailKey
        mime
        urlKey
      }
      mentions {
        start
        end
        username
        id
        type
      }
      hashtags
      reactions {
        like
        love
        laugh
        angry
        suprised
        cry
        sad
      }
      reactionsCount
      comments {
        items {
          id
          createdAt
          updatedAt
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          commentText
          postID
        }
        nextToken
      }
      postFeed {
        items {
          id
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          destUserID
          postID
          post {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      entityPostFeed {
        items {
          id
          postID
          post {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          hashtag
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`
exports.deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      postText
      commentCount
      location
      postMedia {
        url
        thumbnailURL
        thumbnailKey
        mime
        urlKey
      }
      mentions {
        start
        end
        username
        id
        type
      }
      hashtags
      reactions {
        like
        love
        laugh
        angry
        suprised
        cry
        sad
      }
      reactionsCount
      comments {
        items {
          id
          createdAt
          updatedAt
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          commentText
          postID
        }
        nextToken
      }
      postFeed {
        items {
          id
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          destUserID
          postID
          post {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      entityPostFeed {
        items {
          id
          postID
          post {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          hashtag
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`
exports.createPostFeed = /* GraphQL */ `
  mutation CreatePostFeed(
    $input: CreatePostFeedInput!
    $condition: ModelPostFeedConditionInput
  ) {
    createPostFeed(input: $input, condition: $condition) {
      id
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      destUserID
      postID
      post {
        id
        createdAt
        updatedAt
        authorID
        author {
          id
          username
          email
          firstName
          lastName
          fullName
          phone
          profilePictureKey
          profilePictureURL
          location {
            longitude
            latitude
          }
          signUpLocation {
            longitude
            latitude
          }
          lastOnlineTimestamp
          chatChannelFeed {
            nextToken
          }
          userReports {
            nextToken
          }
          inboundFriendshipCount
          outboundFriendshipCount
          mutualFriendshipCount
          friendships {
            nextToken
          }
          mutualFriendships {
            nextToken
          }
          unmutualFriendships {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          stories {
            nextToken
          }
          postFeed {
            nextToken
          }
          storyFeed {
            nextToken
          }
          createdAt
          updatedAt
        }
        postText
        commentCount
        location
        postMedia {
          url
          thumbnailURL
          thumbnailKey
          mime
          urlKey
        }
        mentions {
          start
          end
          username
          id
          type
        }
        hashtags
        reactions {
          like
          love
          laugh
          angry
          suprised
          cry
          sad
        }
        reactionsCount
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        entityPostFeed {
          items {
            id
            postID
            hashtag
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`
exports.updatePostFeed = /* GraphQL */ `
  mutation UpdatePostFeed(
    $input: UpdatePostFeedInput!
    $condition: ModelPostFeedConditionInput
  ) {
    updatePostFeed(input: $input, condition: $condition) {
      id
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      destUserID
      postID
      post {
        id
        createdAt
        updatedAt
        authorID
        author {
          id
          username
          email
          firstName
          lastName
          fullName
          phone
          profilePictureKey
          profilePictureURL
          location {
            longitude
            latitude
          }
          signUpLocation {
            longitude
            latitude
          }
          lastOnlineTimestamp
          chatChannelFeed {
            nextToken
          }
          userReports {
            nextToken
          }
          inboundFriendshipCount
          outboundFriendshipCount
          mutualFriendshipCount
          friendships {
            nextToken
          }
          mutualFriendships {
            nextToken
          }
          unmutualFriendships {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          stories {
            nextToken
          }
          postFeed {
            nextToken
          }
          storyFeed {
            nextToken
          }
          createdAt
          updatedAt
        }
        postText
        commentCount
        location
        postMedia {
          url
          thumbnailURL
          thumbnailKey
          mime
          urlKey
        }
        mentions {
          start
          end
          username
          id
          type
        }
        hashtags
        reactions {
          like
          love
          laugh
          angry
          suprised
          cry
          sad
        }
        reactionsCount
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        entityPostFeed {
          items {
            id
            postID
            hashtag
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`
exports.deletePostFeed = /* GraphQL */ `
  mutation DeletePostFeed(
    $input: DeletePostFeedInput!
    $condition: ModelPostFeedConditionInput
  ) {
    deletePostFeed(input: $input, condition: $condition) {
      id
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      destUserID
      postID
      post {
        id
        createdAt
        updatedAt
        authorID
        author {
          id
          username
          email
          firstName
          lastName
          fullName
          phone
          profilePictureKey
          profilePictureURL
          location {
            longitude
            latitude
          }
          signUpLocation {
            longitude
            latitude
          }
          lastOnlineTimestamp
          chatChannelFeed {
            nextToken
          }
          userReports {
            nextToken
          }
          inboundFriendshipCount
          outboundFriendshipCount
          mutualFriendshipCount
          friendships {
            nextToken
          }
          mutualFriendships {
            nextToken
          }
          unmutualFriendships {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          stories {
            nextToken
          }
          postFeed {
            nextToken
          }
          storyFeed {
            nextToken
          }
          createdAt
          updatedAt
        }
        postText
        commentCount
        location
        postMedia {
          url
          thumbnailURL
          thumbnailKey
          mime
          urlKey
        }
        mentions {
          start
          end
          username
          id
          type
        }
        hashtags
        reactions {
          like
          love
          laugh
          angry
          suprised
          cry
          sad
        }
        reactionsCount
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        entityPostFeed {
          items {
            id
            postID
            hashtag
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`
exports.createEntityPostFeed = /* GraphQL */ `
  mutation CreateEntityPostFeed(
    $input: CreateEntityPostFeedInput!
    $condition: ModelEntityPostFeedConditionInput
  ) {
    createEntityPostFeed(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        createdAt
        updatedAt
        authorID
        author {
          id
          username
          email
          firstName
          lastName
          fullName
          phone
          profilePictureKey
          profilePictureURL
          location {
            longitude
            latitude
          }
          signUpLocation {
            longitude
            latitude
          }
          lastOnlineTimestamp
          chatChannelFeed {
            nextToken
          }
          userReports {
            nextToken
          }
          inboundFriendshipCount
          outboundFriendshipCount
          mutualFriendshipCount
          friendships {
            nextToken
          }
          mutualFriendships {
            nextToken
          }
          unmutualFriendships {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          stories {
            nextToken
          }
          postFeed {
            nextToken
          }
          storyFeed {
            nextToken
          }
          createdAt
          updatedAt
        }
        postText
        commentCount
        location
        postMedia {
          url
          thumbnailURL
          thumbnailKey
          mime
          urlKey
        }
        mentions {
          start
          end
          username
          id
          type
        }
        hashtags
        reactions {
          like
          love
          laugh
          angry
          suprised
          cry
          sad
        }
        reactionsCount
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        entityPostFeed {
          items {
            id
            postID
            hashtag
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      hashtag
      createdAt
      updatedAt
    }
  }
`
exports.updateEntityPostFeed = /* GraphQL */ `
  mutation UpdateEntityPostFeed(
    $input: UpdateEntityPostFeedInput!
    $condition: ModelEntityPostFeedConditionInput
  ) {
    updateEntityPostFeed(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        createdAt
        updatedAt
        authorID
        author {
          id
          username
          email
          firstName
          lastName
          fullName
          phone
          profilePictureKey
          profilePictureURL
          location {
            longitude
            latitude
          }
          signUpLocation {
            longitude
            latitude
          }
          lastOnlineTimestamp
          chatChannelFeed {
            nextToken
          }
          userReports {
            nextToken
          }
          inboundFriendshipCount
          outboundFriendshipCount
          mutualFriendshipCount
          friendships {
            nextToken
          }
          mutualFriendships {
            nextToken
          }
          unmutualFriendships {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          stories {
            nextToken
          }
          postFeed {
            nextToken
          }
          storyFeed {
            nextToken
          }
          createdAt
          updatedAt
        }
        postText
        commentCount
        location
        postMedia {
          url
          thumbnailURL
          thumbnailKey
          mime
          urlKey
        }
        mentions {
          start
          end
          username
          id
          type
        }
        hashtags
        reactions {
          like
          love
          laugh
          angry
          suprised
          cry
          sad
        }
        reactionsCount
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        entityPostFeed {
          items {
            id
            postID
            hashtag
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      hashtag
      createdAt
      updatedAt
    }
  }
`
exports.deleteEntityPostFeed = /* GraphQL */ `
  mutation DeleteEntityPostFeed(
    $input: DeleteEntityPostFeedInput!
    $condition: ModelEntityPostFeedConditionInput
  ) {
    deleteEntityPostFeed(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        createdAt
        updatedAt
        authorID
        author {
          id
          username
          email
          firstName
          lastName
          fullName
          phone
          profilePictureKey
          profilePictureURL
          location {
            longitude
            latitude
          }
          signUpLocation {
            longitude
            latitude
          }
          lastOnlineTimestamp
          chatChannelFeed {
            nextToken
          }
          userReports {
            nextToken
          }
          inboundFriendshipCount
          outboundFriendshipCount
          mutualFriendshipCount
          friendships {
            nextToken
          }
          mutualFriendships {
            nextToken
          }
          unmutualFriendships {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          stories {
            nextToken
          }
          postFeed {
            nextToken
          }
          storyFeed {
            nextToken
          }
          createdAt
          updatedAt
        }
        postText
        commentCount
        location
        postMedia {
          url
          thumbnailURL
          thumbnailKey
          mime
          urlKey
        }
        mentions {
          start
          end
          username
          id
          type
        }
        hashtags
        reactions {
          like
          love
          laugh
          angry
          suprised
          cry
          sad
        }
        reactionsCount
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        entityPostFeed {
          items {
            id
            postID
            hashtag
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      hashtag
      createdAt
      updatedAt
    }
  }
`
exports.createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      commentText
      postID
    }
  }
`
exports.updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      commentText
      postID
    }
  }
`
exports.deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      commentText
      postID
    }
  }
`
exports.createStory = /* GraphQL */ `
  mutation CreateStory(
    $input: CreateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    createStory(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      storyMediaURL
      thumbnailURL
      storyType
      viewsCount
      reactionsCount
      storyFeed {
        items {
          id
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          destUserID
          storyID
          story {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`
exports.updateStory = /* GraphQL */ `
  mutation UpdateStory(
    $input: UpdateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    updateStory(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      storyMediaURL
      thumbnailURL
      storyType
      viewsCount
      reactionsCount
      storyFeed {
        items {
          id
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          destUserID
          storyID
          story {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`
exports.deleteStory = /* GraphQL */ `
  mutation DeleteStory(
    $input: DeleteStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    deleteStory(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      storyMediaURL
      thumbnailURL
      storyType
      viewsCount
      reactionsCount
      storyFeed {
        items {
          id
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          destUserID
          storyID
          story {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`
exports.createStoryFeed = /* GraphQL */ `
  mutation CreateStoryFeed(
    $input: CreateStoryFeedInput!
    $condition: ModelStoryFeedConditionInput
  ) {
    createStoryFeed(input: $input, condition: $condition) {
      id
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      destUserID
      storyID
      story {
        id
        createdAt
        updatedAt
        authorID
        author {
          id
          username
          email
          firstName
          lastName
          fullName
          phone
          profilePictureKey
          profilePictureURL
          location {
            longitude
            latitude
          }
          signUpLocation {
            longitude
            latitude
          }
          lastOnlineTimestamp
          chatChannelFeed {
            nextToken
          }
          userReports {
            nextToken
          }
          inboundFriendshipCount
          outboundFriendshipCount
          mutualFriendshipCount
          friendships {
            nextToken
          }
          mutualFriendships {
            nextToken
          }
          unmutualFriendships {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          stories {
            nextToken
          }
          postFeed {
            nextToken
          }
          storyFeed {
            nextToken
          }
          createdAt
          updatedAt
        }
        storyMediaURL
        thumbnailURL
        storyType
        viewsCount
        reactionsCount
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`
exports.updateStoryFeed = /* GraphQL */ `
  mutation UpdateStoryFeed(
    $input: UpdateStoryFeedInput!
    $condition: ModelStoryFeedConditionInput
  ) {
    updateStoryFeed(input: $input, condition: $condition) {
      id
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      destUserID
      storyID
      story {
        id
        createdAt
        updatedAt
        authorID
        author {
          id
          username
          email
          firstName
          lastName
          fullName
          phone
          profilePictureKey
          profilePictureURL
          location {
            longitude
            latitude
          }
          signUpLocation {
            longitude
            latitude
          }
          lastOnlineTimestamp
          chatChannelFeed {
            nextToken
          }
          userReports {
            nextToken
          }
          inboundFriendshipCount
          outboundFriendshipCount
          mutualFriendshipCount
          friendships {
            nextToken
          }
          mutualFriendships {
            nextToken
          }
          unmutualFriendships {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          stories {
            nextToken
          }
          postFeed {
            nextToken
          }
          storyFeed {
            nextToken
          }
          createdAt
          updatedAt
        }
        storyMediaURL
        thumbnailURL
        storyType
        viewsCount
        reactionsCount
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`
exports.deleteStoryFeed = /* GraphQL */ `
  mutation DeleteStoryFeed(
    $input: DeleteStoryFeedInput!
    $condition: ModelStoryFeedConditionInput
  ) {
    deleteStoryFeed(input: $input, condition: $condition) {
      id
      authorID
      author {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      destUserID
      storyID
      story {
        id
        createdAt
        updatedAt
        authorID
        author {
          id
          username
          email
          firstName
          lastName
          fullName
          phone
          profilePictureKey
          profilePictureURL
          location {
            longitude
            latitude
          }
          signUpLocation {
            longitude
            latitude
          }
          lastOnlineTimestamp
          chatChannelFeed {
            nextToken
          }
          userReports {
            nextToken
          }
          inboundFriendshipCount
          outboundFriendshipCount
          mutualFriendshipCount
          friendships {
            nextToken
          }
          mutualFriendships {
            nextToken
          }
          unmutualFriendships {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          stories {
            nextToken
          }
          postFeed {
            nextToken
          }
          storyFeed {
            nextToken
          }
          createdAt
          updatedAt
        }
        storyMediaURL
        thumbnailURL
        storyType
        viewsCount
        reactionsCount
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`
exports.createFriendship = /* GraphQL */ `
  mutation CreateFriendship(
    $input: CreateFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    createFriendship(input: $input, condition: $condition) {
      id
      sourceUserID
      destUserID
      type
      user {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
exports.updateFriendship = /* GraphQL */ `
  mutation UpdateFriendship(
    $input: UpdateFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    updateFriendship(input: $input, condition: $condition) {
      id
      sourceUserID
      destUserID
      type
      user {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
exports.deleteFriendship = /* GraphQL */ `
  mutation DeleteFriendship(
    $input: DeleteFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    deleteFriendship(input: $input, condition: $condition) {
      id
      sourceUserID
      destUserID
      type
      user {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
exports.createMutualFriendship = /* GraphQL */ `
  mutation CreateMutualFriendship(
    $input: CreateMutualFriendshipInput!
    $condition: ModelMutualFriendshipConditionInput
  ) {
    createMutualFriendship(input: $input, condition: $condition) {
      id
      sourceUserID
      destUserID
      type
      user {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
exports.updateMutualFriendship = /* GraphQL */ `
  mutation UpdateMutualFriendship(
    $input: UpdateMutualFriendshipInput!
    $condition: ModelMutualFriendshipConditionInput
  ) {
    updateMutualFriendship(input: $input, condition: $condition) {
      id
      sourceUserID
      destUserID
      type
      user {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
exports.deleteMutualFriendship = /* GraphQL */ `
  mutation DeleteMutualFriendship(
    $input: DeleteMutualFriendshipInput!
    $condition: ModelMutualFriendshipConditionInput
  ) {
    deleteMutualFriendship(input: $input, condition: $condition) {
      id
      sourceUserID
      destUserID
      type
      user {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
exports.createUnmutualFriendship = /* GraphQL */ `
  mutation CreateUnmutualFriendship(
    $input: CreateUnmutualFriendshipInput!
    $condition: ModelUnmutualFriendshipConditionInput
  ) {
    createUnmutualFriendship(input: $input, condition: $condition) {
      id
      sourceUserID
      destUserID
      type
      user {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
exports.updateUnmutualFriendship = /* GraphQL */ `
  mutation UpdateUnmutualFriendship(
    $input: UpdateUnmutualFriendshipInput!
    $condition: ModelUnmutualFriendshipConditionInput
  ) {
    updateUnmutualFriendship(input: $input, condition: $condition) {
      id
      sourceUserID
      destUserID
      type
      user {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
exports.deleteUnmutualFriendship = /* GraphQL */ `
  mutation DeleteUnmutualFriendship(
    $input: DeleteUnmutualFriendshipInput!
    $condition: ModelUnmutualFriendshipConditionInput
  ) {
    deleteUnmutualFriendship(input: $input, condition: $condition) {
      id
      sourceUserID
      destUserID
      type
      user {
        id
        username
        email
        firstName
        lastName
        fullName
        phone
        profilePictureKey
        profilePictureURL
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        chatChannelFeed {
          items {
            id
            creatorID
            channelID
            title
            content
            markedAsRead
            admins
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        userReports {
          items {
            id
            dest
            source
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        inboundFriendshipCount
        outboundFriendshipCount
        mutualFriendshipCount
        friendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        mutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        unmutualFriendships {
          items {
            id
            sourceUserID
            destUserID
            type
            createdAt
            updatedAt
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            authorID
            commentText
            postID
          }
          nextToken
        }
        stories {
          items {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          nextToken
        }
        postFeed {
          items {
            id
            authorID
            destUserID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        storyFeed {
          items {
            id
            authorID
            destUserID
            storyID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
exports.createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      firstName
      lastName
      fullName
      phone
      profilePictureKey
      profilePictureURL
      location {
        longitude
        latitude
      }
      signUpLocation {
        longitude
        latitude
      }
      lastOnlineTimestamp
      chatChannelFeed {
        items {
          id
          creatorID
          channelID
          title
          content
          markedAsRead
          participants {
            id
            fullName
            username
            firstName
            lastName
            profilePictureKey
          }
          admins
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      userReports {
        items {
          id
          dest
          source
          user {
            id
            lastName
            firstName
            fullName
            email
            profilePictureURL
            profilePictureKey
          }
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      inboundFriendshipCount
      outboundFriendshipCount
      mutualFriendshipCount
      friendships {
        items {
          id
          sourceUserID
          destUserID
          type
          user {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      mutualFriendships {
        items {
          id
          sourceUserID
          destUserID
          type
          user {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      unmutualFriendships {
        items {
          id
          sourceUserID
          destUserID
          type
          user {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          createdAt
          updatedAt
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          postText
          commentCount
          location
          postMedia {
            url
            thumbnailURL
            thumbnailKey
            mime
            urlKey
          }
          mentions {
            start
            end
            username
            id
            type
          }
          hashtags
          reactions {
            like
            love
            laugh
            angry
            suprised
            cry
            sad
          }
          reactionsCount
          comments {
            nextToken
          }
          postFeed {
            nextToken
          }
          entityPostFeed {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          createdAt
          updatedAt
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          commentText
          postID
        }
        nextToken
      }
      stories {
        items {
          id
          createdAt
          updatedAt
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          storyMediaURL
          thumbnailURL
          storyType
          viewsCount
          reactionsCount
          storyFeed {
            nextToken
          }
        }
        nextToken
      }
      postFeed {
        items {
          id
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          destUserID
          postID
          post {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      storyFeed {
        items {
          id
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          destUserID
          storyID
          story {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`
exports.updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      firstName
      lastName
      fullName
      phone
      profilePictureKey
      profilePictureURL
      location {
        longitude
        latitude
      }
      signUpLocation {
        longitude
        latitude
      }
      lastOnlineTimestamp
      chatChannelFeed {
        items {
          id
          creatorID
          channelID
          title
          content
          markedAsRead
          participants {
            id
            fullName
            username
            firstName
            lastName
            profilePictureKey
          }
          admins
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      userReports {
        items {
          id
          dest
          source
          user {
            id
            lastName
            firstName
            fullName
            email
            profilePictureURL
            profilePictureKey
          }
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      inboundFriendshipCount
      outboundFriendshipCount
      mutualFriendshipCount
      friendships {
        items {
          id
          sourceUserID
          destUserID
          type
          user {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      mutualFriendships {
        items {
          id
          sourceUserID
          destUserID
          type
          user {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      unmutualFriendships {
        items {
          id
          sourceUserID
          destUserID
          type
          user {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          createdAt
          updatedAt
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          postText
          commentCount
          location
          postMedia {
            url
            thumbnailURL
            thumbnailKey
            mime
            urlKey
          }
          mentions {
            start
            end
            username
            id
            type
          }
          hashtags
          reactions {
            like
            love
            laugh
            angry
            suprised
            cry
            sad
          }
          reactionsCount
          comments {
            nextToken
          }
          postFeed {
            nextToken
          }
          entityPostFeed {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          createdAt
          updatedAt
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          commentText
          postID
        }
        nextToken
      }
      stories {
        items {
          id
          createdAt
          updatedAt
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          storyMediaURL
          thumbnailURL
          storyType
          viewsCount
          reactionsCount
          storyFeed {
            nextToken
          }
        }
        nextToken
      }
      postFeed {
        items {
          id
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          destUserID
          postID
          post {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      storyFeed {
        items {
          id
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          destUserID
          storyID
          story {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`
exports.deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      firstName
      lastName
      fullName
      phone
      profilePictureKey
      profilePictureURL
      location {
        longitude
        latitude
      }
      signUpLocation {
        longitude
        latitude
      }
      lastOnlineTimestamp
      chatChannelFeed {
        items {
          id
          creatorID
          channelID
          title
          content
          markedAsRead
          participants {
            id
            fullName
            username
            firstName
            lastName
            profilePictureKey
          }
          admins
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      userReports {
        items {
          id
          dest
          source
          user {
            id
            lastName
            firstName
            fullName
            email
            profilePictureURL
            profilePictureKey
          }
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      inboundFriendshipCount
      outboundFriendshipCount
      mutualFriendshipCount
      friendships {
        items {
          id
          sourceUserID
          destUserID
          type
          user {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      mutualFriendships {
        items {
          id
          sourceUserID
          destUserID
          type
          user {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      unmutualFriendships {
        items {
          id
          sourceUserID
          destUserID
          type
          user {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          createdAt
          updatedAt
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          postText
          commentCount
          location
          postMedia {
            url
            thumbnailURL
            thumbnailKey
            mime
            urlKey
          }
          mentions {
            start
            end
            username
            id
            type
          }
          hashtags
          reactions {
            like
            love
            laugh
            angry
            suprised
            cry
            sad
          }
          reactionsCount
          comments {
            nextToken
          }
          postFeed {
            nextToken
          }
          entityPostFeed {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          createdAt
          updatedAt
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          commentText
          postID
        }
        nextToken
      }
      stories {
        items {
          id
          createdAt
          updatedAt
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          storyMediaURL
          thumbnailURL
          storyType
          viewsCount
          reactionsCount
          storyFeed {
            nextToken
          }
        }
        nextToken
      }
      postFeed {
        items {
          id
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          destUserID
          postID
          post {
            id
            createdAt
            updatedAt
            authorID
            postText
            commentCount
            location
            hashtags
            reactionsCount
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      storyFeed {
        items {
          id
          authorID
          author {
            id
            username
            email
            firstName
            lastName
            fullName
            phone
            profilePictureKey
            profilePictureURL
            lastOnlineTimestamp
            inboundFriendshipCount
            outboundFriendshipCount
            mutualFriendshipCount
            createdAt
            updatedAt
          }
          destUserID
          storyID
          story {
            id
            createdAt
            updatedAt
            authorID
            storyMediaURL
            thumbnailURL
            storyType
            viewsCount
            reactionsCount
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`
exports.createUserReport = /* GraphQL */ `
  mutation CreateUserReport(
    $input: CreateUserReportInput!
    $condition: ModelUserReportConditionInput
  ) {
    createUserReport(input: $input, condition: $condition) {
      id
      dest
      source
      user {
        id
        lastName
        firstName
        fullName
        email
        profilePictureURL
        profilePictureKey
      }
      type
      createdAt
      updatedAt
    }
  }
`
exports.updateUserReport = /* GraphQL */ `
  mutation UpdateUserReport(
    $input: UpdateUserReportInput!
    $condition: ModelUserReportConditionInput
  ) {
    updateUserReport(input: $input, condition: $condition) {
      id
      dest
      source
      user {
        id
        lastName
        firstName
        fullName
        email
        profilePictureURL
        profilePictureKey
      }
      type
      createdAt
      updatedAt
    }
  }
`
exports.deleteUserReport = /* GraphQL */ `
  mutation DeleteUserReport(
    $input: DeleteUserReportInput!
    $condition: ModelUserReportConditionInput
  ) {
    deleteUserReport(input: $input, condition: $condition) {
      id
      dest
      source
      user {
        id
        lastName
        firstName
        fullName
        email
        profilePictureURL
        profilePictureKey
      }
      type
      createdAt
      updatedAt
    }
  }
`
