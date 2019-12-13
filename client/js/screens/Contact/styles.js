import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  typography: {mainFont, hugeFont},
} = THEME;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: hugeFont,
    fontFamily: mainFont,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  image: {
    resizeMode: 'contain',
    height: '60%',
    width: '40%',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  bodyText: {
    paddingVertical: 25,
    fontFamily: mainFont,
  },
  bodyTextTwo: {
    paddingVertical: 40,
    fontFamily: mainFont,
  },
});
export default styles;
