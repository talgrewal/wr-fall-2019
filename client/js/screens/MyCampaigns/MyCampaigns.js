import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import styles from './styles';
import spaceTexture from '../../assets/Textures/DarkSpace.png';
import SmallUnsubscribeButton from '../../components/SmallUnsubscribeButton';

const DATA = [
  {
    id: '1',
    title: 'International Rebellion',
    category: 'Enviornment',
  },
  {
    id: '2',
    title: 'Peace and Humanity',
    category: 'Political',
  },
  {
    id: '3',
    title: 'Unity and Diversity',
    category: 'Social',
  },
  {
    id: '4',
    title: 'Power Politics in Todays World',
    category: 'Social',
  },
];

function Item({title, category}) {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <SmallUnsubscribeButton />
    </View>
  );
}

const MyCampaigns = props => {
  return (
    <>
      <Text style={styles.pageTitle}>My Campaigns </Text>
      {DATA && DATA.length > 0 ? (
        <ImageBackground
          style={styles.panel}
          imageStyle={styles.panel}
          source={spaceTexture}>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <Item title={item.title} category={item.category} />
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </ImageBackground>
      ) : (
        <View>
          <View style={styles.page}>
            <Image
              style={styles.image}
              source={require('../../assets/artwork/blackspot.png')}
            />
          </View>
          <Text style={styles.pageTitle}>
            You are not following any campaigns yet
          </Text>

          <Text style={styles.noCampaign}>
            Get the wheel rolling and ignite the fire by following campaigns and
            adding events to your stuff. Keep your calendar updated and never
            miss out to be a part of the movement.
          </Text>
        </View>
      )}
    </>
  );
};

export default MyCampaigns;
