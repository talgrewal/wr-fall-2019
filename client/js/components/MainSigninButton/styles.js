import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonImage: {
    justifyContent: 'center',
    resizeMode: 'contain',
    alignItems: 'center',
    height: 45,
    width: 250,
    borderRadius: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 40,
    height: 40,
    width: 260,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textWhite: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  buttonHolder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 40,
  },
  buttonNoBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 40,
    borderWidth: 1,
    height: 45,
    width: 260,
  },
});

export default styles;
