import React from 'react';
import { TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Dashboard from '../screens/Dashboard';
import Challenges from '../screens/Challenges';
import MyDiet from '../screens/MyDiet';
import Portions from '../screens/Portions';
import NewUser from '../screens/NewUser';

// No need to have these ones, delete them.
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';

export const NewUserStack = StackNavigator({
  NewUser: {
    screen: NewUser,
    navigationOptions: {
      gesturesEnabled: false
    },
  },
},{
  headerMode: 'none',
});

export const DashboardStack = StackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});

export const ChallengesStack = StackNavigator({
  Challenges: {
    screen: Challenges,
    navigationOptions: {
      title: 'Challenges',
    },
  },
});

export const DietStack = StackNavigator({
  MyDiet: {
    screen: MyDiet,
    navigationOptions: {
      title: 'My Diet',
    },
  },
});

export const PortionsStack = StackNavigator({
  Portions: {
    screen: Portions,
    navigationOptions: {
      title: 'Portions',
    },
  },
});

export const Tabs = TabNavigator({
  Dashboard: {
    screen: DashboardStack,
    navigationOptions: {
      tabBarLabel: 'Dashboard',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,
    },
  },
  Challenges: {
    screen: ChallengesStack,
    navigationOptions: {
      tabBarLabel: 'Challenges',
      tabBarIcon: ({ tintColor }) => <Icon name="star" size={25} color={tintColor} />
    },
  },
  Diet: {
    screen: DietStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="free-breakfast" size={25} color={tintColor} />
    },
  },
  Portions: {
    screen: PortionsStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="local-pizza" size={25} color={tintColor} />
    },
  }
}, {
  tabBarOptions: {
    activeTintColor: '#FFFFFF',
    inactiveTintColor: '#1976D2',
    showLabel: false,
    style: {
      backgroundColor: '#1E88E5',
    },
  },
  //animationEnabled: true,
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  NewUser: {
    screen: NewUserStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
