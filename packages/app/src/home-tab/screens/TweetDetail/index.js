import React from 'react'
import { View, Image, ScrollView } from 'react-native'
import { Surface, Title, Caption, Avatar, Subheading } from 'react-native-paper'

import styles from './styles'

export default function TweetDetail(props) {
  const tweet = props.route.params

  return (
    <ScrollView>
      <Surface style={styles.container}>
        <View style={styles.topRow}>
          <Avatar.Image
            style={styles.avatar}
            source={{ uri: tweet.avatar }}
            size={60}
          />

          <View>
            <Title>{tweet.name}</Title>

            <Caption style={styles.handle}>{tweet.handle}</Caption>
          </View>
        </View>

        <Subheading style={styles.content}>{tweet.content}</Subheading>

        {tweet.image ? (
          <Image source={{ uri: tweet.image }} style={styles.image} />
        ) : null}
      </Surface>
    </ScrollView>
  )
}
