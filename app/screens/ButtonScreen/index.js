// @flow

import React, { Component } from 'react';
import { View } from 'react-native';

// STYLESHEET
import styles from './styles';

// COMPONENT
import {
  MtrBtnHighlight,
  MtrBtnNative,
  MtrBtnNoFeedback,
  MtrBtnOpacity,
  MtrBtnRegular
} from '../../components/Buttons';
import { isAndroid } from '../../utils/commons';

type Props = {};
export default class ButtonScreen extends Component<Props> {
  onPress = (): void => { };

  render() {
    return (
      <View style={styles.container}>
        <MtrBtnRegular
          title="BUTTON REGULAR"
          onPress={this.onPress}
        />
        {isAndroid() ?
          <MtrBtnNative
            title="BUTTON NATIVE"
            onPress={this.onPress}
          /> : <View />}
        <MtrBtnHighlight
          title="BUTTON HIGHLIGHT"
          color="primary"
          onPress={this.onPress}
        />
        <MtrBtnOpacity
          title="BUTTON OPACITY"
          color="success"
          onPress={this.onPress}
        />
        <MtrBtnNoFeedback
          title="BUTTON NO FEEDBACK"
          color="danger"
          onPress={this.onPress}
        />
      </View>
    );
  }
}
