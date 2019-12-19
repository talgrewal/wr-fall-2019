import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import {Header} from 'react-navigation-stack';
import {queryViewer} from '../config/models';
import userIcon from '../assets/headingelement/loginIcon.png';

const AppHeader = props => (
  <View
    style={{
      backgroundColor: 'white',
      overflow: 'hidden',

      width: '100%',
    }}>
    <Image
      style={{
        position: 'absolute',
        top: 65,
        left: 65,
        height: '30%',
        width: '70%',
        resizeMode: 'contain',
      }}
      source={require('../assets/headingelement/Headerlogo.png')}
    />
    <Header {...props} />
  </View>
);

const MenuButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress={navigation.openDrawer}>
      <Image
        style={{height: 25, width: 35, resizeMode: 'contain', marginLeft: 20}}
        source={require('../assets/headingelement/Burgermenu.png')}
      />
    </TouchableOpacity>
  );
};

const BackButton = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Image
      style={{
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginLeft: 20,
        marginTop: 5,
      }}
      source={require('../assets/headingelement/backarrow.png')}
    />
  </TouchableOpacity>
);

const ProfileButton = ({navigation}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await queryViewer();
      setUser(await user);
    };
  }, [user]);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
      <ImageBackground
        style={{height: 23, width: 21, resizeMode: 'contain', marginRight: 20}}
        source={require('../assets/headingelement/loginIcon.png')}></ImageBackground>
    </TouchableOpacity>
  );
};

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <AppHeader {...props} />,
  headerLeft: props =>
    navigation.state.routeName === 'Campaigns' ||
    navigation.state.routeName === 'Campaign' ||
    navigation.state.routeName === 'Events' ||
    navigation.state.routeName === 'EditProfile' ? (
      <BackButton {...props} navigation={navigation} />
    ) : (
      <MenuButton {...props} navigation={navigation} />
    ),

  headerRight: props => <ProfileButton {...props} navigation={navigation} />,

  headerStyle: {
    backgroundColor: 'transparent',
    height: 70,
  },
});
