import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomInputs from '../components/CustomInputs';
import CustomButton from '../components/CustomButton';
import newTheme from '../utils/Constants';
import {useNavigation} from '@react-navigation/native';
import Design from '../utils/Design';

const Login = () => {
  const [email, setEmail] = useState('');
  const [BadEmail, setBadEmail] = useState(false);
  const [Password, setPassword] = useState('');
  const [BadPassword, setBadPassword] = useState(false);

  const validation = () => {
    if (email === '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);

      if (Password === '') {
        setBadPassword(true);
      } else {
        setBadPassword(false);
      }
      if(email!=='' || Password !=='') {
        navigation.navigate('BottomNavigation')
      }
    }
    
  };

  const navigation = useNavigation();
  return (
    <View style={[Design.container, {justifyContent: 'center'}]}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logoColored.png')}
      />

      <Text style={[Design.heading, {marginTop: 20, marginLeft: 20}]}>
        Welcome!
      </Text>
      <Text
        style={[
          Design.subHeading,
          {marginLeft: 20, color: newTheme.secondary},
        ]}>
        Please login or sign up to continue our app
      </Text>
      <View style={{alignItems: 'center'}}>
        <CustomInputs
          placeholder={'Email'}
          placeholderTextColor={'black'}
          bdwidth={1.5}
          iconFamily={'Entypo'}
          iconColor={'black'}
          name={'mail'}
          bordercolor={'black'}
          flex={1}
          hbox={53}
          fontSize={17}
          radius={10}
          borderRadius={30}
          width={'90%'}
          value={email}
          onChangeText={txt => setEmail(txt)}
        />
        {BadEmail === true && (
          <Text style={Design.validation}>Please Enter Email</Text>
        )}
        <CustomInputs
          iconFamily={'Entypo'}
          iconColor={'black'}
          name={'lock'}
          placeholder={'Password'}
          placeholderTextColor={'black'}
          bordercolor={'black'}
          bdwidth={1.5}
          showPassword={true}
          flex={1}
          hbox={53}
          fontSize={17}
          radius={10}
          borderRadius={30}
          width={'90%'}
          value={Password}
          onChangeText={text => setPassword(text)}
        />
        {BadPassword === true && (
          <Text style={Design.validation}>Please Enter Password</Text>
        )}

        <CustomButton
          title={['Login']}
          backgroundColor={'black'}
          width={'90%'}
          height={'16%'}
          color={'white'}
          justifyContent={'center'}
          alignItems={'center'}
          fontSize={20}
          elevation={4}
          marginTop={20}
          onPress={() => validation()}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:20
          }}>
          <Text style={styles.subHeading}>or Create an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={[styles.subHeading, {color: '#1227c9'}]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    height: '5%',
    width: '55%',
    alignSelf: 'center',
    marginVertical: 10,
    elevation: 5,
    bottom: 20,
  },
  subHeading: {
    fontSize: 17,
    fontFamily: newTheme.regular,
  },
});
