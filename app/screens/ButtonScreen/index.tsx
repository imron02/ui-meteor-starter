import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';

// STYLESHEET
import styles from './styles';

// COMPONENT
import {
  MtrBtnHighlight,
  MtrBtnNative,
  MtrBtnNoFeedback,
  MtrBtnOpacity,
  MtrBtnRegular,
} from '../../components/Buttons';

export class ButtonScreen extends Component {
  onPress = () => { };

  render () {
    return (
      <View style={styles.container}>
        <MtrBtnRegular
          title="BUTTON REGULAR"
          onPress={this.onPress}
        />
        <MtrBtnNative
          title="BUTTON NATIVE"
          onPress={this.onPress}
        />
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
