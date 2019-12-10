import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  xxxIcon: {
    resizeMode: 'contain',
    height: 30,
    alignSelf: 'flex-end',
  },
  categoryImage: {
    height: 60,
    width: 100,
    resizeMode: 'contain',
    // alignSelf: 'flex-start',
  },
  campaignsHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 60,
    marginLeft: 20,
  },
  categoryVideo: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  videoSection: {
    // justifyContent: 'flex-start',
    // flexDirection: 'row',
    // paddingBottom: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  campaignsView: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  campaignSingle: {
    // flex: 1,
  },
});
export default styles;
