import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomInputs from '../components/CustomInputs';
import CustomButton from '../components/CustomButton';
import newTheme from '../utils/Constants';
import Design from '../utils/Design';
import {useNavigation} from '@react-navigation/native';
import '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firebase from '../../firebaseConfig';

const SignUp = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [BadName, setBadName] = useState(false);
  const [email, setEmail] = useState('');
  const [BadEmail, setBadEmail] = useState(false);

  const [Password, setPassword] = useState('');
  const [BadPassword, setBadPassword] = useState(false);
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [ConfirmBadPassword, setConfirmBadPassword] = useState(false);
  const [buttonDisabled, SetButtonDisabled] = useState(false);
  const [emailCheck, setEmailCheck] = useState('');
  const [PasswordCheck, setPasswordCheck] = useState('');
  const [getname, setgetName] = useState('');
  const [getemail, setgetEmail] = useState('');

  const validation = () => {
    if (name === '') {
      setBadName(true);
    } else {
      setBadName(false);
    }

    if (email === '') {
      setBadEmail(true);
    } else if (!email.includes('@')) {
      setBadEmail(false);
      setEmailCheck(true);
    } else {
      setBadEmail(false);
      setEmailCheck(false);
    }

    if (Password === '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }

    if (ConfirmPassword === '') {
      setConfirmBadPassword(true);
    } else {
      setConfirmBadPassword(false);
      if (ConfirmPassword !== Password) {
        setPasswordCheck(true);
      } else {
        setPasswordCheck(false);
        CreateUser();
      }
    }
  };

  const CreateUser = () => {
    firebase.auth()
      .createUserWithEmailAndPassword(email, Password)
      .then(() => {
        
        Alert.alert('Successfully SignUp');

        navigation.navigate('Login');
      });
  };

  return (
    <View style={[Design.container, {justifyContent: 'center'}]}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logoColored.png')}
      />
      <Text style={[Design.heading, {marginTop: 20, marginLeft: 20}]}>
        Sign Up
      </Text>
      <Text
        style={[
          Design.subHeading,
          {marginLeft: 20, color: newTheme.secondary},
        ]}>
        Create a new Account
      </Text>
      <View
        style={{
          marginTop: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <CustomInputs
          iconFamily={'FontAwesome'}
          name={'user'}
          placeholder={'User Name'}
          iconColor={newTheme.secondary}
          placeholderTextColor={newTheme.secondary}
          bordercolor={'black'}
          bdwidth={1.5}
          colorIcon={'black'}
          flex={1}
          hbox={53}
          fontSize={17}
          radius={10}
          borderRadius={30}
          width={'90%'}
          color={newTheme.secondary}
          onChangeText={txt => setName(txt)}
          value={name}
        />
        {BadName === true && (
          <Text style={Design.validation}>Please Enter User Name</Text>
        )}
        <CustomInputs
          placeholder={'Email'}
          iconColor={newTheme.secondary}
          placeholderTextColor={newTheme.secondary}
          bdwidth={1.5}
          iconFamily={'Entypo'}
          name={'mail'}
          bordercolor={'black'}
          flex={1}
          hbox={53}
          fontSize={17}
          radius={10}
          borderRadius={30}
          width={'90%'}
          color={newTheme.secondary}
          onChangeText={txt => setEmail(txt)}
          value={email}
        />
        {(BadEmail || emailCheck) === true && (
          <Text style={Design.validation}>
            {BadEmail
              ? 'Please Enter Email'
              : emailCheck
              ? 'Enter Valid Email'
              : ''}
          </Text>
        )}
        <CustomInputs
          iconFamily={'Entypo'}
          iconColor={newTheme.secondary}
          placeholderTextColor={newTheme.secondary}
          name={'lock'}
          placeholder={'Password'}
          bordercolor={'black'}
          bdwidth={1.5}
          showPassword={true}
          colorIcon={newTheme.secondary}
          flex={1}
          hbox={53}
          fontSize={17}
          radius={10}
          borderRadius={30}
          width={'90%'}
          color={newTheme.secondary}
          onChangeText={txt => setPassword(txt)}
          value={Password}
        />
        {BadPassword === true && (
          <Text style={Design.validation}>Please Enter Password</Text>
        )}
        <CustomInputs
          iconFamily={'Entypo'}
          iconColor={newTheme.secondary}
          placeholderTextColor={newTheme.secondary}
          name={'lock'}
          placeholder={'Confirm Password'}
          bordercolor={'black'}
          bdwidth={1.5}
          showPassword={true}
          colorIcon={newTheme.secondary}
          flex={1}
          hbox={53}
          fontSize={17}
          radius={10}
          borderRadius={30}
          width={'90%'}
          color={newTheme.secondary}
          onChangeText={txt => setConfirmPassword(txt)}
          value={ConfirmPassword}
        />
        {(ConfirmBadPassword || PasswordCheck) === true && (
          <Text style={Design.validation}>
            {ConfirmBadPassword
              ? 'Enter Confirm Password'
              : PasswordCheck
              ? "Password don't match"
              : ''}
          </Text>
        )}
        <CustomButton
          title={['Create an Account']}
          backgroundColor={buttonDisabled ? '#8e8e8e' : 'black'}
          width={'90%'}
          height={'13%'}
          color={'white'}
          justifyContent={'center'}
          alignItems={'center'}
          fontSize={18}
          elevation={4}
          marginTop={40}
          onPress={() => {
            validation();
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text style={styles.subHeading}>or already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.subHeading, {color: '#1227c9'}]}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  logo: {
    height: '5%',
    width: '55%',
    alignSelf: 'center',
    marginTop: 30,
    marginVertical: 20,
  },
  subHeading: {
    fontSize: 17,
    fontFamily: newTheme.regular,
  },
});
