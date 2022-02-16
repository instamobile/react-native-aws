import { API, graphqlOperation } from 'aws-amplify'
import * as userMutations from '../../../../graphql/mutations'
import * as userQueries from '../../../../graphql/queries'
import * as userSubscriptions from '../../../../graphql/subscriptions'

import { getUnixTimeStamp } from '../../../helpers/timeFormat'

export const createUser = async newData => {
  const dataWithOnlineStatus = {
    ...newData,
    lastOnlineTimestamp: getUnixTimeStamp(),
  }
  try {
    await API.graphql(
      graphqlOperation(userMutations.createUser, {
        input: dataWithOnlineStatus,
      }),
    )
    return { success: true }
  } catch (error) {
    return error
  }
}

export const updateUser = async (userID, newData) => {
  const dataWithOnlineStatus = {
    ...newData,
    lastOnlineTimestamp: getUnixTimeStamp(),
  }
  try {
    await API.graphql(
      graphqlOperation(userMutations.updateUser, {
        input: dataWithOnlineStatus,
      }),
    )
    return { success: true }
  } catch (error) {
    return error
  }
}

export const getUserByID = async userID => {
  try {
    const res = await API.graphql(
      graphqlOperation(userQueries.getUser, { id: userID }),
    )
    if (res.data?.getUser) {
      return res.data?.getUser
    }
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

export const updateProfilePhoto = async (userID, profilePictureKey) => {
  try {
    await API.graphql(
      graphqlOperation(userMutations.updateUser, {
        input: { id: userID, profilePictureKey: profilePictureKey },
      }),
    )
    return { success: true }
  } catch (error) {
    console.log(error)
    return { error: error }
  }
}
