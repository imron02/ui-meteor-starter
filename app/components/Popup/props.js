// @flow

export type Props = {
  animationType: 'fade' | 'slide' | 'none',
  visible: boolean,
  headerImage: number,
  headerTitle: string,
  headerColor?: string[],
  onClose: () => void,
  bodyStyle?: number
};
