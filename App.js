import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux'
import store from './src/store'
import SwitchNavigator from './src/navigation/switchNavigator'

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super() 
    // this.ref = firebase.firestore().collection('users');
  }

  componentDidMount() {
      // this.ref.add({
      //     name: "jordan",
      //     lastName: "cheung"
      // });
  }

  state = {
    isLoading: false
  }

  // {isLoading ? ( 
  //   <Text>Loading...</Text>
  // ) : (
  //   <SignInScreen />
  // )}
  render() {
    const { isLoading } = this.state
    return (
      <Provider store={store}>
        <SwitchNavigator/>
      </Provider>  
    );
  }
}
