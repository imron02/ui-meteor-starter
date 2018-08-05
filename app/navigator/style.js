// @flow

import { StyleSheet } from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: colors.RED,
    borderBottomWidth: 0
  },
  headerText: {
    color: colors.WHITE
  }
});

export default styles;
