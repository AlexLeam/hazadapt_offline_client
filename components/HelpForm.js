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
  CheckBox
} from 'react-native-elements';

import { TextInput } from 'react-native-paper';

//import Icon from 'react-native-vector-icons/AntDesign'
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

import {
  CardItem,
  Card,
} from 'native-base'

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

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





class HelpForm extends Component{
  constructor(props){
    super(props);
    this.state = {
    checked: false,
    text: '',
    };
    //this.handleChange = this.handleChange.bind(this);
  }

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
  render(){
    const {navigate} = this.props.navigation;
    const { checked,checked2,checked3 } = this.state;

    return (
      <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>What is your status?</Text>
        <Text style={styles.sectionDescription}>
          Select all that apply.
        </Text>
        <CheckBox
          title='I am safe.'
          checked={this.state.checked}
          checked2={this.state.checked2}
          checked3={this.state.checked3}

          onPress={() => { this.setState({ checked: !checked }); }}
          checkedIcon='check-square'
          checkedColor='#e75025'
          uncheckedIcon='square'
          uncheckedColor='#f2f2f2'
        />
        <CheckBox
        title='I am hurt.'
        checked={this.state.checked2}
        onPress={() => { this.setState({ checked2: !checked2 }); }}
        checkedIcon='check-square'
        checkedColor='#e75025'
        uncheckedIcon='square'
        uncheckedColor='#f2f2f2'
        />
        <CheckBox
        title='I am trapped.'
        checked={this.state.checked3}
        onPress={() => { this.setState({ checked3: !checked3 }); }}
        checkedIcon='check-square'
        checkedColor='#e75025'
        uncheckedIcon='square'
        uncheckedColor='#f2f2f2'
        />
        <Text style={styles.sectionDetails}>
          Do you have any more details?
        </Text>
      <TextInput style={styles.textBox}
        mode='outlined'
        underlineColor='#e75025'
        selectionColor='#000000'
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />
      <Button
      title="SUBMIT"
      containerStyle={styles.buttonStyle}
      onPress={() => navigate('Chat')}
      />
      </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  buttonStyle:{
    flex: 7,
    bottom: 120,

    left: 70,
    paddingHorizontal: 100,
    //backgroundColor: '#e75025',
  },
  sectionDetails:{
    flex: 1,
    top: 30,
    textAlign: 'center',
    width: 'auto',
    height: 36,
    color: '#151522',
    fontFamily: Platform.OS === 'android'
      ? 'normal'
      : 'Helvetica Neue',
    fontSize: 16,
    fontWeight: '300',
    letterSpacing: 0.5,
    lineHeight: 22,
  },
  textBox:{
    flex: 13,
    top: 35,
    height: 95,
    paddingHorizontal: 20,
  },
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
  checkOptions: {
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
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  sectionContainer: {
    flex: 3,
    //padding: 15,
    //left: 28,
    top: 18,

    width: 'auto',
    height: 28,
    color: '#151522',
    fontFamily: Platform.OS === 'android'
      ? 'normal'
      : 'Helvetica Neue',
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
    fontFamily: Platform.OS === 'android'
      ? 'normal'
      : 'Helvetica Neue',
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

export default HelpForm;
