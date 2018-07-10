import React from 'react';
import {
  Button,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export const MtrBtnRegular = props => (
  <Button {...props} />
);

export const MtrBtnNative = props => (
  <TouchableNativeFeedback onPress={props.onPress}>
    <View style={[styles.button, props.style]}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </View>
  </TouchableNativeFeedback>
);

MtrBtnNative.defaultProps = {
  titleStyle: 0,
  style: 0,
};

MtrBtnNative.propTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.number,
  style: PropTypes.number,
  onPress: PropTypes.func.isRequired,
};

export const MtrBtnHighlight = props => (
  <TouchableHighlight onPress={props.onPress}>
    <View style={[styles.button, props.style]}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </View>
  </TouchableHighlight>
);

MtrBtnHighlight.defaultProps = {
  titleStyle: 0,
  style: 0,
};

MtrBtnHighlight.propTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.number,
  style: PropTypes.number,
  onPress: PropTypes.func.isRequired,
};

export const MtrBtnOpacity = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, props.style]}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </View>
  </TouchableOpacity>
);

MtrBtnOpacity.defaultProps = {
  titleStyle: 0,
  style: 0,
};

MtrBtnOpacity.propTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.number,
  style: PropTypes.number,
  onPress: PropTypes.func.isRequired,
};

export const MtrBtnNoFeedback = props => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={[styles.button, props.style]}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </View>
  </TouchableWithoutFeedback>
);

MtrBtnNoFeedback.defaultProps = {
  titleStyle: 0,
  style: 0,
};

MtrBtnNoFeedback.propTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.number,
  style: PropTypes.number,
  onPress: PropTypes.func.isRequired,
};

export default MtrBtnRegular;
