import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categories: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: '800',
    margin: 20,
  },
  headerImage: {
    resizeMode: 'contain',
    width: 150,
    height: 100,
  },
  categoryImage: {
    resizeMode: 'contain',
    width: '95%',
    height: 200,
  },
  catLayout: {
    flex: 0.5,
    flexDirection: 'column',
  },
});
export default styles;
