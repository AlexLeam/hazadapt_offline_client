import React, {
  Component,
  } from 'react';
import {
  Platform,
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  ListItem,
  Button,
} from 'react-native-elements'

//import Icon from 'react-native-vector-icons/AntDesign'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  CardItem,
  Card,
} from 'native-base'

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { RadioButton } from 'react-native-paper';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);



const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;





export default class HelpForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    checked: 'first',
    };
    //this.handleChange = this.handleChange.bind(this);
  }
  render(){
    const { checked } = this.state;
    return (
      <View>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'first' }); }}
        />
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'second' }); }}
        />
      </View>
    );
  }

}

function HelpFormScreen({ navigation }){

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.body}>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
    fontSize: 24,
    fontWeight: '600',
    //position: 'relative',
    flex: 1,
    textAlign: 'center',
  },
  cardContainer: {
    flex: 1,
    bottom: -60,
    left: 45,
    width: 325,
    height: 287,
    shadowColor: 'rgba(50, 50, 71, 0.08)',
    shadowOffset: { width: 24, height: 0 },
    shadowRadius: 32,
    shadowColor: 'rgba(50, 50, 71, 0.08)',
    shadowOffset: { width: 16, height: 0 },
    shadowRadius: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  cardContainerLower: {
    flex: 1,
    bottom: -100,
    left: 45,
    width: 325,
    height: 287,
    shadowColor: 'rgba(50, 50, 71, 0.08)',
    shadowOffset: { width: 24, height: 0 },
    shadowRadius: 32,
    shadowColor: 'rgba(50, 50, 71, 0.08)',
    shadowOffset: { width: 16, height: 0 },
    shadowRadius: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },

  container: {
    backgroundColor: '#f2f2f2',
    //backgroundColor: Colors.black,
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#e75025',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
  scrollView: {
    height: 'auto',
    backgroundColor: Colors.lighter,
  },
  // Style for "Background"
    background: {
      width: 'auto',
      //alignSelf: 'flex-start',
      height: 44,
      backgroundColor: '#e75025',
      justifyContent: 'space-around',
    },
    // Style for "Title of Homepage: HazAdapt"
    title: {
      position: 'relative',
      width: 155,
      height: 88,

      color: '#f2f2f2',
      fontFamily: 'Helvetica Neue',
      fontSize: 36,
      fontWeight: '300',
      //lineHeight: 22,
    },
  engine: {
    position: 'absolute',
    right: 0,
  },
  labelContainer: {
    textAlign: 'center',
    top: 40,
  },
  body: {
    backgroundColor: '#f2f2f2',
  },
  sectionContainer: {
    //padding: 15,
    //left: 28,
    top: 18,

    width: 'auto',
    height: 28,
    color: '#151522',
    fontFamily: 'Helvetica Neue',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  sectionDescription: {
    textAlign: 'center',
    width: 'auto',
    height: 36,
    color: '#151522',
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '300',
    letterSpacing: 0.5,
    lineHeight: 22,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  circle: {
      top: 20,
      left: 65,
      width: 160,
      height: 160,
      borderRadius: 80,
      backgroundColor: '#e75025',
  },
  warningIcon: {
      color: Colors.white,
  },
});
