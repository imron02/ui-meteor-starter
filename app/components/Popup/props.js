// @flow

export type Props = {
  animationType: 'fade' | 'slide' | 'none';
  visible: boolean;
  headerStyle?: string | number;
  headerTitle: string;
  headerTitleStyle?: Object;
  headerImage: number;
  headerTitle: string;
  headerColor?: string[];
  children: Object;
  onClose: () => void;
  bodyStyle?: number;
};

