import React from 'react';
import { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { Props } from './props';
import { State } from './state';
import { styles } from './styles';

export class HomeScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
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

