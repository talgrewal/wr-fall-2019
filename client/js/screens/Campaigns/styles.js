import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  xGroupIcon: {
    resizeMode: 'contain',
    height: 30,
    alignSelf: 'flex-end',
  },
  categoryImage: {
    height: 60,
    width: 100,
    resizeMode: 'contain',
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
    height: '91%',
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
    width: '100%',
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
    width: '45%',
    height: '100%',
    margin: 10,
  },
  touchableContainerSideScroll: {
    width: '25%',
    height: '100%',
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
    width: '100%',
  },
  videoPreview: {
    width: '40%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '15%',
  },
  flexContainer: {
    flexGrow: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  flexContainerStart: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  gradientHolder: {
    width: '100%',
  },
});
export default styles;
