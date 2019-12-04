import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  logo: {},
  formContainer: {},
  pageContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  loginInfo: {
    height: 50,
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
  },
  redFont: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
