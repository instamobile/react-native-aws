import React, { memo, useEffect, useLayoutEffect, useCallback } from 'react'
import { Text, View, Image } from 'react-native'
// import FastImage from 'react-native-fast-image'
import { useTheme, useTranslations } from 'dopenative'
import dynamicStyles from './styles'
import { TNTouchableIcon } from '../../Core/truly-native'
import { useCurrentUser } from '../../Core/onboarding'
import { useAuth } from '../../Core/onboarding/hooks/useAuth'

const HomeScreen = memo(props => {
  const { navigation } = props
  const currentUser = useCurrentUser()
  const authManager = useAuth()

  const { localized } = useTranslations()
  const { theme, appearance } = useTheme()
  const styles = dynamicStyles(theme, appearance)

  useLayoutEffect(() => {
    const colorSet = theme.colors[appearance]

    navigation.setOptions({
      headerTitle: localized('Home'),
      headerRight: () => (
        <View>
          <TNTouchableIcon
            imageStyle={{ tintColor: colorSet.primaryForeground }}
            iconSource={theme.icons.logout}
            onPress={onLogout}
          />
        </View>
      ),
      headerStyle: {
        backgroundColor: colorSet.primaryBackground,
        borderBottomColor: colorSet.hairline,
      },
      headerTintColor: colorSet.primaryText,
    })
  }, [])

  useEffect(() => {
    if (!currentUser?.id) {
      return
    }
  }, [currentUser?.id])

  const onLogout = useCallback(() => {
    authManager?.logout(currentUser).then(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'LoadScreen',
          },
        ],
      })
    })
  }, [currentUser])

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: currentUser?.profilePictureURL }}
      />
      <Text style={styles.text}>
        {localized('Logged in as')} {currentUser?.email}
      </Text>
    </View>
  )
})

export default HomeScreen
