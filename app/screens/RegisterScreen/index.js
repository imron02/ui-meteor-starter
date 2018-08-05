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

class RegisterScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Register'
  };

  componentDidMount(): void {
    const { setStatusBarLight } = this.props;

    setStatusBarLight();
  }

  login = (): void => {
    const { navigation } = this.props;

    navigation.goBack();
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Image source={meteorLogo} style={styles.logo} />
        <Text style={styles.logoText}>Silahkan register untuk membuat akun</Text>

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

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            selectionColor={colors.BLACK}
            secureTextEntry
            clearButtonMode="while-editing"
            placeholder="Konfirmasi"
          />
        </View>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>REGISTER</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={this.login}>
          <Text style={styles.loginButtonText}>Sudah punya akun? Masuk</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default RegisterScreen;
