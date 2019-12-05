import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
    alignSelf: 'flex-start',
    borderBottomWidth: 1,
    marginTop: 30,
  },
  AccountLoginContainer: {
    // flex: 1,
    justifyContent: 'space-between',
  },
  formHolder: {
    paddingBottom: 20,
    width: '90%',
  },
  termsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkboxTerms: {
    alignItems: 'center',
    paddingTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingRight: 30,
  },
});

export default styles;
