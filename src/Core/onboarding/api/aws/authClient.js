import { Auth } from 'aws-amplify'
import * as userAPI from '../../../users'

//TODO: we should check that the username is unique here
export const checkUniqueUsername = username => {
  return new Promise(resolve => {
    resolve({ isUnique: true })
  })
}

export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const res = await Auth.signIn(email, password)

    const user = await userAPI.getUserByID(res.attributes?.sub)

    return { user: user }
  } catch (error) {
    if (error.code == 'UserNotConfirmedException') {
      Auth.resendSignUp(email)
      return { confirmcode: true, user: {} }
    }
    console.warn('Error  while trying to sign up:', error)

    return { error: error.message }
  }
}

export const registerWithEmail = async (userDetails, appIdentifier) => {
  const { email, firstName, lastName, password, phone } = userDetails

  try {
    const { userConfirmed, userSub } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email, // optional
        given_name: firstName,
        family_name: lastName,
        phone_number: phone,

        // phone_number, // optional - E.164 number convention
        // other custom attributes
      },
    })

    return { confirmcode: !userConfirmed, user: userDetails }
  } catch (error) {
    console.warn('Error  while trying to sign up:', error)
    return { error: error.message }
  }
}

export const confirmEmailSignUpCode = async (userDetails, confirmationCode) => {
  try {
    await Auth.confirmSignUp(userDetails.email, confirmationCode)
    const res = await Auth.signIn(userDetails.email, userDetails.password)

    delete userDetails.password
    delete userDetails.photoFile
    delete userDetails.appIdentifier

    const newUserInfo = {
      firstName: res.attributes?.given_name,
      lastName: res.attributes?.family_name,
      ...userDetails,
      id: res.attributes?.sub,
    }

    await userAPI.createUser(newUserInfo)

    return { user: { ...newUserInfo } }
  } catch (error) {
    console.warn(error)
    return { error: error.message }
  }
}

// reset password with confirmationCode
export const confirmResetPassword = async (
  email,
  password,
  confirmationCode,
) => {
  try {
    // Collect confirmation code and new password, then
    await Auth.forgotPasswordSubmit(email, confirmationCode, password)
    // reset password success
    return true
  } catch (error) {
    console.warn(error)
    return { error: error.message }
  }
}

export const retrievePersistedAuthUser = async () => {
  try {
    const res = await Auth.currentAuthenticatedUser()

    const user = await userAPI.getUserByID(res.attributes?.sub)

    return { user: user }
  } catch (error) {
    console.warn(error)
    return null
  }
}

export const logout = async () => {
  await Auth.signOut()
}

export const sendPasswordResetEmail = async email => {
  try {
    // Send confirmation code to user's email
    await Auth.forgotPassword(email)
    // confirmation code  sent
    return { confirmCode: true }
  } catch (error) {
    console.warn(error)
    return { error: error.message }
  }
}

export const sendSMSToPhoneNumber = phoneNumber => {
  //TODO: send confirmation code for phone auth
}

export const updateProfilePhoto = (userID, profilePictureKey) => {
  return new Promise((resolve, _reject) => {
    userAPI
      .updateProfilePhoto(userID, profilePictureKey)
      .then(() => {
        resolve({ success: true })
      })
      .catch(error => {
        resolve({ error: error })
      })
  })
}

export const fetchAndStorePushTokenIfPossible = async user => {
  //TODO: Update user push token field to use push notification
}

export const removeUser = userID => {
  //TODO: Handle on user deletes account
  return new Promise(resolve => {
    resolve({ success: true })
  })
}
