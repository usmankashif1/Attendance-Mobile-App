import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import newTheme from '../utils/Constants';
import Design from '../utils/Design';

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
            style={{color: '#09847F', fontSize: 30, fontFamily: newTheme.Bold}}>
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
              fontSize: 16,
              color: 'black',
              fontFamily: newTheme.Semi_Bold,
            }}>
            Manage By:{' '}
            <Text style={[styles.Title, {fontSize: 18}]}>
              Sturcture Lim
              <Text
                style={{
                  color: '#09847F',
                  fontSize: 18,
                  fontFamily: newTheme.Bold,
                }}>
                it
              </Text>
              ed
            </Text>
          </Text>
          <Text
            style={[Design.subHeading, {alignSelf: 'center', marginLeft: 10}]}>
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
    height: '25%',
    width: '53%',
    resizeMode: 'cover',
  },
  Title: {
    fontFamily: newTheme.Bold,
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    marginTop:'40%'
    
  },
  ViewTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 0.7,/
  },
  BottomLogo: {
    height: '60.5%',
    width: '85.5%',
    flexDirection: 'column-reverse',
    bottom:'11%'
  },
  Bottom: {
    marginVertical: '20%',
    marginLeft: 90,
  },
});
