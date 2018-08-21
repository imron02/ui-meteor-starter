// @flow

const PRIMARY = '#2196F3';
const SUCCESS = '#67AA56';
const INFO = '#639FEC';
const WARNING = '#E1A151';
const DANGER = '#BF4744';
const BLACK = '#000000';

const BUTTON_STYLE = {
  borderWidth: 1,
  borderRadius: 2,
  elevation: 2,
  alignItems: 'center',
  justifyContent: 'center'
};

const BUTTON_COLOR = {
  primary: {
    backgroundColor: PRIMARY,
    borderColor: PRIMARY,
    ...BUTTON_STYLE
  },
  success: {
    backgroundColor: SUCCESS,
    borderColor: SUCCESS,
    ...BUTTON_STYLE
  },
  info: {
    backgroundColor: INFO,
    borderColor: INFO,
    ...BUTTON_STYLE
  },
  warning: {
    backgroundColor: WARNING,
    borderColor: WARNING,
    ...BUTTON_STYLE
  },
  danger: {
    backgroundColor: DANGER,
    borderColor: DANGER,
    ...BUTTON_STYLE
  },
  black: {
    backgroundColor: BLACK,
    borderColor: BLACK,
    ...BUTTON_STYLE
  }
};

export default {
  button: BUTTON_COLOR,
  PRIMARY,
  BLACK,
  BLACK_TRANSPARENT: 'rgba(0, 0, 0, 0.5)',
  DUSTY_GRAY: '#999999',
  WHITE: '#FFFFFF',
  RED: '#F44336',
  GREY: '#9E9E9E',
  SILVER_CHALICE: '#A3A3A3',
  GRAY: '#EEEEEE',
  DODGER_BLUE: '#068CEF',
  SUCCESS,
  INFO,
  WARNING,
  DANGER
};
