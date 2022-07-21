import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import SingleContact from '../components/contactScreen/singleContact';
export default function ContactScreen({navigation}) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      
      <SingleContact navigation={navigation}/>
      <SingleContact navigation={navigation}/>
      <SingleContact navigation={navigation}/>
      <SingleContact navigation={navigation}/>
      <SingleContact navigation={navigation}/>
      <SingleContact navigation={navigation}/>
      <SingleContact navigation={navigation}/>
      <SingleContact navigation={navigation}/>
      <SingleContact navigation={navigation}/>
      <SingleContact navigation={navigation}/>
      <SingleContact navigation={navigation}/>
      <SingleContact navigation={navigation}/>
      <SingleContact navigation={navigation}/>

    </ScrollView>
  )
}
const styles=StyleSheet.create({
    // container:{
    //     flex:1,
        
    //   }
})