// @flow

import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

// SCREEENS
import ActivityIndicatorScreen from '../screens/ActivityIndicatorScreen';
import ButtonScreen from '../screens/ButtonScreen';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import LoginScreen from '../screens/LoginScreen/container';
import RegisterScreen from '../screens/RegisterScreen/container';

// Component
import MtrStatusBar from '../components/StatusBar/container';

// Styles
import styles from './style';
import colors from '../utils/colors';

import type { Props } from './props';

const DrawerStack = createDrawerNavigator({
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
  List: {
    screen: ListScreen,
    navigationOptions: () => ({
      title: 'List'
    })
  },
  Login: {
    screen: LoginScreen
  }
});

const headerCustom = {
  headerStyle: styles.header,
  headerTitleStyle: styles.headerText,
  headerTintColor: colors.WHITE,
  headerForceInset: { top: 'never' }
};

const AppNavigator = createStackNavigator(
  {
    Drawer: {
      screen: DrawerStack,
      navigationOptions: {
        ...headerCustom,
        header: null
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: headerCustom
    }
  },
  {
    initialRouteName: 'Drawer'
  }
);

class Navigator extends Component<Props> {
  render() {
    const { bgColor } = this.props;

    return (
      <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
        <MtrStatusBar />
        <AppNavigator />
      </SafeAreaView>
    );
  }
}

export default Navigator;
