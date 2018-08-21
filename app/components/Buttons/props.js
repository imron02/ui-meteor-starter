// @flow

type Color = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'black';

export type Props = {
  color?: Color;
  title: string;
  onPress?: () => void;
  style?: string;
  titleStyle?: Object;
}
