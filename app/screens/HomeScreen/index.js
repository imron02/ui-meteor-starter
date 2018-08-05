// @flow

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import type { Props } from './props';
import styles from './styles';

export default class HomeScreen extends Component<Props> {
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

