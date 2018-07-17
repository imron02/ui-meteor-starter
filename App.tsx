import React from 'react';
import { SafeAreaView } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import styles from './style';

// SCREEENS
import { HomeScreen } from './app/screens/HomeScreen';
import { ButtonScreen } from './app/screens/ButtonScreen';
import ActivityIndicatorScreen from './app/screens/ActivityIndicatorScreen';
import ListScreen from './app/screens/ListScreen';

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
  }
});

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <RootStack />
      </SafeAreaView>
    )
  }
}
