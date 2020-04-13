import React, { useState, useEffect } from 'react'
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper'
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import MainNavigator from './MainNavigator'
import AuthNavigator from '@/auth/navigators/AuthNavigator'
import { UserProvider } from './user/UserProvider'
import { ThemeProvider } from './theme/ThemeProvider'
import * as firebase from 'firebase'

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#1ba1f2',
  },
}

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#1ba1f2',
  },
}

const firebaseConfig = {
  apiKey: 'AIzaSyC64Pbs4EiU5mixNyCivNemZCcUBugmZIM',
  authDomain: 'clone-twitter-fa80c.firebaseapp.com',
  databaseURL: 'https://clone-twitter-fa80c.firebaseio.com',
  projectId: 'clone-twitter-fa80c',
  storageBucket: 'clone-twitter-fa80c.appspot.com',
  messagingSenderId: '392249535836',
  appId: '1:392249535836:web:8ec7bf00a39e1a562f6599',
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

export default function Root() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        const firebaseRef = firebase.database().ref('users')

        firebaseRef.child(auth.uid).once('value', snap => {
          const user = snap.val()

          setUser(user)
        })
      } else {
        setUser(null)
      }
    })
  }, [])

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme

  return (
    <UserProvider value={user}>
      <ThemeProvider value={{ isDarkTheme, setIsDarkTheme }}>
        <PaperProvider
          theme={{
            ...theme,
          }}
        >
          <NavigationContainer theme={theme}>
            {user ? <MainNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </UserProvider>
  )
}
