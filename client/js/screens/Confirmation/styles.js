import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const {
  typography: {headerFont, mainFont, hugeText},
  formatting: {centeredChildren, containerWidth, baseSpacing},
  colors: {white},
} = THEME;
const styles = StyleSheet.create({
  page: {
    height: '100%',
    width: '100%',
    ...centeredChildren,
    backgroundColor: 'rgba(0,0,0, 0.59)',
  },
  container: {
    width: containerWidth,
    ...centeredChildren,
    borderRadius: 10,
    backgroundColor: white,
    padding: baseSpacing * 4,
  },
  title: {
    fontFamily: headerFont,
    fontSize: hugeText,
    padding: baseSpacing,
  },
  text: {
    textAlign: 'center',
    fontFamily: mainFont,
  },
  flexContainer: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  flexContainerStart: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});
export default styles;
