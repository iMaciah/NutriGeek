import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';

class Dashboard extends Component {

  render() {

    setTimeout(() => {this.props.navigation.navigate('NewUser')}, 1000)
    return (
      <ScrollView>
        <Text>Dashboard goes here</Text>
      </ScrollView>
    );
  }
}

export default Dashboard;
