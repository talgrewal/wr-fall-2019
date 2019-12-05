import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';

const styles = StyleSheet.create({
  pageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // height: '550%',
  },
  signinHeroImage: {
    resizeMode: 'contain',
    height: 150,
    marginTop: 50,
    marginBottom: 50,
  },
  loginInfo: {
    width: '75%',
  },
  accountSignup: {
    justifyContent: 'space-evenly',
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
  },
});

export default styles;
