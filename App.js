/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ContactScreen from './screens/contactScreen';
import ChatScreen from './screens/chatScreen';
const App=()=>{
  const Tab=createMaterialBottomTabNavigator();
  return (
    <NavigationContainer >
      <Tab.Navigator barStyle={{backgroundColor:'blue'}} style={styles.container}>
        <Tab.Screen name="contactScreen" component={ContactScreen} options={{
          tabBarIcon:({color})=>{
            return <FontAwesome5 name="soap" size={30} color={color} />
          },
        }}/>
        <Tab.Screen name="chatScreen" component={ChatScreen} />
        </Tab.Navigator>
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
