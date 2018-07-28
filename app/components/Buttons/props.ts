import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
}
