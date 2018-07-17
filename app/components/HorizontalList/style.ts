import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 180,
    marginLeft: 8,
    marginRight: 8
  },
  image: {
    width: 140,
    height: 140,
    justifyContent: 'flex-end',
    padding: 5
  },
  subTitle: {
    fontSize: 14,
    color: colors.WHITE
  },
  title: {
    fontSize: 14,
    marginTop: 8,
    color: colors.BLACK
  }
});

export default styles;