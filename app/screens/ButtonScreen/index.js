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
          onPress={this.onPress}
        />
        <MtrBtnOpacity
          title="BUTTON OPACITY"
          onPress={this.onPress}
        />
        <MtrBtnNoFeedback
          title="BUTTON NO FEEDBACK"
          onPress={this.onPress}
        />
      </View>
    );
  }
}
