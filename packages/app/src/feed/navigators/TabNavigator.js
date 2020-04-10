import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { useTheme, Portal, FAB } from 'react-native-paper'
import { useIsFocused } from '@react-navigation/native'
import NotificationsTabNavigator from '../../notifications/navigators/NotificationsTabNavigator'
import Message from '../../messages/screens/Messages'
import FeedNavigator from './FeedNavigator'

const Tab = createMaterialBottomTabNavigator()

export default function TabNavigator(props) {
  const theme = useTheme()
  const isFocused = useIsFocused()

  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'TweetList'

  let icon = 'feather'

  switch (routeName) {
    case 'Messages':
      icon = 'email-plus-outline'
      break
    default:
      icon = 'feather'
      break
  }

  const tabBarColor = theme.colors.surface
  const inactiveColor = theme.dark
    ? theme.colors.placeholder
    : theme.colors.backdrop

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Feed"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={inactiveColor}
      >
        <Tab.Screen
          name="Feed"
          component={FeedNavigator}
          options={{
            tabBarIcon: 'home-account',
            tabBarColor,
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={NotificationsTabNavigator}
          options={{
            tabBarIcon: 'bell-outline',
            tabBarColor,
          }}
        />

        <Tab.Screen
          name="Messages"
          component={Message}
          options={{
            tabBarIcon: 'message-text-outline',
            tabBarColor,
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon={icon}
          style={{
            position: 'absolute',
            bottom: 100,
            right: 16,
          }}
          color="white"
          theme={{
            colors: {
              accent: theme.colors.primary,
            },
          }}
        />
      </Portal>
    </React.Fragment>
  )
}
