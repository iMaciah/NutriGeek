import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';

class Challenges extends Component {

  render() {
    return (
      <ScrollView>
        <Text>Challenges go here</Text>
      </ScrollView>
    );
  }
}

export default Challenges;
