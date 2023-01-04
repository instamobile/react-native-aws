/**
 * @format
 */

 import { AppRegistry, NativeModules, Platform } from 'react-native'
 import App from './src/App'
 import { name as appName } from './app.json'
 
 import config from './src/aws-exports'
 import { Amplify } from 'aws-amplify'
 Amplify.configure(config)
 
 
 AppRegistry.registerComponent(appName, () => App)