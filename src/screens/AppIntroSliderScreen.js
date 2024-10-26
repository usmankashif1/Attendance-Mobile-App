import {
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Design from '../utils/Design';
import newTheme from '../utils/Constants';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const AppIntroSliderScreen = () => {
  const navigation=useNavigation();
  const slider = [
    {
      img: require('../assets/images/FirstSlider.png'),
      title: 'Shift Schedules',
      subTitle: 'Efficiently manage employee shifts and \n attendance reports',
    },
    {
      img: require('../assets/images/SecondSlider.png'),
      title: 'Shift Schedules',
      subTitle: 'Stay Organized: Your Go-To Leave \n Management Tool',
    },
    {
      img: require('../assets/images/ThirdSlider.png'),
      title: 'Stay Connected',
      subTitle: 'Keep the Conversation Going, No \n Matter the Distance',
    },
  ];
  return (
    <View style={styles.container}>
      <AppIntroSlider
        data={slider}
        showNextButton={false}
        showDoneButton={false}
        activeDotStyle={{backgroundColor:newTheme.logoColor,width:15,height:15,borderRadius:50}}
        renderItem={({item}) => (
          
          <View style={styles.SubContainer}>
            <Image style={styles.logo} source={item.img} />
            <Text style={[Design.heading, {alignSelf: 'center',}]}>
              {item.title}
            </Text>
            <Text
              style={[
                Design.subHeading,
                {alignSelf: 'center', textAlign: 'center', fontSize: 16,marginVertical:9},
              ]}>
              {item.subTitle}
            </Text>
            <CustomButton
              title={'Sign in'}
              width={'35%'}
              height={'5.5%'}
              backgroundColor={'#125986E5'}
              color={'white'}
              alignItems={'center'}
              justifyContent={'center'}
              marginTop={20}
              borderRadius={8}
              onPress={()=>navigation.navigate('Login')}
            />
            <View style={{flexDirection:'row',marginVertical:10}}>
              <Text style={[Design.subHeading, {fontSize: 16}]}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                <Text style={{fontSize: 16, textAlign: 'center',color:'#517DB7'}}>  Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',marginVertical:2}}>
              <Text style={[Design.subHeading, {fontSize: 16}]}>
              Have trouble signing in?
              </Text>
              <TouchableOpacity onPress={()=>Linking.openURL('https://wa.link/60yn9x')}>
                <Text style={{fontSize: 16, textAlign: 'center',color:'#517DB7'}}>  Contact us </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default AppIntroSliderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: newTheme.backGround,
  },
  logo: {
    height: 207,
    width: 226,
    alignSelf: 'center',
    resizeMode:'contain',

  },
  SubContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 10,
  },
});
