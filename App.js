import React from 'react';
import { StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import * as Consts from './Consts';
import Main from './components/Main';
import Chat from './components/Chat';
import HomeScreen from './components/HomeScreen';
import HelpForm from './components/HelpForm';
import ServerList from './components/ServerList';

// Create the navigator
const navigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen},
  HelpForm: { screen: HelpForm},
  Chat: { screen: Chat },
  ServerList: {screen: ServerList},
  Main: { screen: Main },
});

const App = createAppContainer(navigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
