import { I18nManager, StyleSheet } from 'react-native'

const generalPadding = 0.11

const dynamicStyles = (theme, colorScheme) => {
  const colorSet = theme.colors[colorScheme]
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorSet.primaryBackground,
    },
    backArrowStyle: {
      resizeMode: 'contain',
      tintColor: colorSet.primaryForeground,
      width: 25,
      height: 25,
      marginTop: Platform.OS === 'ios' ? 50 : 20,
      marginLeft: 10,
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    headerContainer: {
      flex: 2,
      justifyContent: 'center',
      backgroundColor: colorSet.primaryBackground,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: colorSet.primaryForeground,
      marginTop: 25,
      marginBottom: 50,
      alignSelf: 'stretch',
      textAlign: 'left',
      marginLeft: 35,
    },
    bodyContainer: {
      flex: 8,
      backgroundColor: colorSet.primaryBackground,
    },
    activityContainer: {
      width: '100%',
      height: '65%',
      paddingVertical: 5,
    },
    inputContainer: {
      height: 42,
      borderWidth: 1,
      borderColor: colorSet.grey3,
      backgroundColor: colorSet.primaryBackground,
      paddingLeft: 20,
      color: colorSet.primaryText,
      width: '80%',
      alignSelf: 'center',
      marginTop: 20,
      alignItems: 'center',
      borderRadius: 25,
      textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    sendTextContainer: {
      alignSelf: 'center',
      width: '65%',
      backgroundColor: colorSet.primaryForeground,
      borderRadius: 25,
      padding: 10,
      marginTop: 50,
    },
    sendText: {
      color: colorSet.primaryBackground,
    },
  })
}

export default dynamicStyles
