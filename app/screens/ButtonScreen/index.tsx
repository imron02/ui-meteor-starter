import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';

// STYLESHEET
import styles from './styles';

// COMPONENT
import {
  MtrBtnRegular,
  MtrBtnNative,
  MtrBtnHighlight,
  MtrBtnOpacity,
  MtrBtnNoFeedback,
} from '../../components/buttons';

export class ButtonScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MtrBtnRegular
          title="BUTTON REGULAR"
          onPress={() => {}}
        />
        <MtrBtnNative
          title="BUTTON NATIVE"
          onPress={() => {}}
        />
        <MtrBtnHighlight
          title="BUTTON HIGHLIGHT"
          onPress={() => {}}
        />
        <MtrBtnOpacity
          title="BUTTON OPACITY"
          onPress={() => {}}
        />
        <MtrBtnNoFeedback
          title="BUTTON NO FEEDBACK"
          onPress={() => {}}
        />
      </View>
    );
  }
}
