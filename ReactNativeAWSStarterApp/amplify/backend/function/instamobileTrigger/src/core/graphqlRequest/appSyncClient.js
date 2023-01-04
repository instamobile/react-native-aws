const AWS = require('aws-sdk')
const AWSAppSyncClient = require('aws-appsync/lib/client').default
const { createAppSyncLink } = require('aws-appsync/lib/client')
const { createHttpLink } = require('apollo-link-http')
const fetch = require('node-fetch')

const graphQLEndpoint = process.env.API_INSTAMOBILE_GRAPHQLAPIENDPOINTOUTPUT
const region = process.env.REGION
const cognitoClientId = process.env.COGNITO_CLIENT_ID
const cognitoPoolId = process.env.COGNITO_USER_POOL_ID
const cognitoAdminUsername = process.env.ADMIN_USER_USERNAME
const cognitoAdminPassword = process.env.ADMIN_USER_PASSWORD

exports.getCognitoAdminToken = () => {
  return new Promise((resolve, reject) => {
    const authRequestParams = {
      AuthFlow: 'ADMIN_NO_SRP_AUTH',
      ClientId: cognitoClientId,
      UserPoolId: cognitoPoolId,
      AuthParameters: {
        USERNAME: cognitoAdminUsername,
        PASSWORD: cognitoAdminPassword,
      },
    }

    const awsCognito = new AWS.CognitoIdentityServiceProvider()
    awsCognito.adminInitiateAuth(authRequestParams, (err, data) => {
      if (err) {
        reject(err)
        return
      }

      if (
        !data ||
        !data.AuthenticationResult ||
        !data.AuthenticationResult.AccessToken
      ) {
        reject(
          new Error('Access token not found in adminInitiateAuth response'),
        )
        return
      }

      resolve(data.AuthenticationResult.AccessToken)
    })
  })
}

exports.getAppSyncClient = jwtToken => {
  const appSyncClientOptions = {
    url: graphQLEndpoint,
    region: region,
    // Use the Cognito User Pool as the auth method and
    // the token previously retrieved.
    auth: {
      type: 'AMAZON_COGNITO_USER_POOLS',
      jwtToken,
    },
    // Required when using from Lambda.
    disableOffline: true,
    // Required by the type, not used in our use case.
    complexObjectsCredentials: () => {
      return null
    },
  }
  const apolloClientOptions = {
    link: createAppSyncLink({
      ...appSyncClientOptions,
      resultsFetcherLink: createHttpLink({
        uri: appSyncClientOptions.url,
        fetch,
      }),
    }),
  }
  return new AWSAppSyncClient(appSyncClientOptions, apolloClientOptions)
}
