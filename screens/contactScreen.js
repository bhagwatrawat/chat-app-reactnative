import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import SingleContact from '../components/contactScreen/singleContact';
export default function ContactScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      
      <SingleContact/>
      <SingleContact/>
      <SingleContact/>
      <SingleContact/>
      <SingleContact/>
      <SingleContact/>
      <SingleContact/>
      <SingleContact/>
      <SingleContact/>
      <SingleContact/>
      <SingleContact/>
      <SingleContact/>

    </ScrollView>
  )
}
const styles=StyleSheet.create({
    // container:{
    //     flex:1,
        
    //   }
})