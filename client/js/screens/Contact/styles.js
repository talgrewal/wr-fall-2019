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
  imageOne: {
    height: 60,
    width: 80,
  },
  imageTwo: {
    height: 95,
    width: 80,
  },
  imageThree: {
    height: 60,
    width: 80,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20,
  },
  bodyText: {
    paddingVertical: 25,
    fontFamily: typography.fontMainLight,
    paddingLeft: 40,
  },
  bodyTextTwo: {
    paddingVertical: 40,
    fontFamily: typography.fontMainLight,
    paddingLeft: 40,
  },
});
export default styles;
