import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const {
  typography: {headerFont, hugeText},
  formatting: {containerWidth, baseSpacing, centeredChildren},
} = THEME;
const styles = StyleSheet.create({
  title: {
    fontFamily: headerFont,
    fontSize: hugeText,
    lineHeight: 28,
    width: containerWidth,
    padding: baseSpacing,
  },
  panel: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    height: '100%',
  },
  container: {
    ...centeredChildren,
  },
});
export default styles;
