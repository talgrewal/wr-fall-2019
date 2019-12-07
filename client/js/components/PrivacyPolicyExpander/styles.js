import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  colors: {white, charcoal},
  typography: {mainFont},
  formatting: {baseSpacing, centeredChildren},
} = THEME;

const styles = StyleSheet.create({
  expandableTitle: {
    color: white,
    fontFamily: mainFont,
    padding: baseSpacing,
    width: 195,
  },
  expandableTitleIcon: {
    color: white,
    fontFamily: mainFont,
    paddingHorizontal: baseSpacing,
    fontSize: 40,
  },
  expandableButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: charcoal,
    alignItems: 'center',
  },
  hiddenDescriptionBackgroundBorder: {
    ...centeredChildren,
    backgroundColor: charcoal,
    width: '100%',
  },
  hiddenDescription: {
    backgroundColor: white,
    width: '99%',
    padding: baseSpacing,
  },
  whiteLine: {
    height: 1,
    backgroundColor: white,
  },
});

export default styles;
