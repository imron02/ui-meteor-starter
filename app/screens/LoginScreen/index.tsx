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

const meteorLogo = require('../../assets/images/meteor_logo_white.png');

class LoginScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Image source={meteorLogo} style={styles.logo} />
        <Text style={styles.logoText}>Silahkan login untuk melanjutkan</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            selectionColor={colors.WHITE}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            selectionColor={colors.WHITE}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>Lupa password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>REGISTER</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default LoginScreen;
