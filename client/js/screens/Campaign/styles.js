import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const {
  colors: {black, darkGrey, white},
  formatting: {baseSpacing, centeredChildren, containerWidth},
  typography: {
    headerFont,
    hugeText,
    contentText,
    mainFont,
    subHeaderText,
    smallText,
    italicFont,
  },
} = THEME;

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: hugeText,
    fontFamily: headerFont,
    margin: 20,
  },
});
export default styles;
