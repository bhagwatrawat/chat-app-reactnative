import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Message from '../components/chatScreen/message';
import Input from '../components/chatScreen/input';
export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}  style={styles.messages}>
        <Message />
      </ScrollView>
      <Input style={styles.input} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messages:{
    flex:1,
    flexDirection:'column-reverse',
  }
})
