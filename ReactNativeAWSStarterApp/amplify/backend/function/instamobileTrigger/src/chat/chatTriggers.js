const {
  getChannelParticipants,
  getUserChannelFeed,
  updateChannel,
  updateUserChannelFeed,
} = require('./common')

exports.propagateChatChannel = async record => {
  if (record.old?.profilePictureKey === record.new?.profilePictureKey) {
    console.log(
      'propagateChatChannel status : %j should not propagate chat channel',
    )
    return
  }

  const channelItems = await getChannelItems(record)

  if (channelItems?.length) {
    return await updateParticipantsRecordInChannel(channelItems)
  }

  return
}

const getChannelItems = async record => {
  const authorID = record.new?.id

  const res = await getUserChannelFeed(authorID)

  if (!res.items?.length) {
    console.log('invalid op, no feed to update : %j', res.items)
    return
  }

  const channelItems = []

  res.items.forEach(item => {
    const otherParticipants = getChannelParticipants(item.participants)
    channelItems.push({
      id: item.channelID,
      otherParticipants,
      allParticipants: [
        ...otherParticipants,
        ...getChannelParticipants([record.new]),
      ],
    })
  })

  return channelItems
}

const updateParticipantsRecordInChannel = async channelItems => {
  const channelTask = channelItems.map(async channelItem => {
    const allParticipants = [...channelItem.allParticipants]
    await updateChannel({
      id: channelItem.id,
      participants: allParticipants,
    })

    const channelFeedTask = channelItem.allParticipants.map(
      async updatedParticipant => {
        return await updateUserChannelFeed({
          id: updatedParticipant.id + channelItem.id,
          participants: allParticipants.filter(
            participant => participant.id !== updatedParticipant.id,
          ),
        })
      },
    )

    return await Promise.all(channelFeedTask)
  })
  return await Promise.all(channelTask)
}
