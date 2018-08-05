// @flow

export type Size = 'small' | 'large';

export type Props = {
  color?: string;
  size?: Size;
  text?: string;
  visible?: boolean;
  onRequestClose?: () => void;
}
