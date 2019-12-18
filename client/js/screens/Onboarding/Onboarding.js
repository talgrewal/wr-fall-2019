import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import microphoneImageSource from '../../assets/artwork/miclightningv.png';
import fistImageSource from '../../assets/artwork/Revolution.png';
import heartImageSource from '../../assets/artwork/heartart.png';
import styles from './styles';
import activeButton from '../../assets/buttons/activespacebutton.png';
import {withNavigation} from 'react-navigation';

import {onBoardingSet} from '../../config/models';

const slides = [
  {
    key: '1',
    title: 'We are a World Revolution',
    text:
      'Rise up and make your voice heard! Join us and be the change. NOW is the time, to bring wayward corporations to heel with massive international boycotts, subvertisements, sabotage, pranks, hacks and culture jams.',
    image: microphoneImageSource,
    imageStyle: styles.image,
    backgroundColor: '#000',
  },
  {
    key: '2',
    title: 'Track your campaigns',
    text:
      'Sign up to follow campaigns and receive notifications about all the new updates regarding “your stuff”. Be heard, add your comments and turn ideas into action.',
    image: fistImageSource,
    imageStyle: styles.image,
    backgroundColor: '#000',
  },
  {
    key: '3',
    title: 'Stay Connected',
    text:
      'Never miss out on an opportunity to fight for the cause. We want you to be a part of the action. It is NOW or NEVER.  We will not go down with this sinking ship in silence.',
    image: heartImageSource,
    imageStyle: styles.image,
    backgroundColor: '#000',
  },
];

export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_Main_App: false,
    };
  }

  componentDidMount() {
    this.onBoardingSet;
  }

  _renderItem = ({item, dimensions}) => {
    return (
      <View style={styles.mainContent}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  render(navigation) {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        showNextButton={false}
        showSkipButton={true}
        doneLabel="Join the Revolution"
        bottomButton={true}
        renderSkipButton={() => {
          return (
            <TouchableOpacity
              onPress={async () => {
                try {
                  await onBoardingSet(true);
                  this.props.navigation.navigate('Login');
                } catch (e) {
                  console.log(e);
                  this.setState({error: e});
                }
              }}
              style={styles.button}>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
          );
        }}
        renderDoneButton={() => {
          return (
            <TouchableOpacity
              onPress={async () => {
                try {
                  await onBoardingSet(true);
                  this.props.navigation.navigate('Login');
                } catch (e) {
                  console.log(e);
                  this.setState({error: e});
                }
              }}
              style={styles.button}>
              <ImageBackground source={activeButton} style={styles.buttonImage}>
                <Text style={styles.buttontext}>Join the Revolution</Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
        activeDotStyle={{backgroundColor: '#CC0000'}}
      />
    );
  }
}
