import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const {
  colors: {black, darkGrey, white},
  formatting: {baseSpacing, centeredChildren, containerWidth},
  typography: {
    headerFont,
    hugeText,
    contentText,
    mainFont,
    subHeaderText,
    smallText,
    italicFont,
  },
} = THEME;

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: hugeText,
    fontFamily: headerFont,
    margin: 20,
  },
  campaignSingle: {
    alignSelf: 'center',
  },
  touchableContainer: {
    margin: 10,
  },
  campaignSingleMainImage: {
    width: 150,
    height: 150,

    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  gradient: {
    height: 40,
    width: '100%',
  },
  campaignSingleText: {
    color: 'white',
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
export default styles;
