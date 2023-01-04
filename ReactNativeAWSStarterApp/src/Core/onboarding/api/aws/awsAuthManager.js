import { storageAPI } from '../../../media'
import * as authAPI from './authClient'
import { updateUser } from '../../../users'
import { ErrorCode } from '../ErrorCode'

const defaultProfilePhotoURL =
  'https://www.iosapptemplates.com/wp-content/uploads/2019/06/empty-avatar.jpg'

const validateUsernameFieldIfNeeded = (inputFields, appConfig) => {
  return new Promise((resolve, reject) => {
    const usernamePattern = /^[aA-zZ]\w{3,29}$/

    if (!appConfig.isUsernameFieldEnabled) {
      resolve({ success: true })
    }
    if (
      appConfig.isUsernameFieldEnabled &&
      !inputFields?.hasOwnProperty('username')
    ) {
      return resolve({ error: 'Invalid username' })
    }

    if (!usernamePattern.test(inputFields.username)) {
      return resolve({ error: 'Invalid username' })
    }

    resolve({ success: true })
  })
}

const loginWithEmailAndPassword = (email, password) => {
  return new Promise(function (resolve, _reject) {
    authAPI.loginWithEmailAndPassword(email, password).then(response => {
      if (!response.error) {
        handleSuccessfulLogin(response, false).then(res => {
          // Login successful, push token stored, login credential persisted, so we log the user in.
          resolve(res)
        })
      } else {
        resolve({ error: response.error })
      }
    })
  })
}

const createAccountWithEmailAndPassword = (userDetails, appConfig) => {
  const accountCreationTask = userData => {
    return new Promise((resolve, _reject) => {
      authAPI
        .registerWithEmail(userData, appConfig.appIdentifier)
        .then(async response => {
          if (response.error) {
            resolve({ error: response.error })
          } else {
            resolve({
              ...response,
              user: {
                ...response.user,
                profilePictureURL: defaultProfilePhotoURL,
              },
            })
          }
        })
    })
  }

  return new Promise(function (resolve, _reject) {
    const userData = {
      ...userDetails,
      profilePictureURL: defaultProfilePhotoURL,
    }
    accountCreationTask(userData).then(response => {
      if (response.error) {
        resolve({ error: response.error })
      } else {
        // We signed up successfully, so we are logging the user in (as well as updating push token, persisting credential,s etc.)
        handleSuccessfulLogin(response, true).then(response => {
          resolve({
            ...response,
          })
        })
      }
    })
  })
}

const retrievePersistedAuthUser = () => {
  return new Promise(resolve => {
    authAPI.retrievePersistedAuthUser().then(response => {
      if (response) {
        handleSuccessfulLogin(response, false).then(res => {
          // Persisted login successful, push token stored, login credential persisted, so we log the user in.
          resolve({
            user: res.user,
          })
        })
      } else {
        resolve(null)
      }
    })
  })
}

const sendPasswordResetEmail = email => {
  return new Promise(resolve => {
    authAPI.sendPasswordResetEmail(email).then(res => {
      resolve(res)
    })
  })
}

const confirmEmailSignUpCode = (userDetails, confirmationCode) => {
  return new Promise(resolve => {
    authAPI
      .confirmEmailSignUpCode(
        { ...userDetails, profilePictureURL: defaultProfilePhotoURL },
        confirmationCode,
      )
      .then(response => {
        let user = response.user
        // We confirmed the user succesfully, time to upload the profile photo and update the users table with the correct URL
        if (userDetails.photoFile) {
          storageAPI
            .processAndUploadMediaFile(userDetails.photoFile)
            .then(res => {
              if (res.error) {
                // if account gets created, but photo upload fails, we still log the user in
                resolve({
                  ...response,
                  nonCriticalError: res.error,
                  user,
                })
              } else {
                authAPI
                  .updateProfilePhoto(user.id, res.downloadKey)
                  .then(_result => {
                    resolve({
                      ...response,
                      user: {
                        ...user,
                        profilePictureURL: res.downloadURL,
                        profilePictureKey: res.downloadKey,
                      },
                    })
                  })
              }
            })
        } else {
          resolve(response)
        }
      })
  })
}

const confirmResetPassword = (email, password, confirmationCode) => {
  return new Promise(resolve => {
    authAPI
      .confirmResetPassword(email, password, confirmationCode)
      .then(res => {
        resolve(res)
      })
  })
}

const logout = async user => {
  await authAPI.logout()
}

const handleSuccessfulLogin = async (response, accountCreated) => {
  // After a successful login, we fetch & store the device token for push notifications, location, online status, etc.
  // we don't wait for fetching & updating the location or push token, for performance reasons (especially on Android)
  // fetchAndStoreExtraInfoUponLogin(response.user, accountCreated) // TODO: undo this for aws

  try {
    if (response.user?.profilePictureKey) {
      const profilePictureURL = await storageAPI.getFileLink(
        response.user?.profilePictureKey,
      )
      return {
        ...response,
        user: {
          ...response.user,
          profilePictureURL,
        },
      }
    }
    return response
  } catch (error) {
    return null
  }
}

const fetchAndStoreExtraInfoUponLogin = async (user, accountCreated) => {
  authAPI.fetchAndStorePushTokenIfPossible(user)

  getCurrentLocation(Geolocation).then(async location => {
    const latitude = location.coords.latitude
    const longitude = location.coords.longitude
    var locationData = {}
    if (location) {
      locationData = {
        location: {
          latitude: latitude,
          longitude: longitude,
        },
      }
      if (accountCreated) {
        locationData = {
          ...locationData,
          signUpLocation: {
            latitude: latitude,
            longitude: longitude,
          },
        }
      }
    }

    const userData = {
      ...locationData,
      isOnline: true,
    }

    updateUser(user.id || user.userID, userData)
  })
}

const getCurrentLocation = geolocation => {
  return new Promise(async resolve => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      resolve({ coords: { latitude: '', longitude: '' } })
      return
    }

    geolocation.getCurrentPosition(
      location => {
        console.log(location)
        resolve(location)
      },
      error => {
        console.log(error)
      },
    )
  })
}

const authManager = {
  validateUsernameFieldIfNeeded,
  retrievePersistedAuthUser,
  loginWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmEmailSignUpCode,
  confirmResetPassword,
  logout,
  createAccountWithEmailAndPassword,
}

export default authManager
