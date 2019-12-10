import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontFamily: typography.fontMainLight,
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
    fontFamily: typography.fontMainLight,
  },
  bodyTextTwo: {
    paddingVertical: 40,
    fontFamily: typography.fontMainLight,
  },
});
export default styles;
