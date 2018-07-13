import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { State } from './state';
import { Props } from './props';
import { Size } from '../../components/activityIndicators/props';
import styles from './styles';
import colors from '../../utils/colors';
import { MtrLoader, MtrLoaderWithText, MtrLoaderFullScreen } from '../../components/activityIndicators';
import { MtrBtnRegular } from '../../components/buttons';

class ActivityIndicatorScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      fullscreen: false
    };
  }

  onRequestClose = () => {
    this.setState({ fullscreen: false });
  }

  onRequestOpen = () => {
    this.setState({ fullscreen: true });
  }

  render() {
    const { fullscreen } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Loader default</Text>
          <MtrLoader />
        </View>
        <View>
          <Text style={styles.title}>Loader Change Color</Text>
          <MtrLoader color={colors.PRIMARY} />
        </View>
        <View>
          <Text style={styles.title}>Loader Change Size</Text>
          <MtrLoader size={Size.small} />
        </View>
        <View>
          <Text style={styles.title}>Loader with Text</Text>
          <MtrLoaderWithText />
        </View>
        <View>
          <Text style={styles.title}>Loader Full Screen</Text>
          <MtrBtnRegular
            title="Klik ini"
            onPress={this.onRequestOpen}
          />
        </View>
        <View>
          <MtrLoaderFullScreen
            visible={fullscreen}
            onRequestClose={this.onRequestClose}
          />
        </View>
      </View>
    );
  }
}

export default ActivityIndicatorScreen;
