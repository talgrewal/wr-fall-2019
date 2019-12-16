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
    baseSize,
  },
} = THEME;

const styles = StyleSheet.create({
  page: {...centeredChildren},
  container: {
    flex: 1,
    marginTop: '2%',
  },
  pageTitle: {
    fontSize: hugeText,
    fontFamily: headerFont,
    margin: 20,
  },

  item: {
    flex: 1,
    backgroundColor: darkGrey,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%',
    marginHorizontal: '1%',
    marginTop: '2%',
  },
  title: {
    fontSize: contentText,
    fontFamily: mainFont,
    color: white,
  },
  category: {
    fontSize: smallText,
    color: white,
    fontFamily: italicFont,
  },
  background: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  image: {
    resizeMode: 'contain',
    height: '50%',
    width: '60%',
  },
  noCampaign: {
    fontSize: baseSize,
    fontFamily: mainFont,
    margin: 20,
  },

  buttonText: {
    fontFamily: headerFont,
    fontSize: baseSize,
    color: white,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 40,
    height: 40,
    width: 260,
  },
  buttonImage: {
    justifyContent: 'center',
    resizeMode: 'contain',
    alignItems: 'center',
    height: 45,
    width: 250,
    borderRadius: 40,
  },
  buttonHolder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
});
export default styles;
