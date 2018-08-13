// @flow

import React, { PureComponent } from 'react';
import { View } from 'react-native';

import type { Props } from './props';
import type { State } from './state';
import styles from './style';
import { MtrBtnRegular } from '../../components/Buttons';
import Popup from '../../components/Popup';

import meteorLogoRed from '../../assets/images/meteor_logo_red.png';

class PopupScreen extends PureComponent<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      showPopup: false
    };
  }

  onShow = () => this.setState({ showPopup: true });

  onClose = () => this.setState({ showPopup: false });

  render() {
    const { showPopup } = this.state;

    return (
      <View style={styles.container}>
        <MtrBtnRegular
          title="Show popup"
          onPress={this.onShow}
        />
        <Popup
          visible={showPopup}
          headerImage={meteorLogoRed}
          headerTitle="Popup"
          onClose={this.onClose}
        />
      </View>
    );
  }
}

export default PopupScreen;
