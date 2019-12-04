import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';

const styles = StyleSheet.create({
  logo: {},
  formContainer: {},
  pageContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  loginInfo: {
    // flex: 1,
    height: 80,
    width: '75%',
  },
  accountSignup: {
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  blackFont: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    paddingBottom: 5,
  },
  redFont: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
    paddingBottom: 5,
    // fontFamily: typography.fontMain,
  },
});

export default styles;
