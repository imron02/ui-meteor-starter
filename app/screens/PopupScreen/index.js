// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import type { Props } from './props';
import type { State } from './state';
import { MtrBtnOpacity } from '../../components/Buttons';
import Popup from '../../components/Popup';
import meteorLogoWhite from '../../assets/images/meteor_logo_white.png';

class PupupScreen extends Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  show = () => this.setState({ visible: true });

  close = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <View style={styles.container}>
        <MtrBtnOpacity
          title="Show Popup"
          style={styles.button}
          titleStyle={styles.buttonText}
          onPress={this.show}
        />

        <Popup
          visible={visible}
          headerImage={meteorLogoWhite}
          headerTitle="Meteor Popup"
          onPress={this.close}
        >
          <Text style={styles.bodyText}>Popup Window React Native</Text>
        </Popup>
      </View>
    );
  }
}

export default PupupScreen;
