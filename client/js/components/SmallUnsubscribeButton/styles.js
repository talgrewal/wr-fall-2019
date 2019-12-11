import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  colors: {black, darkGrey, white},
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
  button: {
    borderColor: white,
    borderWidth: 1,
    borderRadius: baseSpacing * 2,
    padding: baseSpacing,
    padding: baseSpacing,
    height: 50,
    width: 104, //Width 100% does not work
  },
  buttonText: {
    fontFamily: headerFont,
    fontSize: 12,
    color: white,
  },
});

export default styles;
