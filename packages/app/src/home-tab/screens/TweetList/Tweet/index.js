import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import {
  Surface,
  Title,
  Caption,
  Text,
  Avatar,
  TouchableRipple,
} from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './styles'

export const Tweet = props => {
  return (
    <TouchableRipple onPress={() => props.onPress(props.id)}>
      <Surface style={styles.container}>
        <View style={styles.leftColumn}>
          <Avatar.Image source={{ uri: props.avatar }} size={60} />
        </View>
        <View style={styles.rightColumn}>
          <View style={styles.topRow}>
            <Title>{props.name}</Title>
            <Caption style={styles.handle}>{props.handle}</Caption>
            <Caption style={[styles.handle, styles.dot]}>{'\u2B24'}</Caption>
            <Caption>{props.date}</Caption>
          </View>
          <Text>{props.content}</Text>
          {props.image ? (
            <Image source={{ uri: props.image }} style={styles.image} />
          ) : null}
          <View style={styles.bottomRow}>
            <TouchableOpacity hitSlop={{ top: 10, bottom: 10 }}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="comment-outline" size={12} />
                <Caption style={styles.iconDescription}>
                  {props.comments}
                </Caption>
              </View>
            </TouchableOpacity>
            <TouchableOpacity hitSlop={{ top: 10, bottom: 10 }}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="share-outline" size={14} />
                <Caption style={styles.iconDescription}>
                  {props.retweets}
                </Caption>
              </View>
            </TouchableOpacity>
            <TouchableOpacity hitSlop={{ top: 10, bottom: 10 }}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="heart-outline" size={12} />
                <Caption style={styles.iconDescription}>{props.hearts}</Caption>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Surface>
    </TouchableRipple>
  )
}
