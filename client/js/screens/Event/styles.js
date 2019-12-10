import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  colors: {black, darkGrey},
  formatting: {baseSpacing, centeredChildren, containerWidth},
  typography: {headerFont, hugeText, contentText, mainFont, subHeaderText},
} = THEME;

const styles = StyleSheet.create({
  title: {
    fontFamily: headerFont,
    fontSize: hugeText,
    padding: baseSpacing,
  },
  infoContainer: {
    padding: baseSpacing,
    textAlign: 'left',
  },
  text: {
    padding: baseSpacing / 4,
  },
  detailsContainer: {
    width: '82%',
  },
  button: {
    width: '82%',
    borderColor: black,
    borderWidth: 1,
    borderRadius: baseSpacing * 2,
    padding: baseSpacing,
    ...centeredChildren,
  },
  buttonText: {
    fontFamily: headerFont,
    fontSize: subHeaderText,
  },
});

export default styles;
