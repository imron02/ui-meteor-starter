// @flow

import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

// SCREEENS
import ActivityIndicatorScreen from '../screens/ActivityIndicatorScreen';
import ButtonScreen from '../screens/ButtonScreen';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import LoginScreen from '../screens/LoginScreen/container';

// Component
import MtrStatusBar from '../components/StatusBar/container';

// Styles
import styles from './style';

import type { Props } from './props';

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

class Navigator extends Component<Props> {
  render() {
    const { bgColor } = this.props;

    return (
      <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
        <MtrStatusBar />
        <RootStack />
      </SafeAreaView>
    );
  }
}

export default Navigator;
