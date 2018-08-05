// @flow

import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import colors from '../../utils/colors';
import styles from './styles';
import type { Props } from './props';
import meteorLogo from '../../assets/images/meteor_logo_white.png';

class LoginScreen extends Component<Props> {
  componentDidMount(): void {
    const { setStatusBarLight } = this.props;

    setStatusBarLight();
  }

  componentWillUnmount(): void {
    const { setStatusBarDark } = this.props;

    setStatusBarDark();
  }

  register = (): void => {
    const { navigation } = this.props;

    navigation.navigate('Register');
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Image source={meteorLogo} style={styles.logo} />
        <Text style={styles.logoText}>Silahkan login untuk melanjutkan</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            selectionColor={colors.BLACK}
            keyboardType="email-address"
            clearButtonMode="while-editing"
            placeholder="Email"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            selectionColor={colors.BLACK}
            secureTextEntry
            clearButtonMode="while-editing"
            placeholder="Password"
          />
        </View>

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>Lupa password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>MASUK</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={this.register}>
          <Text style={styles.registerButtonText}>DAFTAR</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default LoginScreen;
