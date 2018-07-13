import React from 'react';
import { ActivityIndicator, View, Text, Modal } from 'react-native';

import { Props } from './props';
import styles from './styles';
import colors from '../../utils/colors';

export const MtrLoader = (props: Props) => (
  <ActivityIndicator
    color={props.color}
    size={props.size}
  />
);

export const MtrLoaderWithText = (props: Props) => (
  <View style={styles.loaderText}>
    <ActivityIndicator
      color={props.color}
      size={props.size}
    />
    <Text>{props.text}</Text>
  </View>
);

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
