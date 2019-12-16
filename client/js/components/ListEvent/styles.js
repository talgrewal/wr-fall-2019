import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  colors: {black},
  formatting: {baseSpacing, centeredChildren, containerWidth},
  typography: {
    baseSize,
    headerFont,
    hugeText,
    contentText,
    mainFont,
    subHeaderText,
  },
} = THEME;

const styles = StyleSheet.create({
  image: {
    width: 113,
    height: 141,
  },
  title: {
    fontFamily: headerFont,
    fontSize: subHeaderText,
  },
  location: {
    fontFamily: headerFont,
    fontSize: smallText,
  },
});

export default styles;
