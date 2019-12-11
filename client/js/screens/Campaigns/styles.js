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
    marginBottom: 10,
    marginRight: 60,
    marginLeft: 20,
  },
  categoryVideo: {
    width: 160,
    height: '100%',
    resizeMode: 'contain',
    marginLeft: 15,
  },
  videoSection: {
    // justifyContent: 'flex-start',
    // flexDirection: 'row',
    // paddingBottom: 15,
    flex: 1,
    flexDirection: 'row',
    height: 130,
  },

  border: {
    marginVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  campaignsView: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  campaignSingle: {
    alignSelf: 'center',
  },
  campaignSingleMainImage: {
    width: 150,
    height: 150,
    margin: 20,
  },
  campaignSingleText: {
    color: 'purple',
    textAlign: 'center',
  },
});
export default styles;
