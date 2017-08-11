/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Onboarding from 'react-native-simple-onboarding';

const App = () => {
  return (
	<View>  
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
    </View>
  );
}

export default class NutriGeek extends Component {
  render() {
    return (
		<Onboarding
		  pages={[
		    { backgroundColor: '#fff', image:<App/>, title: 'Simple Messenger UI', subtitle: 'Implemented in React Native' },
		    { backgroundColor: "#fe6e58", image:<App/>, title: 'Welcome', subtitle: 'To Earth' },
		    { backgroundColor: "#999", image:<App/>, title: 'Also', subtitle: 'Mars is nice' },
		    { backgroundColor: "#999", image:<App/>, title: 'I am just a cat', subtitle: 'and i am doing cat stuff' },
		  ]}
		  onEnd={alert('ola')}
		/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NutriGeek', () => NutriGeek);
