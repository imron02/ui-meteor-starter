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
import colors from '../../utils/colors';

export const MtrBtnRegular = (props: Props) => <Button {...props} />;

const component = (props: Props) => {
  const color = props.color ? colors.button[props.color] : null;
  const style = [props.style, color];

  return (
    <View style={style}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </View>
  );
};

export const MtrBtnNative = (props: Props) => (
  <TouchableNativeFeedback onPress={props.onPress}>
    {component(props)}
  </TouchableNativeFeedback>
);

export const MtrBtnHighlight = (props: Props) => (
  <TouchableHighlight onPress={props.onPress}>
    {component(props)}
  </TouchableHighlight>
);

export const MtrBtnOpacity = (props: Props) => (
  <TouchableOpacity onPress={props.onPress}>
    {component(props)}
  </TouchableOpacity>
);

export const MtrBtnNoFeedback = (props: Props) => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    {component(props)}
  </TouchableWithoutFeedback>
);

export default MtrBtnRegular;
