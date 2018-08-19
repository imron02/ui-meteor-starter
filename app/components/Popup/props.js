// @flow

export type Props = {
  visible: boolean;
  headerStyle?: string | number;
  headerTitle: string;
  headerTitleStyle?: Object;
  headerImage?: number;
  children: Object;
  bodyStyle?: string | number;
  onPress: () => void;
};
