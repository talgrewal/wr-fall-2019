import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  colors: {black, white, darkGrey},
  formatting: {baseSpacing, centeredChildren},
  typography: {headerFont, hugeText, baseSize, mainFont},
} = THEME;

const styles = StyleSheet.create({
  mainContent: {
    ...centeredChildren,
    flex: 1,
    backgroundColor: white,
  },
  image: {
    resizeMode: 'contain',
    width: 326,
    height: 309,
  },
  text: {
    fontFamily: mainFont,
    fontSize: baseSize,
    color: darkGrey,
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: baseSpacing,
    lineHeight: 18,
    letterSpacing: 0.17,
    width: 310,
  },
  title: {
    fontFamily: headerFont,
    fontSize: hugeText,
    color: black,
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingVertical: baseSpacing * 1.75,
  },
  skip: {
    fontFamily: headerFont,
    fontSize: baseSize,
    color: black,
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingTop: baseSpacing,
    paddingBottom: baseSpacing * 4,
  },
  done: {
    color: 'blue',
    alignSelf: 'center',
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    borderRadius: 40,
    height: 40,
    width: 260,
    alignSelf: 'center',
  },
  buttonImage: {
    justifyContent: 'center',
    resizeMode: 'contain',
    alignItems: 'center',
    height: 45,
    width: 250,
    borderRadius: 40,
  },
  buttontext: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: white,
  },
});

export default styles;
