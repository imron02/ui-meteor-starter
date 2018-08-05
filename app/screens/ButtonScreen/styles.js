// @flow

import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    color: colors.BLACK
  },
  button: {
    backgroundColor: colors.RED,
    borderColor: colors.RED
  }
});

export default styles;
