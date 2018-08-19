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
      onPress
    } = this.props;

    return (
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={onPress}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            {this.renderBanner()}
            <View style={[styles.body, bodyStyle]}>
              {children}
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.button} onPress={onPress}>
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
