import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  typography: {mainFont, hugeText, contentText},
  colors: {darkGrey},
} = THEME;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: hugeText,
    fontFamily: mainFont,
    fontWeight: '800',
    paddingBottom: 10,
  },
  description: {
    fontFamily: mainFont,
    fontSize: contentText,
    color: darkGrey,
    lineHeight: 18,
  },
});
export default styles;
