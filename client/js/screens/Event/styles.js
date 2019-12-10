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
    padding: baseSpacing / 2,
    lineHeight: 18,
    fontSize: contentText,
  },
  detailsContainer: {
    width: containerWidth,
    flexDirection: 'row',
    padding: baseSpacing,
  },
  button: {
    width: containerWidth,
    borderColor: black,
    borderWidth: 1,
    borderRadius: baseSpacing * 2,
    padding: baseSpacing,
    ...centeredChildren,
    padding: baseSpacing,
  },
  buttonText: {
    fontFamily: headerFont,
    fontSize: subHeaderText,
  },
});

export default styles;
