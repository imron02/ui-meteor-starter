import { createDrawerNavigator } from 'react-navigation';

// SCREEENS
import { HomeScreen } from './app/screens/HomeScreen';
import { ButtonScreen } from './app/screens/ButtonScreen';
import ActivityIndicatorScreen from './app/screens/ActivityIndicatorScreen';
import ListScreen from './app/screens/ListScreen';

export default createDrawerNavigator({
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
