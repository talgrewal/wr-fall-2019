import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
<<<<<<< HEAD
  typography: {mainFont, hugeFont},
=======
  typography: {mainFont, hugeText},
>>>>>>> c110d6c2d2c0fad9c2614d7b16eecb5f84f89910
} = THEME;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
<<<<<<< HEAD
    fontSize: hugeFont,
    fontFamily: mainFont,
=======
    fontSize: hugeText,
    fontFamily: mainFont,

>>>>>>> c110d6c2d2c0fad9c2614d7b16eecb5f84f89910
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
