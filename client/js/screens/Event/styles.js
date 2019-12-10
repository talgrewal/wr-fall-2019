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
  container: {
    ...centeredChildren,
  },
  infoContainer: {
    padding: baseSpacing,
    textAlign: 'left',
    width: '100%',
  },
  text: {
    padding: baseSpacing / 2,
    lineHeight: 18,
    fontSize: contentText,
  },
  detailsContainer: {
    flexDirection: 'row',
    padding: baseSpacing,
  },
  button: {
    borderColor: black,
    borderWidth: 1,
    borderRadius: baseSpacing * 2,
    padding: baseSpacing,
    padding: baseSpacing,
    width: 375, //Width 100% does not work
    ...centeredChildren,
  },
  buttonText: {
    fontFamily: headerFont,
    fontSize: subHeaderText,
  },
});

export default styles;
