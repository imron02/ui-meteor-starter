import React from 'react';
import { ActivityIndicator, View, Text, Modal } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../../utils/colors';

export const MtrLoader = props => (
  <ActivityIndicator
    color={props.color}
    size={props.size}
  />
);

MtrLoader.defaultProps = {
  color: colors.GREY,
  size: 'large',
};

MtrLoader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export const MtrLoaderWithText = props => (
  <View style={styles.loaderText}>
    <ActivityIndicator
      color={props.color}
      size={props.size}
    />
    <Text>{props.text}</Text>
  </View>
);

MtrLoaderWithText.defaultProps = {
  color: colors.GREY,
  size: 'large',
  text: 'Please wait..',
};

MtrLoaderWithText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
};

export const MtrLoaderFullScreen = props => (
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

MtrLoaderFullScreen.defaultProps = {
  color: colors.GREY,
  size: 'large',
  text: 'Please wait..',
  visible: false,
};

MtrLoaderFullScreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  visible: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
};

export default MtrLoader;
