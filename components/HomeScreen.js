

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

class HomeScreen extends Component {
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
    return (
      <>
        <SafeAreaView style={styles.container}>


            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>You are Offline</Text>
                <Text style={styles.sectionDescription}>
                  Tap here to go online.
                </Text>
              </View>
              <View style={styles.cards}>
              <Card style={styles.cardContainer}>
              <CardItem button onPress={() => navigate('HelpForm')}>
              <View style={styles.circle} />
              </CardItem>
              <CardItem footer bordered style={styles.labelContainer} button onPress={() => navigate('HelpForm')}>
                <Text style={styles.buttonText}>Get Help</Text>
              </CardItem>
              </Card>
              <Card style={styles.cardContainerLower}>
              <CardItem button onPress={() => navigate('ServerList')}>
              <View style={styles.circle} />
              </CardItem>
              <CardItem footer bordered style={styles.labelContainer} button onPress={() => navigate('ServerList')} first>
                <Text style={styles.buttonText}>Find Chatrooms Nearby</Text>
              </CardItem>
              </Card>
              </View>









            </View>

        </SafeAreaView>
      </>
    );
}
};

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.black,
    fontFamily: Platform.OS === 'android'
      ? 'normal'
      : 'Helvetica Neue',
    fontSize: 24,
    fontWeight: '600',
    //position: 'relative',
    flex: 1,
    textAlign: 'center',
  },
  cardContainer: {
    flex: 1,

    //left: '5%',
    // flexDirection: 'column',
    // width: '100%',
    width: 325,
    //height: 287,
    //width: 'auto',
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
    // flexDirection: 'column',
    width: 325,
    //height: 287,
    //width: 'auto',
    shadowColor: 'rgba(50, 50, 71, 0.08)',
    shadowOffset: { width: 24, height: 0 },
    shadowRadius: 32,
    shadowColor: 'rgba(50, 50, 71, 0.08)',
    shadowOffset: { width: 16, height: 0 },
    shadowRadius: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  cards: {
    flex: 12,
    top: '-5%',
    // height: '90%',
    //height: 287,
    justifyContent: 'center',
  },

  container: {
    backgroundColor: '#f2f2f2',
    //backgroundColor: Colors.black,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
      fontFamily: Platform.OS === 'android'
        ? 'normal'
        : 'Helvetica Neue',
      fontSize: 36,
      fontWeight: '300',
      //lineHeight: 22,
    },
  engine: {
    position: 'absolute',
    right: 0,
  },
  labelContainer: {
    // flex: 1,
    textAlign: 'center',
    bottom: -20,
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
      //textAlign: 'center',
      top: 20,
      left: 80,
      width: 140,
      height: 140,
      borderRadius: 70,
      backgroundColor: '#e75025',
  },
  warningIcon: {
      color: Colors.white,
  },
});

export default HomeScreen;
