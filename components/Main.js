import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import io from "socket.io-client";
import WifiManager from 'react-native-wifi';

class Main extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="Go to chat" onPress={() => navigate('Chat')} />

        <TouchableOpacity style={styles.paddedTap} onPress={() => getMoviesFromApiAsync()}>
          <Text> Tap here to initiate http request!! </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paddedTap} onPress={() => makeSocket()}>
          <Text> Make a socket! </Text>
        </TouchableOpacity>

      </View>

    );
  }
}

function getMoviesFromApiAsync() {
  // WifiManager.getCurrentWifiSSID()
  // .then((ssid) => {
  //   console.log("Your current connected wifi SSID is " + ssid)
  // }, () => {
  //   console.log('Cannot get current SSID!')
  // });

  console.log('attepmting');

  // return fetch('https://facebook.github.io/react-native/movies.json')
  // return fetch('http://192.168.0.113:64200/hello')
  return fetch('http://192.168.4.1:3000/')
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      ToastAndroid.show('success', ToastAndroid.SHORT);
      return response.msg;
    })
    .catch((error) => {
      Alert.alert(
        'Error',
        'Unable to connect to server',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: true},
      );
      console.warn(error);
    });
}


function makeSocket() {
  if (!this.socket) this.socket = io('http://192.168.4.1:3000');

  // this.socket.emit('connection');
  this.socket.emit('messagedetection', 'Idk im just fuckin tossing bikes in the river bro');

  // this.socket.on('chat message', msg => {
  //   console.log(msg);
  //   // this.setState({
  //   //   chatMessages: [...this.state.chatMessages, msg]
  //   // });
  // });
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddedTap: {
    backgroundColor: '#ddd',
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    margin: 20,
    padding: 7,
  }
});

export default Main;
