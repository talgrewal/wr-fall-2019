import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const {
  typography: {headerFont, hugeText},
} = THEME;
const styles = StyleSheet.create({
  page: {
    height: '100%',
    width: '100%',
  },
  container: {},
  title: {
    fontFamily: headerFont,
    fontSize: hugeText,
  },
});
export default styles;
