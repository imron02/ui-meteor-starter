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
    alignItems: 'center',
    backgroundColor: colors.GREY
  },
  headerImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  headerText: {
    marginTop: 8,
    fontSize: 18,
    color: colors.WHITE
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
    right: 8
  },
  buttonText: {
    fontSize: 14,
    color: colors.DOGGER_BLUE,
    justifyContent: 'center',
    textAlign: 'center'
  }
});

export default styles;
