import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textField: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 20,
    width: 400,
    alignSelf: 'flex-start',
  },
  AccountLoginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  subField: {
    width: 250,
  },
  typefield: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow',
  },
  hairline: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: 270,
    paddingTop: 3,
    marginBottom: 40,
  },
});

export default styles;
