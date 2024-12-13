import {Dimensions, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import newTheme from '../utils/Constants';
import Design from '../utils/Design';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const {height,width}=Dimensions.get('window');
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/circleSpalsh.png')}></Image>
      <View style={styles.ViewTitle}>
        <Text style={styles.Title}>
          Sturcture Lim
          <Text
            style={{color: '#09847F', fontSize: hp(4.5), fontFamily: newTheme.Bold}}>
            it
          </Text>
          ed
        </Text>
        <Text style={Design.subHeading}>Endless Solutions</Text>
      </View>
      <ImageBackground
        style={styles.BottomLogo}
        source={require('../assets/images/BottomSplash.png')}>
        <View style={styles.Bottom}>
          <Text
            style={{
              fontSize: hp(2),
              color: 'black',
              fontFamily: newTheme.Semi_Bold,
            }}>
            Manage By:{' '}
            <Text style={[styles.Title, {fontSize: hp(2.5)}]}>
              Sturcture Lim
              <Text
                style={{
                  color: '#09847F',
                  fontSize: hp(2.5),
                  fontFamily: newTheme.Bold,
                }}>
                it
              </Text>
              ed
            </Text>
          </Text>
          <Text
            style={[Design.subHeading, {alignSelf: 'center', marginLeft: 10,fontSize:hp(1.7)}]}>
            Endless Solutions
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E3E6',
  },
  logo: {
    alignSelf: 'flex-end',
    height: hp(26),
    width: wp(53),
    resizeMode: 'cover',
  },
  Title: {
    fontFamily: newTheme.Bold,
    fontSize: hp(4.5),
    color: 'black',
    alignSelf: 'center',
    marginTop:hp(17)
    
  },
  ViewTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  BottomLogo: {
    height: hp(35),
    width: wp(67),
    flexDirection: 'column-reverse',
    // bottom:'11%'
    marginTop:hp(13),
    
  },
  Bottom: {
    marginVertical: '20%',
    marginLeft: wp(22),
  },
});
