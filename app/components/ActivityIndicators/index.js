// @flow

import React from 'react';
import { ActivityIndicator, Modal, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Props from './props';
import styles from './styles';
import colors from '../../utils/colors';

export const MtrLoader = (props: Props) => (
  <ActivityIndicator
    color={props.color}
    size={props.size}
  />
);

MtrLoader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

MtrLoader.defaultProps = {
  color: colors.GREY,
  size: 'small'
};

export const MtrLoaderWithText = (props: Props) => (
  <View style={styles.loaderText}>
    <ActivityIndicator
      color={props.color}
      size={props.size}
    />
    <Text>{props.text}</Text>
  </View>
);

MtrLoaderWithText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string
};

MtrLoaderWithText.defaultProps = {
  color: colors.GREY,
  size: 'small',
  text: 'Please wait..'
};

export const MtrLoaderFullScreen = (props: Props) => (
  <Modal
    animationType="fade"
    transparent={false}
    visible={props.visible}
    onRequestClose={props.onRequestClose}
  >
    <View style={styles.loaderFullScreen}>
      <ActivityIndicator
        color={props.color}
        size={props.size}
      />
      <Text>{props.text}</Text>
    </View>
  </Modal>
);

MtrLoaderFullScreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
};

MtrLoaderFullScreen.defaultProps = {
  color: colors.GREY,
  size: 'small',
  text: 'Please wait..'
};
