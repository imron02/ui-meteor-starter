// @flow

import colors from '../../utils/colors';
import { SETBAR_STYLE_DARK, SETBAR_STYLE_LIGHT } from './constant';

type Action = {
  type: string;
  theme: string;
  bgColor: string;
}

type State = {
  barStyle: string,
  bgColor: string
}

const initialState = {
  barStyle: 'dark-content',
  bgColor: colors.WHITE
};

const StatusBarReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SETBAR_STYLE_DARK:
      return {
        ...state,
        barStyle: action.theme,
        bgColor: action.bgColor
      };
    case SETBAR_STYLE_LIGHT:
      return {
        ...state,
        barStyle: action.theme,
        bgColor: action.bgColor
      };
    default:
      return state;
  }
};

export default StatusBarReducer;
