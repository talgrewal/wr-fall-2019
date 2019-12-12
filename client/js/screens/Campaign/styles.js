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
    marginBottom: 20,
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
  campaignContainer: {
    flex: 1,
    // backgroundColor: 'yellow',
    padding: 20,
    flexDirection: 'column',
  },
  campaignDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  campaignSubInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '45%',
  },
  campaignCategoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  campaignCategoryType: {
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 2,
  },
  subscriberNumber: {
    fontSize: 12,
    textAlign: 'center',
  },
  subscriberName: {
    fontSize: 11,
    textAlign: 'center',
  },
  campaignDescription: {
    paddingTop: 20,
  },
  campaignRedText: {
    color: 'red',
  },
  campaignDescriptionText: {
    fontWeight: '400',
    fontSize: 15,
  },
  noEventsDetails: {
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: '300',
    paddingLeft: 2,
  },
  noEventsImage: {
    resizeMode: 'contain',
    height: 180,
    marginBottom: 20,
  },
});
export default styles;
