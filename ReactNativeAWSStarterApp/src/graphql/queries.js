/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      firstName
      lastName
      phone
      profilePictureKey
      location {
        longitude
        latitude
      }
      signUpLocation {
        longitude
        latitude
      }
      lastOnlineTimestamp
      createdAt
      updatedAt
      owner
    }
  }
`
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        firstName
        lastName
        phone
        profilePictureKey
        location {
          longitude
          latitude
        }
        signUpLocation {
          longitude
          latitude
        }
        lastOnlineTimestamp
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`
