import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function SwipeableImage({ user }) {
  return (
    <View>
      <Image style={ styles.photo } source={{ uri: user.picture.large }} resizeMethod='cover'/>
    </View>
  )
}

const styles = StyleSheet.create({
    photo: {
        height: '100%',
        width: '100%',
        borderRadius: 20
    }
})