import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import Login from '../screens/Login';
import StackNavigation from './StackNavigation';
import SplashScreen from '../screens/SplashScreen';
import AppIntroSlider from '../screens/AppIntroSliderScreen';
import AppIntroSliderScreen from '../screens/AppIntroSliderScreen';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <SplashScreen/> */}
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
