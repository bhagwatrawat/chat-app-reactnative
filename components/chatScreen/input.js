import {View, Text, TextInput, StyleSheet, Button, Pressable} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
export default function Input() {
  const [text, setText] = useState('');
    const sendMessage=()=>{
        console.warn("send clicked",text)
        setText("");
    }
    const onPlusClick=()=>{
        console.warn("plus clicked")
    }
    const onPress=()=>{
        if(text){
            sendMessage();
        }
        else{
            onPlusClick();
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.input}>
       
          <MaterialIcons
            name="sentiment-satisfied-alt"
            size={30}
            color="grey"
          />
          <TextInput
            style={styles.inputBar}
            value={text}
            onChangeText={newText => setText(newText)}
            placeholder="Message"
          />

        <View style={styles.icons}>
          <MaterialIcons
            style={styles.icon}
            name="photo-camera"
            size={30}
            color="grey"
          />
          <MaterialIcons
            style={styles.icon}
            name="mic"
            size={30}
            color="grey"
          />
        </View>
      </View>
      <Pressable onPress={onPress} style={styles.send}>
        <Text style={styles.sendText}>
            {text?  <MaterialIcons name="send" size={30} />:<MaterialIcons name="add" size={30} />}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DEE0E4',
    borderRadius: 40,
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  send: {
    marginRight: 10,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3777F0',
    width: 50,
  },
  sendText: {
    color: 'white',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBar:{
    flex: 1,
  },
  icon:{
    marginRight:5,
  }
});
