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
    width: 130,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  videoSection: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    marginBottom: 0,
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
  touchableContainer: {
    margin: 10,
  },
  imageAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPreview: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '15%',
  },
});
export default styles;
