import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import io from "socket.io-client";
import WifiManager from 'react-native-wifi';
import Chat from './Chat';
import HomeScreen from './HomeScreen';
import * as Consts from '../Consts';

import ServerHandler from '../ServerHandler';

var handle = new ServerHandler(Consts.DEFAULT_SERVER_URL);

class Main extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="Go to chat" onPress={() => navigate('Chat')} />

        <Button title="Start App!!!!!!" onPress={() => navigate('HomeScreen')} />

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

function handlerfunc(msg) {
  console.warn(msg,'recieved from the server');
}

function makeSocket() {
  // if (!this.socket) {
  //   this.socket = io('http://192.168.4.1:3000');

  //   this.socket.on(Consts.SOCKET_REC_ALL_MSGS, msg => {
  //     console.log(msg);
  //   });
  // }

  // // this.socket.emit('connection');

  // ********* old code above


  // CURRENT CODE BELOW:

  // handle.socket.emit('messagedetection', 'hello, world', 'whatever');
  handle.socket.emit(Consts.SOCKET_FIRST_CONNECTION, 'hello, world', 'whatever');

  // handle.socket.on(Consts.SOCKET_REC_ALL_MSGS, (msg) => console.log(msg));
  handle.on(Consts.SOCKET_REC_ALL_MSGS, handlerfunc);

  // handle.init(Consts.DEFAULT_SERVER_URL);
  // handle.on(Consts.SOCKET_FIRST_CONNECTION, handlerfunc);




  // TODO: don't look at this
  // this.socket.on(SOCKET_REC_ALL_MSGS, msg => {
  //   console.log(msg);

  //   console.log(this);

  //   this.setState({
  //     chatMessages: [...this.state.chatMessages, msg]
  //   });
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
