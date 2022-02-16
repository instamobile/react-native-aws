import { Storage } from 'aws-amplify'
import uuidv4 from 'uuidv4'
import { ErrorCode } from '../../../onboarding/api/ErrorCode'

const getFileLink = async fileKey => {
  const res = await Storage.get(fileKey, { level: 'private' })

  return res
}

const processAndUploadMediaFile = async file => {
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
      level: 'private',
      contentType: 'image/jpeg',
    })

    const downloadURL = await getFileLink(res.key)

    return { downloadURL, downloadKey: res.key }
  } catch (error) {
    console.warn(error)
    return { error: ErrorCode.photoUploadFailed }
  }
}

const awsStorage = {
  processAndUploadMediaFile,
  getFileLink,
}

export default awsStorage
