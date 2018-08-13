// @flow

import React from 'react';
import { Modal, View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../utils/colors';

import type { Props } from './props';
import styles from './style';
import { MtrBtnHighlight } from '../Buttons';

const banner = (imgSrc, text, headerColor) => (
  <LinearGradient
    colors={headerColor}
    style={styles.header}
  >
    {imgSrc ? <Image source={imgSrc} style={styles.headerImage} /> : <View />}
    <Text style={styles.headerText}>{text}</Text>
  </LinearGradient>
);

const Popup = (props: Props) => (
  <Modal
    animationType={props.animationType}
    transparent
    visible={props.visible}
  >
    <View style={styles.container}>
      <View style={styles.content}>
        {banner(props.headerImage, props.headerTitle, props.headerColor)}
        <View style={[styles.body, props.bodyStyle]} />
        <View style={styles.footer}>
          <MtrBtnHighlight
            title="OK"
            style={styles.button}
            titleStyle={styles.buttonText}
            onPress={props.onClose}
          />
        </View>
      </View>
    </View>
  </Modal>
);

Popup.defaultProps = {
  animationType: 'fade',
  headerColor: [colors.SILVER_CHALICE, colors.GRAY]
};

export default Popup;
