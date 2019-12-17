import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  typography: {mainFont, hugeText},
} = THEME;

const styles = StyleSheet.create({
  pageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontSize: hugeText,
    fontFamily: mainFont,
    fontWeight: 'bold',
    marginTop: 40,
    marginHorizontal: 20,
  },
});

export default styles;
