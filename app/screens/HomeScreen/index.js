import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

// STYLES
import styles from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>React Native</Text>
        <Text>Meteor Starter</Text>
        <View style={styles.button}>
          <Button title="Open Drawer" onPress={this.openDrawer} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;

