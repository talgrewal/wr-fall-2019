import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontFamily: typography.fontMainLight,
    fontWeight: '800',
    paddingBottom: 10,
  },
  description: {
    fontFamily: typography.fontMainLight,
    fontSize: 14,
    color: '#2B2B2B',
    lineHeight: 18,
  },
});
export default styles;
