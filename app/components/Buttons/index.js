// @flow

import React from 'react';
import {
  Button,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import type { Props } from './props';
import styles from './styles';

export const MtrBtnRegular = (props: Props) => <Button {...props} />;

export const MtrBtnNative = (props: Props) => (
  <TouchableNativeFeedback onPress={props.onPress}>
    <View style={[styles.button, props.style]}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </View>
  </TouchableNativeFeedback>
);

export const MtrBtnHighlight = (props: Props) => (
  <TouchableHighlight onPress={props.onPress}>
    <View style={[styles.button, props.style]}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </View>
  </TouchableHighlight>
);

export const MtrBtnOpacity = (props: Props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, props.style]}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </View>
  </TouchableOpacity>
);

export const MtrBtnNoFeedback = (props: Props) => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={[styles.button, props.style]}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default MtrBtnRegular;
