import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import io from "socket.io-client";

import ServerHandler from '../ServerHandler';
import * as Consts from '../Consts';

// FIXME: temporary server re-emit fix because we don't have rpi
var lastMessage = '';

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'HazAdapt',
          headerStyle: {
            backgroundColor: '#e75025',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: Platform.OS === 'android'
              ? 'normal'
              : 'Helvetica Neue',
            fontSize: 28,
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
  });

  // This is a custom socket wrapper that simplifies using sockets and keeps only
  // the important stuff here:
  serverSocket = new ServerHandler(Consts.DEFAULT_SERVER_URL);

  state = {
    messages: [],
  };

  componentDidMount() {
    // serverSocket needs the type of message it is going to be watching for,
    //  the message handler function, and the current context
    this.serverSocket.on(Consts.SOCKET_REC_SINGLE_MSG, this.onRec, this);


    // FIXME: once server is back to being a raspberri pi and we can use a timestamp system:
    // Add logic where messages are stored client side as they're recieved so
    // they don't clear out (and the server doesn't have to send so many things)
    // This will involve some timestamp wizardry with the server and with this app
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Default message",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            // avatar: "https://placeimg.com/140/140/any",
          },
        },
      ],
    });
  }

  // NOTE: these messages that are being sent should be an array of one object,
  //  we've never seen it be more than that but I belive it is possible with a big enough message
  onSend(messages = []) {
    // Add formatting specific to Hazadapt:
    messages.forEach(msgObj => {
      // FIXME: Due to post-COVID server limitations, the Tag system is unusable
      //        Just use a dummy variable for now, change to real type once using rpi server again
      msgObj.type = 'currently_selected_type';
    });

    // FIXME: temporary server re-emit fix because we don't have rpi
    lastMessage = messages[0].text;

    // console.log('Now we are sending these objects:', messages);

    // Set state so GiftedChat has everything:
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));

    // FIXME: this will make sure the socket is connected (occasionally had bugs where it would timeout)
    if (this.serverSocket.socket.connected == false) {
      this.serverSocket.init();
      this.serverSocket.on(Consts.SOCKET_REC_SINGLE_MSG, this.onRec, this);
    }
    this.serverSocket.send(messages)
  }

  onRec(messages = [], chatCtx = this) {

    // FIXME: Due to post-COVID server limitations, the ID system is unusable
    //        Just use a random number for the ID instead
    messages.forEach(msgObj => {
      msgObj._id = Math.random(10000);
    });

    // Add new messages to UI:
    // FIXME: this if statement is the other part of the repeated message fix
    // if (messages[0].text != lastMessage) {
      chatCtx.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }));
    // }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
            name: 'username1'
          }}
        />
        {/* NOTE: this line that used to be required suddenly broke everything on the android test phone: */}
        {/* {Platform.OS === 'android' ? <KeyboardSpacer /> : null } */}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Chat;
