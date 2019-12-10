import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const {
  formatting: {centeredChildren, containerWidth},
  colors: {white, red, lightGrey},
  typography: {hugeText},
} = THEME;
const styles = StyleSheet.create({
  contentContainer: {
    ...centeredChildren,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: containerWidth,
  },
  notificationCard: {
    width: '100%',
    padding: 20,
    backgroundColor: lightGrey,
    color: white,
    ...centeredChildren,
  },
  notification: {
    color: white,
  },
  notificationDot: {
    color: red,
    fontSize: hugeText,
  },
});

export default styles;
