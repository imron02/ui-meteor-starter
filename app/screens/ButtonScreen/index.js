import React, { Component } from 'react';
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

class ButtonScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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

export default ButtonScreen;
