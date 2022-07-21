/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ContactScreen from './screens/contactScreen';
import ChatScreen from './screens/chatScreen';
import ContactHeader from './components/contactScreen/contactHeader';
import ChatHeader from './components/chatScreen/chatHeader';
import { white } from 'react-native-paper/lib/typescript/styles/colors';
const App=()=>{
  const Tab=createMaterialBottomTabNavigator();
  const Stack= createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator  style={styles.container}>
        <Stack.Screen 
        name="contactScreen"
        component={ContactScreen}
        options={{ headerTitle: ContactHeader,headerStyle: {
          backgroundColor: '#3777F0',
        }}}/>
        <Stack.Screen
         name="chatScreen"
        component={ChatScreen}
        options={{ headerTitle:(props)=><ChatHeader {...props}/>,headerStyle: {
          backgroundColor: '#3777F0',
          padding:0,
        },headerTintColor:'white',
        title:'Username',
        // headerLeft: () => (
        //   <Button
        //     onPress={() => alert('This is a button!')}
        //     title="Info"
        //     color="#fff"
        //   />),
        }} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}
const styles=StyleSheet.create({
  // container:{
  //   //   flex:1,
  //   //   alignItems: "center",
  //   //  justifyContent: "center",
  //   }
})

export default App;
