import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const {
  typography: {headerFont, hugeText, contentText},
  formatting: {containerWidth, baseSpacing, centeredChildren},
  colors: {black, white, red, darkGrey},
} = THEME;
const styles = StyleSheet.create({
  title: {
    fontFamily: headerFont,
    fontSize: hugeText,
    lineHeight: 28,
    width: containerWidth,
    padding: baseSpacing,
  },
  panel: {
    height: '100%',
    width: '100%',
  },
  container: {
    ...centeredChildren,
    marginTop: 30,
  },
  background: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  notification: {
    fontFamily: headerFont,
    fontSize: contentText,
    color: white,
  },
  notificationDot: {
    fontSize: 30,
    color: red,
  },

  item: {
    flex: 1,
    backgroundColor: darkGrey,
    padding: 15,
    flexDirection: 'row',
    marginBottom: '5%',
    marginHorizontal: '1%',
    marginTop: '2%',
  },
  text: {color: white, marginTop: 12, marginLeft: 8},
});
export default styles;
