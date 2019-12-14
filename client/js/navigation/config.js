import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Header} from 'react-navigation-stack';

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
    <View style={{justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Image
          style={{height: 25, width: 35, resizeMode: 'contain', marginLeft: 20}}
          source={require('../assets/headingelement/Burgermenu.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{
            height: 30,
            width: 25,
            resizeMode: 'contain',
            marginLeft: 20,
          }}
          source={require('../assets/headingelement/backarrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const ProfileButton = ({navigation}) => {
  return (
    <TouchableOpacity>
      <Image
        style={{height: 25, width: 25, resizeMode: 'contain', marginRight: 20}}
        source={require('../assets/headingelement/Signedin.png')}
      />
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
