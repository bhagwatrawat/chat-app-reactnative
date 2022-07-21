import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';

export default function SingleContact({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Image
          style={styles.avatar}
          source={require('../../assets/gamelogo.png')}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>1</Text>
        </View>
        <Pressable onPress={()=>navigation.navigate('chatScreen')} style={styles.allInfo}>
          <View style={styles.info}>
            <Text style={styles.name}>Game</Text>
            <Text style={styles.time}>11:11 AM</Text>
          </View>

          <Text style={styles.description} numberOfLines={1}>
            this is the last msg
          </Text>
        </Pressable>
      </View>
      {/* <View style={styles.horizontal} /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal:15, 
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 1,
  },
  badge: {
    position: 'absolute',
    backgroundColor: '#3777F0',
    borderRadius: 11,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    top: 15,
    left: 48,
    borderWidth: 1,
    borderColor: 'white',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  allInfo: {
    flex: 1,
    marginLeft: 10,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: 'grey',
    fontSize: 15,
  },
  time: {
    color: 'grey',
  },
  horizontal: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgrey',
  },
});
