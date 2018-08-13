// @flow

import React from 'react';
import { Modal, View } from 'react-native';

import type { Props } from './props';
// import styles from './style';

const Popup = (props: Props) => (
  <Modal
    animationType={props.animationType}
    transparent
    visible={props.visible}
  >
    <View />
  </Modal>
);

Popup.defaultProps = {
  animationType: 'fade'
};

export default Popup;
