/* eslint-disable */
// this is an auto generated file. This will be overwritten

exports.fetchProfile = /* GraphQL */ `
  query FetchProfile($viewerID: String!, $profileID: String!) {
    fetchProfile(viewerID: $viewerID, profileID: $profileID) {
      profileData {
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
        success
        friends {
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
        moreFriendsAvailable
        actionButtonType
      }
      success
    }
  }
`
exports.fetchOtherUserFriendships = /* GraphQL */ `
  query FetchOtherUserFriendships(
    $viewerID: String!
    $userID: String!
    $type: String!
    $limit: String!
    $nextToken: String!
  ) {
    fetchOtherUserFriendships(
      viewerID: $viewerID
      userID: $userID
      type: $type
      limit: $limit
      nextToken: $nextToken
    ) {
      friendships {
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
        createdAt
        updatedAt
      }
      success
    }
  }
`
exports.onSearchUsers = /* GraphQL */ `
  query OnSearchUsers(
    $userID: String!
    $keyword: String!
    $nextToken: String
    $limit: Int
  ) {
    onSearchUsers(
      userID: $userID
      keyword: $keyword
      nextToken: $nextToken
      limit: $limit
    ) {
      items {
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
      nextToken
    }
  }
`
exports.fetchDiscoverFeedPosts = /* GraphQL */ `
  query FetchDiscoverFeedPosts(
    $userID: String!
    $nextToken: String
    $limit: Int
  ) {
    fetchDiscoverFeedPosts(
      userID: $userID
      nextToken: $nextToken
      limit: $limit
    ) {
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
      success
      nextToken
    }
  }
`
exports.fetchHashtagFeedPosts = /* GraphQL */ `
  query FetchHashtagFeedPosts(
    $userID: String!
    $hashtag: String!
    $nextToken: String
    $limit: Int
  ) {
    fetchHashtagFeedPosts(
      userID: $userID
      hashtag: $hashtag
      nextToken: $nextToken
      limit: $limit
    ) {
      items {
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
        hashtag
        createdAt
        updatedAt
      }
      success
      nextToken
    }
  }
`
exports.searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: [SearchableUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserAggregationInput]
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`
exports.getChannelFeed = /* GraphQL */ `
  query GetChannelFeed($id: String!) {
    getChannelFeed(id: $id) {
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
exports.listChannelFeeds = /* GraphQL */ `
  query ListChannelFeeds(
    $id: String
    $filter: ModelChannelFeedFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChannelFeeds(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`
exports.getChannel = /* GraphQL */ `
  query GetChannel($id: String!) {
    getChannel(id: $id) {
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
exports.listChannels = /* GraphQL */ `
  query ListChannels(
    $id: String
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChannels(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
            senderID
            content
            senderProfilePictureURL
            senderProfilePictureKey
            senderFirstName
            senderLastName
            senderUsername
            readUserIDs
            reactionsCount
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
      nextToken
    }
  }
`
exports.getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
exports.listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`
exports.getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
exports.listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`
exports.getPostFeed = /* GraphQL */ `
  query GetPostFeed($id: ID!) {
    getPostFeed(id: $id) {
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
exports.listPostFeeds = /* GraphQL */ `
  query ListPostFeeds(
    $filter: ModelPostFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostFeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.getEntityPostFeed = /* GraphQL */ `
  query GetEntityPostFeed($id: ID!) {
    getEntityPostFeed(id: $id) {
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
exports.listEntityPostFeeds = /* GraphQL */ `
  query ListEntityPostFeeds(
    $filter: ModelEntityPostFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntityPostFeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        hashtag
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
exports.listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        commentText
        postID
      }
      nextToken
    }
  }
`
exports.getStory = /* GraphQL */ `
  query GetStory($id: ID!) {
    getStory(id: $id) {
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
exports.listStories = /* GraphQL */ `
  query ListStories(
    $filter: ModelStoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStories(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`
exports.getStoryFeed = /* GraphQL */ `
  query GetStoryFeed($id: ID!) {
    getStoryFeed(id: $id) {
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
exports.listStoryFeeds = /* GraphQL */ `
  query ListStoryFeeds(
    $filter: ModelStoryFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoryFeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.getFriendship = /* GraphQL */ `
  query GetFriendship($id: String!) {
    getFriendship(id: $id) {
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
exports.listFriendships = /* GraphQL */ `
  query ListFriendships(
    $id: String
    $filter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFriendships(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.getMutualFriendship = /* GraphQL */ `
  query GetMutualFriendship($id: String!) {
    getMutualFriendship(id: $id) {
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
exports.listMutualFriendships = /* GraphQL */ `
  query ListMutualFriendships(
    $id: String
    $filter: ModelMutualFriendshipFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMutualFriendships(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.getUnmutualFriendship = /* GraphQL */ `
  query GetUnmutualFriendship($id: String!) {
    getUnmutualFriendship(id: $id) {
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
exports.listUnmutualFriendships = /* GraphQL */ `
  query ListUnmutualFriendships(
    $id: String
    $filter: ModelUnmutualFriendshipFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUnmutualFriendships(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
exports.channelFeedByChannelID = /* GraphQL */ `
  query ChannelFeedByChannelID(
    $channelID: String
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChannelFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    channelFeedByChannelID(
      channelID: $channelID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`
exports.channelFeedByUser = /* GraphQL */ `
  query ChannelFeedByUser(
    $userID: ID
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChannelFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    channelFeedByUser(
      userID: $userID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`
exports.messagesByChannelID = /* GraphQL */ `
  query MessagesByChannelID(
    $channelID: String
    $createdAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChannelID(
      channelID: $channelID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`
exports.getPostsbyUser = /* GraphQL */ `
  query GetPostsbyUser(
    $authorID: ID
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostsbyUser(
      authorID: $authorID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`
exports.getPostFeedByAuthor = /* GraphQL */ `
  query GetPostFeedByAuthor(
    $authorID: ID
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostFeedByAuthor(
      authorID: $authorID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.getPostFeedForDestUser = /* GraphQL */ `
  query GetPostFeedForDestUser(
    $destUserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPostFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostFeedForDestUser(
      destUserID: $destUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.getPostFeedForPost = /* GraphQL */ `
  query GetPostFeedForPost(
    $postID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPostFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostFeedForPost(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.getEntityPostFeedByhashtag = /* GraphQL */ `
  query GetEntityPostFeedByhashtag(
    $hashtag: String
    $sortDirection: ModelSortDirection
    $filter: ModelEntityPostFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEntityPostFeedByhashtag(
      hashtag: $hashtag
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        hashtag
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.getCommentsByUser = /* GraphQL */ `
  query GetCommentsByUser(
    $authorID: ID
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCommentsByUser(
      authorID: $authorID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        commentText
        postID
      }
      nextToken
    }
  }
`
exports.getPostComments = /* GraphQL */ `
  query GetPostComments(
    $postID: ID
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostComments(
      postID: $postID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        commentText
        postID
      }
      nextToken
    }
  }
`
exports.getStoriesByUser = /* GraphQL */ `
  query GetStoriesByUser(
    $authorID: ID
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelStoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getStoriesByUser(
      authorID: $authorID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`
exports.getStoryFeedByAuthor = /* GraphQL */ `
  query GetStoryFeedByAuthor(
    $authorID: ID
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelStoryFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getStoryFeedByAuthor(
      authorID: $authorID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.getStoryFeedForDestUser = /* GraphQL */ `
  query GetStoryFeedForDestUser(
    $destUserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelStoryFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getStoryFeedForDestUser(
      destUserID: $destUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.friendshipsBySourceUser = /* GraphQL */ `
  query FriendshipsBySourceUser(
    $sourceUserID: ID
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    friendshipsBySourceUser(
      sourceUserID: $sourceUserID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.friendshipsByDestUser = /* GraphQL */ `
  query FriendshipsByDestUser(
    $destUserID: ID
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    friendshipsByDestUser(
      destUserID: $destUserID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.mutualsBySourceUser = /* GraphQL */ `
  query MutualsBySourceUser(
    $sourceUserID: ID
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMutualFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mutualsBySourceUser(
      sourceUserID: $sourceUserID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.mutualsByDestUser = /* GraphQL */ `
  query MutualsByDestUser(
    $destUserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMutualFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mutualsByDestUser(
      destUserID: $destUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.unmutualsBySourceUser = /* GraphQL */ `
  query UnmutualsBySourceUser(
    $sourceUserID: ID
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUnmutualFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    unmutualsBySourceUser(
      sourceUserID: $sourceUserID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.unmutualsByDestUser = /* GraphQL */ `
  query UnmutualsByDestUser(
    $destUserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUnmutualFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    unmutualsByDestUser(
      destUserID: $destUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
exports.userReportsByDestUser = /* GraphQL */ `
  query UserReportsByDestUser(
    $dest: ID
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userReportsByDestUser(
      dest: $dest
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`
exports.userReportsBySourceUser = /* GraphQL */ `
  query UserReportsBySourceUser(
    $source: ID
    $updatedAt: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userReportsBySourceUser(
      source: $source
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`
