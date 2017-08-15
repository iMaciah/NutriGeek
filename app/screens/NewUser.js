import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { NavigationActions } from 'react-navigation';

import Onboarding from 'react-native-simple-onboarding';

class NewUser extends Component {
  render() {
    const {goBack} = this.props.navigation;
    return (
      <Onboarding
        pages={[
          { backgroundColor: '#fff', title: 'Welcome', subtitle: 'Here we explain shit' },
          { backgroundColor: "#fe6e58", title: 'Create', subtitle: 'Account' },
          { backgroundColor: "#999", title: 'And', subtitle: 'Be awesome' },
          { backgroundColor: "#999", title: 'okras', subtitle: 'Be awesosadasdasdme' },
          { backgroundColor: "#999", title: 'Anasdasdd', subtitle: 'Be awessadasdad asd as asd sad ome' },
        ]}
        onLogin={() => alert('Now we go to login.')}
        onEnd={() => goBack(null)}
      />
    );
  }
}

/*

*/
export default NewUser;
