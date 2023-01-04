import { Storage } from 'aws-amplify'
import AsyncStorage from '@react-native-community/async-storage'
import { getUnixTimeStamp } from '../../../helpers/timeFormat'

const storageKey = '@AwsStorageCache:key'
const expireSeconds = 60 * 60 * 24 * 7 // max of 7 days allowed

class StorageCache {
  constructor() {
    this.cache = null
  }

  async getCache() {
    if (this.cache) {
      return this.cache
    }

    try {
      const res = await AsyncStorage.getItem(storageKey)

      if (res) {
        this.cache = JSON.parse(res)
      }

      return this.cache || {}
    } catch (error) {
      console.warn(error)
    }
  }

  updateCache({ fileKey, ...others }) {
    this.cache = { ...(this.cache ?? {}), [fileKey]: { ...others } }
    const stringifyCache = JSON.stringify(this.cache)
    AsyncStorage.setItem(storageKey, stringifyCache)
  }

  async getFileLink(fileKey) {
    const cache = await this.getCache()

    const currentUnixTimeStamp = getUnixTimeStamp()
    const cachedFile = cache[fileKey]

    const cachedLink = cachedFile?.link
    const diff = currentUnixTimeStamp - cachedFile?.createdAt
    const isLinkValid = diff <= expireSeconds

    if (isLinkValid) {
      return cachedLink
    }
    const res = await Storage.get(fileKey, {
      level: 'public',
      expires: expireSeconds,
    })
    this.updateCache({
      link: res,
      createdAt: currentUnixTimeStamp,
      fileKey,
    })

    return res
  }
}

export default new StorageCache()
