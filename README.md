# react-native-aws

React Native AWS Starter Project

## Description

This project integrates a front-end with React Native framework and a back-end with an AWS Amplify.

## APIs Included

- User authentication (AWS Cognito).
- GraphQL API
- Storage using Amazon S3.

## App Features

- Sign up to the app using emails and password
- Upload profile picture when signing up to the app.
- Sign in to the app with email and password.
- Persistent sign in.

## Prerequisites

- [Node JS](https://nodejs.org/en/download/) with [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [YARN](https://classic.yarnpkg.com/en/) for managing packages
- [Create AWS account](https://portal.aws.amazon.com/billing/signup?redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start)

- [Node JS](https://nodejs.org/en/download/) with [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- [Install and configure AWS Amplify CLI](https://docs.amplify.aws/start/getting-started/installation/q/integration/react-native/#install-and-configure-the-amplify-cli)
  - `npm install -g @aws-amplify/cli`
  - `amplify configure` ([link](https://www.youtube.com/watch?v=fWbM5DLh25U) for a step by step video).

## Configuring the project

1. Clone this repo to your local machine.

```
git clone https://github.com/instamobile/react-native-aws.git

cd react-native-aws
```


2. Configure AWS Amplify cli.

you will need to configure your Amplify command line interface. click [here](https://docs.amplify.aws/start/getting-started/installation/q/integration/react-native/) to find out exactly how to do that

3. Initialise the AWS Amplify project.

```
amplify init
```

4. Time to deploy your project to AWS.

```
amplify push
```

## Running the application

1. Install client dependencies.

```
yarn install
```

2. Install pods for ios

```
cd ios && pod install && cd ..
```

3. Run on ios

```
npx react-native run-ios
```

3. Run on android

```
npx react-native run-android
```

## Contribute

- Feel free to contribute to this project.
