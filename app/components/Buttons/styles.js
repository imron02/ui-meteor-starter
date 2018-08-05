// @flow

import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.PRIMARY,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderRadius: 2,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    padding: 5,
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default styles;
