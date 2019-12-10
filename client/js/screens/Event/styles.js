import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  colors: {black, darkGrey},
  formatting: {baseSpacing, centeredChildren},
  typography: {headerFont, hugeText, contentText, mainFont, subHeaderText},
} = THEME;

const styles = StyleSheet.create({
  page: {...centeredChildren},
  container: {
    ...centeredChildren,
    width: containerWidth,
  },
  image: {
    resizeMode: 'contain',
    height: '22%',
    width: '45%',
  },
  description: {
    fontFamily: mainFont,
    fontSize: contentText,
    color: darkGrey,
    backgroundColor: 'transparent',
    textAlign: 'left',
    lineHeight: 18,
    letterSpacing: 0.15,
    paddingVertical: baseSpacing,
  },
  date: {
    fontSize: subHeaderText,
    fontFamily: headerFont,
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingVertical: baseSpacing,
  },
  title: {
    fontFamily: headerFont,
    fontSize: hugeText,
    color: black,
    backgroundColor: 'transparent',
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingVertical: baseSpacing * 1.75,
  },
});

export default styles;
