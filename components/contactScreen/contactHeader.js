import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function ContactHeader() {
  return (
    <View style={styles.page}>
    <View style={styles.container}>
        <Image source={require('../../assets/gamelogo.png')} style={{width:50,height:50,borderRadius:25}}/>
      <Text style={styles.headerTitle}>Snappy</Text>
      <View style={styles.icons}>
      <MaterialIcons
            style={styles.icon}
            name="photo-camera"
            size={30}
            color="white"
          />
          <MaterialIcons
            style={styles.icon}
            name="edit"
            size={30}
            color="white"
          />
        </View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    page:{
        flex:1,
    },
    container:{
       width:'95%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft:20,
        color: 'white',
    },
    icons:{
        flexDirection:'row',
    },
    icon:{
        marginHorizontal:5,
    }
})