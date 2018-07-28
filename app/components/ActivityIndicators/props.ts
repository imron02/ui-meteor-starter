import { ActivityIndicatorProps } from 'react-native';
import colors from '../../utils/colors';

export enum Size {
  'small' = 'small',
  'large' = 'large'
}

export class Props {
  color?: string = colors.GREY;
  size?: Size = Size.large;
  text?: string;
  visible?: boolean = false;
  onRequestClose?: () => void;
}
