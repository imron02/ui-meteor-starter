// @flow

import React, { PureComponent } from 'react';
import { View } from 'react-native';

import type { Props } from './props';
import type { State } from './state';
import styles from './style';
import { MtrBtnRegular } from '../../components/Buttons';
import Popup from '../../components/Popup';

class PopupScreen extends PureComponent<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      showPopup: false
    };
  }

  onShow = () => this.setState({ showPopup: true });

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
        />
      </View>
    );
  }
}

export default PopupScreen;
