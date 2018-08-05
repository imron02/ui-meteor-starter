// @flow

import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { deviceWidth } from '../../utils/commons';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.RED
  },
  container: {
    backgroundColor: colors.RED
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.RED,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 105,
    height: 53,
    resizeMode: 'contain'
  },
  logoText: {
    marginTop: 18,
    color: colors.WHITE,
    fontSize: 14,
    letterSpacing: 0.07,
    marginBottom: 57
  },
  inputContainer: {
    padding: 15,
    width: deviceWidth,
    height: 38,
    marginTop: 6
  },
  label: {
    color: colors.WHITE,
    fontSize: 12
  },
  input: {
    color: colors.BLACK,
    borderBottomColor: colors.WHITE,
    backgroundColor: colors.WHITE,
    padding: 5,
    fontSize: 17,
    height: 38,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.WHITE
  },
  forgotButton: {
    height: 50,
    width: deviceWidth,
    padding: 15,
    alignItems: 'flex-end',
    marginTop: 25
  },
  forgotText: {
    color: colors.WHITE,
    fontSize: 12
  },
  registerButton: {
    height: 40,
    width: deviceWidth - 30,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  registerButtonText: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: 'bold'
  },
  loginButton: {
    height: 40,
    width: deviceWidth - 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButtonText: {
    color: colors.WHITE,
    fontSize: 14
  }
});

export default styles;
