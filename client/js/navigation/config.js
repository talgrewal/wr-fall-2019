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
        top: 40,
        left: 65,
        height: '40%',
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

const ProfileButton = ({navigation}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUesr = async () => {
      const user = await queryViewer();
      setUser(await user);
    };
    getUesr();
  });

  return (
    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
      <ImageBackground
        style={{height: 25, width: 25, resizeMode: 'contain', marginRight: 20}}
        source={require('../assets/headingelement/Signedin.png')}>
        {user && (
          <Text style={{color: 'white', textAlign: 'center', padding: 2}}>
            {user.name.substring(0, 2)}
          </Text>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <AppHeader {...props} />,
  headerLeft: props => <MenuButton {...props} navigation={navigation} />,
  headerRight: props => <ProfileButton {...props} navigation={navigation} />,

  headerStyle: {
    backgroundColor: 'transparent',
  },
});
