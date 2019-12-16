import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  colors: {black},
  formatting: {baseSpacing, containerWidth},
  typography: {headerFont, subHeaderText, smallText},
} = THEME;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: containerWidth,
    paddingVertical: baseSpacing,
  },
  textContainer: {
    flexShrink: 1,
  },
  image: {
    width: '45%',
    height: 'auto',
    marginRight: '10%',
  },
  borderBottom: {
    borderWidth: 1,
    borderColor: black,
    width: '100%',
  },
  title: {
    fontFamily: headerFont,
    fontSize: subHeaderText,
    width: '100%',
    flexShrink: 1,
  },
  location: {
    fontFamily: headerFont,
    fontSize: smallText,
  },
  text: {
    fontFamily: headerFont,
    paddingVertical: baseSpacing / 4,
  },
});

export default styles;
