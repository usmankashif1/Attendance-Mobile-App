import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import Login from '../screens/Login';
import StackNavigation from './StackNavigation';
import SplashScreen from '../screens/SplashScreen';
import AppIntroSlider from '../screens/AppIntroSliderScreen';
import AppIntroSliderScreen from '../screens/AppIntroSliderScreen';
import Home from '../screens/Home';
import BottomNavigation from './BottomNavigation';
import HomeFinal from '../screens/HomeFinal';
import IconTime from '../components/IconTime';
import CheckInOut from '../components/CheckInOut';
import Profile from '../screens/Profile';
import Leave from '../screens/Leave';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      {/* <SplashScreen/> */}
      {/* <BottomNavigation/> */}
      {/* <HomeFinal/> */}
      {/* <IconTime/> */}
      {/* <CheckInOut/> */}
      {/* <Profile/> */}
      <Leave/>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
