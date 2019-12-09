import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  colors: {black, darkGrey, charcoal},
  formatting: {baseSpacing, centeredChildren, containerWidth},
  typography: {headerFont, hugeText, contentText, mainFont, subHeaderText},
} = THEME;

const styles = StyleSheet.create({
  page: {...centeredChildren},
  container: {
    ...centeredChildren,
    width: containerWidth,
  },
  expandableMenuContainer: {
    width: '100%',
    backgroundColor: charcoal,
    justifyContent: 'space-between',
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
