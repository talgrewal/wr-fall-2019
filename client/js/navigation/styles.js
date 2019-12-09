import {StyleSheet} from 'react-native';
import {THEME} from './config';
const {
  colors: {white, lightGrey},
  formatting: {icon},
} = THEME;
const styles = StyleSheet.create({
  navBackground: {
    backgroundColor: lightGrey,
    height: '100%',
    width: '100%',
    marginLeft: 0,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: white,
  },
  titleContainerOne: {
    marginTop: 80,
    borderBottomWidth: 1,
    borderColor: white,
  },
  title: {
    fontSize: 20,
    padding: 25,
    color: white,
  },
  icon: {
    ...icon,
  },
  burgerIcon: {marginLeft: 25, height: 25, width: 25},
  appHeader: {
    backgroundColor: white,
    overflow: 'hidden',
    height: 100,
    width: '100%',
  },
});
export default styles;
