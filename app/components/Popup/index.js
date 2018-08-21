// @flow

import React, { PureComponent } from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import type { Props } from './props';
import styles from './styles';

class Popup extends PureComponent<Props> {
  static defaultProps = {
    animationType: 'fade'
  }

  renderBanner = () => {
    const {
      headerTitle,
      headerStyle,
      headerTitleStyle,
      headerImage
    } = this.props;

    return (
      <View style={[styles.header, headerStyle]}>
        {headerImage ? <Image source={headerImage} style={styles.headerImage} /> : <View />}
        <Text style={[styles.headerText, headerTitleStyle]}>{headerTitle}</Text>
      </View>
    );
  }

  render() {
    const {
      visible,
      children,
      bodyStyle,
      onClose,
      animationType
    } = this.props;

    return (
      <Modal
        animationType={animationType}
        transparent
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            {this.renderBanner()}
            <View style={[styles.body, bodyStyle]}>
              {children}
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.button} onPress={onClose}>
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default Popup;
