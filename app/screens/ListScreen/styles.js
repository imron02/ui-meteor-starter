// @flow

import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    alignSelf: 'center',
    fontSize: 20,
    color: colors.BLACK,
    fontWeight: 'bold',
    marginBottom: 18
  }
});

export default styles;
