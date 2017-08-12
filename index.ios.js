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

/*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  NavigatorIOS,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
  },
  button: {
    marginTop: 20,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});

class ColoredView extends Component {
  componentWillMount() {
    Icon.getImageSource('md-arrow-back', 30).then((source) => this.setState({ backIcon: source }));
  }

  _navigateToSubview() {
    this.props.navigator.push({
      component: ColoredView,
      title: this.props.pageText,
      //leftButtonIcon: this.state.backIcon,
      onLeftButtonPress: () => this.props.navigator.pop(),
      passProps: this.props,
    });
  }

  render() {
    return (
      <View style={[styles.tabContent, {backgroundColor: this.props.color}]}>
        <Text style={styles.tabText}>{this.props.pageText}</Text>
        <TouchableOpacity onPress={() => this._navigateToSubview()}>
          <View style={styles.button}><Text style={styles.buttonText}>Tap Me</Text></View>
        </TouchableOpacity>
      </View>
    );
  }
}

class NutriGeek extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'home',
    };
  }

  componentWillMount() {
    // https://github.com/facebook/react-native/issues/1403 prevents this to work for initial load
    Icon.getImageSource('ios-settings', 30).then((source) => this.setState({ gearIcon: source }));
  }

  _renderContent(color, pageText) {
    if (!this.state.gearIcon) {
      return false;
    }
    const props = { color, pageText };
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{
          component: ColoredView,
          passProps: props,
          title: pageText,
          rightButtonIcon: this.state.gearIcon,
        }}
      />
    );
  }

  render() {
    return (
      <TabBarIOS
        tintColor="black"
        barTintColor="#3abeff">
        <Icon.TabBarItemIOS
          title="Home"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          {this._renderContent('#414A8C', 'Home')}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Profile"
          iconName="ios-person-outline"
          selectedIconName="ios-person"
          selected={this.state.selectedTab === 'profile'}
          onPress={() => {
            this.setState({
              selectedTab: 'profile',
            });
          }}>
          {this._renderContent('#090', 'Profile')}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Starred"
          iconName="ios-star-outline"
          selectedIconName="ios-star"
          selected={this.state.selectedTab === 'starred'}
          onPress={() => {
            this.setState({
              selectedTab: 'starred',
            });
          }}>
          {this._renderContent('#900', 'Starred')}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Settings"
          iconName="ios-settings-outline"
          selectedIconName="ios-settings"
          iconColor="#ffffff"
          selectedIconColor="#000099"
          selected={this.state.selectedTab === 'settings'}
          renderAsOriginal={true}
          onPress={() => {
            this.setState({
              selectedTab: 'settings',
            });
          }}>
          {this._renderContent('#009', 'Settings')}
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('NutriGeek', () => NutriGeek);
*/