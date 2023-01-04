import { Storage } from 'aws-amplify'
import uuidv4 from 'uuidv4'
import { ErrorCode } from '../../../onboarding/api/ErrorCode'
import { processMediaFile } from '../../mediaProcessor'
import storageCache from './storageCache'

const defaultProfilePhotoURL =
  'https://www.iosapptemplates.com/wp-content/uploads/2019/06/empty-avatar.jpg'

const getFileLink = async fileKey => {
  if (!fileKey) {
    return defaultProfilePhotoURL
  }

  const res = await storageCache.getFileLink(fileKey)

  return res
}

const hydrateListWithFileLink = async (list, keyProperty, urlProperty) => {
  const tasks = list?.map(async listItem => {
    const fileLink = await getFileLink(listItem[keyProperty])
    return { ...listItem, [urlProperty]: fileLink }
  })
  return await Promise.all(tasks)
}

const uploadFile = async (file, callbackProgress) => {
  try {
    const fileSource = file.uri || file.path
    const photo = await fetch(fileSource)
    const photoBlob = await photo.blob()
    const filename = fileSource.substring(
      fileSource.lastIndexOf('/'),
      fileSource.indexOf('?') === -1
        ? fileSource.length
        : fileSource.indexOf('?'),
    )
    const uniqueFilename = uuidv4() + filename

    const res = await Storage.put(uniqueFilename, photoBlob, {
      level: 'public',
      contentType: file.mimeType || file.mime || 'image/jpeg',
      progressCallback: progress => {
        callbackProgress?.(progress.loaded, progress.total)
      },
    })

    const downloadURL = await getFileLink(res.key)

    return { downloadURL, downloadKey: res.key }
  } catch (error) {
    console.warn(error)
    return { error: ErrorCode.photoUploadFailed }
  }
}

const processAndUploadMediaFileWithProgressTracking = (
  file,
  callbackProgress,
  callbackSuccess,
  callbackError,
) => {
  processMediaFile(file, ({ processedUri, thumbnail }) => {
    // Success handler with SUCCESS is called multiple times on Android. We need work around that to ensure we only call it once
    uploadFile({ ...file, uri: processedUri }, callbackProgress)
      .then(({ downloadURL, downloadKey }) => {
        if (thumbnail) {
          uploadFile({ ...file, uri: thumbnail }, callbackProgress)
            .then(
              ({ downloadURL: thumbnailURL, downloadKey: thumbnailKey }) => {
                callbackSuccess(
                  downloadURL,
                  thumbnailURL,
                  downloadKey,
                  thumbnailKey,
                )
              },
            )
            .catch(callbackError)

          return
        }
        callbackSuccess(downloadURL, downloadKey)
      })
      .catch(callbackError)
  })
}

const processAndUploadMediaFile = file => {
  return new Promise((resolve, _reject) => {
    processMediaFile(file, ({ processedUri, thumbnail }) => {
      uploadFile({ ...file, uri: processedUri })
        .then(({ downloadURL, downloadKey }) => {
          if (thumbnail) {
            uploadFile({ ...file, uri: thumbnail })
              .then(
                ({ downloadURL: thumbnailURL, downloadKey: thumbnailKey }) => {
                  resolve({
                    downloadURL,
                    downloadKey,
                    thumbnailURL,
                    thumbnailKey,
                  })
                },
              )
              .catch(() => resolve({ error: ErrorCode.photoUploadFailed }))

            return
          }
          resolve({ downloadURL, downloadKey })
        })
        .catch(() => resolve({ error: ErrorCode.photoUploadFailed }))
    })
  })
}

const awsStorage = {
  processAndUploadMediaFile,
  processAndUploadMediaFileWithProgressTracking,
  getFileLink,
  hydrateListWithFileLink,
}

export default awsStorage
