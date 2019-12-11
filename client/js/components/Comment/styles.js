import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  typography: {mainFont, headerFont, contentText},
  formatting: {containerWidth, baseSpacing},
} = THEME;
const styles = StyleSheet.create({
  commentContainer: {
    justifyContent: 'space-between',
    fontFamily: mainFont,
    fontSize: contentText,
    width: '100%',
  },
  name: {
    fontFamily: headerFont,
    lineHeight: 17,
    letterSpacing: 0.1,
    paddingVertical: baseSpacing / 4,
  },
  date: {
    fontFamily: mainFont,
    lineHeight: 18,
    letterSpacing: 0.15,
    paddingVertical: baseSpacing / 4,
  },
  comment: {
    letterSpacing: 0.15,
    lineHeight: 18,
    paddingVertical: baseSpacing / 4,
  },
});

export default styles;
