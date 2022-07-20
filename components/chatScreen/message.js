import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Message() {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Message fsdfjkds dfjdskfjdskf dfkdfdkfjk fjfkdjk fsjkls </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    page: {
        backgroundColor:'#3777F0',
        maxWidth: '75%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin:10,
        borderRadius:20,
        // marginLeft:'auto',
    },
    text:{
        color: 'white',
        fontSize: 15,
        letterSpacing:0.7,
        lineHeight:25,
    }
})