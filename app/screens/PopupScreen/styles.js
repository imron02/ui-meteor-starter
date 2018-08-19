// @flow

import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    elevation: 0
  },
  buttonText: {
    fontSize: 16,
    color: colors.BLACK,
    fontWeight: 'normal'
  },
  bodyText: {
    fontSize: 18
  }
});

export default styles;
