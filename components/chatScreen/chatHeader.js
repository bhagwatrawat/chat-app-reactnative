import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function ContactHeader({children}) {
   
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.info}>
          <Image
            style={styles.avatar}
            source={require('../../assets/gamelogo.png')}
          />
          <Text style={styles.headerTitle}>{children}</Text>
        </View>

        <View style={styles.icons}>
          <MaterialIcons
            style={styles.icon}
            name="videocam"
            size={30}
            color="white"
          />
          <MaterialIcons
            style={styles.icon}
            name="call"
            size={26}
            color="white"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    position: 'relative',
    left: -25,
  },
  container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  icons: {
    flexDirection: 'row',
    marginRight: 15,
  },
  icon: {
    marginHorizontal: 10,
  },
});
