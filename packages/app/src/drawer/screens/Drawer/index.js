import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import ThemeContext from '@/app/theme/ThemeContext'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  useTheme,
} from 'react-native-paper'
import useUser from '@/app/user/useUser'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as firebase from 'firebase'
import styles from './styles'

function logOut() {
  firebase.auth().signOut()
}

export default function DrawerContent(props) {
  const user = useUser()
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)

  const theme = useTheme()

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image source={user.image} size={50} />

          <Title style={styles.title}>
            {user.firstName} {user.lastName}
          </Title>

          <Caption style={styles.caption}>@emerell</Caption>

          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                202
              </Paragraph>

              <Caption style={styles.caption}>Following</Caption>
            </View>

            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                159
              </Paragraph>

              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem icon={AccountIcon} label="Profile" />

          <DrawerItem icon={Preferences} label="Preferences" />

          <DrawerItem icon={Bookmark} label="Bookmarks" />
        </Drawer.Section>

        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={toggleTheme}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>

              <View pointerEvents="none">
                <Switch value={theme.dark} color={theme.colors.primary} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>

        <Drawer.Section title="Other">
          <TouchableRipple onPress={logOut}>
            <View style={styles.preference}>
              <Text>Log Out</Text>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  )
}

function AccountIcon({ color, size }) {
  return (
    <MaterialCommunityIcons name="account-outline" color={color} size={size} />
  )
}

function Bookmark({ color, size }) {
  return (
    <MaterialCommunityIcons name="bookmark-outline" color={color} size={size} />
  )
}
function Preferences({ color, size }) {
  return <MaterialCommunityIcons name="tune" color={color} size={size} />
}

AccountIcon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}

Bookmark.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}

Preferences.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}
