import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import styles from './style';

// SCREEENS
import ActivityIndicatorScreen from './app/screens/ActivityIndicatorScreen';
import { ButtonScreen } from './app/screens/ButtonScreen';
import { HomeScreen } from './app/screens/HomeScreen';
import ListScreen from './app/screens/ListScreen';
import LoginScreen from './app/screens/LoginScreen';

const RootStack = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Buttons: {
    screen: ButtonScreen
  },
  ActivityIndicator: {
    screen: ActivityIndicatorScreen,
    navigationOptions: () => ({
      title: 'Activity Indicator'
    })
  },
  ListScreen: {
    screen: ListScreen,
    navigationOptions: () => ({
      title: 'List'
    })
  },
  LoginScreen: {
    screen: LoginScreen
  }
});
export default class App extends React.Component {
  statusbar = () => {
    return <StatusBar barStyle="dark-content" />;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.statusbar()}
        <RootStack />
      </SafeAreaView>
    );
  }
}
