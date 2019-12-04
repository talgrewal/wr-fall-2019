import React from 'react';
import AccountLoginForm from '../../components/AccountLoginForm';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LogoImage from '../../assets/headingelement/WorldRevolutionheaderlogo.png';
import styles from './styles';
import {SafeAreaView} from 'react-navigation';

const Login = () => {
  return (
    <SafeAreaView>
      <View style={styles.pageContainer}>
        {/* <View style={styles.logo}> */}
        <Image style={{resizeMode: 'contain'}} source={LogoImage} />
        {/* </View> */}
        {/* <View style={styles.formContainer}> */}
        <AccountLoginForm />
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;
