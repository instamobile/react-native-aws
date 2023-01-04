const {
  hydrateChannelFeedsNewChannel,
  getExistingChannel,
} = require('./common')

exports.onChannelCreated = async event => {
  const channelID = event.arguments.channelID

  try {
    return onChannelCreated(channelID)
  } catch (err) {
    return err
  }
}

const onChannelCreated = async channelID => {
  const res = await getExistingChannel(channelID)

  if (!res?.id) {
    return { statusCode: 404, message: 'invalid op, channel does not exist' }
  }

  const message = {
    content: '',
    sender: {
      id: res.creatorID,
    },
  }

  await hydrateChannelFeedsNewChannel(res, message)
  return res
}
