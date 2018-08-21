// @flow

import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK_TRANSPARENT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    width: 280,
    height: 311,
    borderRadius: 2,
    backgroundColor: colors.WHITE
  },
  header: {
    width: 280,
    height: 112,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },
  headerText: {
    marginTop: 8,
    fontSize: 20,
    color: colors.DUSTY_GRAY
  },
  body: {
    height: 147,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    height: 52,
    justifyContent: 'center'
  },
  button: {
    width: 70,
    height: 36,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    right: 8,
    backgroundColor: colors.WHITE
  },
  buttonText: {
    fontSize: 14,
    color: colors.DODGER_BLUE
  }
});

export default styles;
