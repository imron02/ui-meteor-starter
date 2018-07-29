import colors from '../../utils/colors';
import { SETBAR_STYLE_DARK, SETBAR_STYLE_LIGHT } from './constant';

export const setStatusBarDark = () => ({
  type: SETBAR_STYLE_DARK,
  theme: 'dark-content',
  bgColor: colors.WHITE
});

export const setStatusBarLight = () => ({
  type: SETBAR_STYLE_LIGHT,
  theme: 'light-content',
  bgColor: colors.RED
});
