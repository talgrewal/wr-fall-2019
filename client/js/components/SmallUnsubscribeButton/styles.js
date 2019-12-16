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
    height: '100%',
    width: '100%',
  },
  buttonText: {
    padding: 10,
    fontFamily: headerFont,
    fontSize: 12,
    color: white,
  },
  container: {
    height: '70%',
    width: '24%',
  },
});

export default styles;
