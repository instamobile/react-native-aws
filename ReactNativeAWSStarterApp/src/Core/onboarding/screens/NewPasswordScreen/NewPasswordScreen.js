import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native'
import Button from 'react-native-button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useTheme, useTranslations } from 'dopenative'
import dynamicStyles from './styles'
import TNActivityIndicator from '../../../truly-native'
import { useAuth } from '../../hooks/useAuth'
import { localizedErrorMessage } from '../../api/ErrorCode'

export default function NewPasswordScreen({ navigation, route }) {
  const email = route.params?.email
  const smsCode = route.params?.smsCode

  const { localized } = useTranslations()
  const { theme, appearance } = useTheme()
  const styles = dynamicStyles(theme, appearance)

  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const authManager = useAuth()

  const onSend = async () => {
    if (!password) {
      Alert.alert(localized('Password can not be empty'))
      return
    }
    setIsLoading(true)
    authManager
      .confirmResetPassword(email, password, smsCode)
      .then(response => {
        setIsLoading(false)
        if (response.error) {
          return Alert.alert(
            '',
            localizedErrorMessage(response.error, localized),
            [{ text: localized('OK') }],
            {
              cancelable: false,
            },
          )
        }

        //reset password success
        Alert.alert(
          localized('Reset password success'),
          localized('Please login with your new password'),
          [
            {
              text: localized('OK'),
              onPress: navigation.goBack,
            },
          ],
        )
        return
      })
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backArrowStyle} source={theme.icons.backArrow} />
        </TouchableOpacity>

        <View style={styles.headerContainer}>
          <Text style={styles.title}>{localized('New Password')}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.activityContainer}>
            <TextInput
              style={styles.inputContainer}
              placeholderTextColor="#aaaaaa"
              secureTextEntry
              placeholder={localized('Please enter a new password')}
              onChangeText={text => setPassword(text)}
              value={password}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <Button
              containerStyle={styles.sendTextContainer}
              style={styles.sendText}
              onPress={onSend}>
              {localized('SEND')}
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {isLoading && <TNActivityIndicator />}
    </View>
  )
}
