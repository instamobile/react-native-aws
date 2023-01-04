const { getAppSyncClient, getCognitoAdminToken } = require('./appSyncClient')

class AppSync {
  constructor() {
    this.client = null
  }

  getClient = async () => {
    if (this.client) {
      return this.client
    }
    const token = await getCognitoAdminToken()
    const client = getAppSyncClient(token)
    this.client = await client.hydrated()
    return this.client
  }
}

const appSync = new AppSync()

exports.makeGraphqlRequest = async operation => {
  const client = await appSync.getClient()

  const request = operation.query ? client.query : client.mutate

  const res = await request({
    query: operation.query,
    mutation: operation.mutation,
    variables: operation.variables,
    fetchPolicy: operation.query ? 'network-only' : 'no-cache',
  })
  return res.data
}
