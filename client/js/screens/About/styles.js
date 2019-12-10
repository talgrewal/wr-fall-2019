import {StyleSheet} from 'react-native';
<<<<<<< HEAD
import {THEME} from '../../config/';
const {
  colors: {black, darkGrey},
  formatting: {baseSpacing, centeredChildren, containerWidth},
=======
import {THEME} from '../../config';
const {
  colors: {black, darkGrey},
  formatting: {baseSpacing, centeredChildren},
>>>>>>> AboutUs page moved to the About page
  typography: {headerFont, hugeText, contentText, mainFont, subHeaderText},
} = THEME;

const styles = StyleSheet.create({
  page: {...centeredChildren},
  container: {
    ...centeredChildren,
<<<<<<< HEAD
    width: containerWidth,
  },
  image: {
    resizeMode: 'contain',
    height: '22%',
    width: '60%',
=======
    width: 308,
  },
  image: {
    resizeMode: 'contain',
    height: 131,
    width: 174.67,
>>>>>>> AboutUs page moved to the About page
  },
  text: {
    fontFamily: mainFont,
    fontSize: contentText,
    color: darkGrey,
    backgroundColor: 'transparent',
    textAlign: 'left',
    lineHeight: 18,
    letterSpacing: 0.15,
    paddingVertical: baseSpacing,
  },
  subTitle: {
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
