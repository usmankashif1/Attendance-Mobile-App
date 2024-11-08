import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import AppIntroSliderScreen from '../screens/AppIntroSliderScreen';
import Home from '../screens/Home';
import BottomNavigation from './BottomNavigation';
import PersonalDetails from '../screens/PersonalDetails';
import WorkInformation from '../screens/WorkInformation';
import Leave from '../screens/Leave';

const StackNavigation = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2500);
  }, []);

  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {showSplash ? (
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Stack.Screen
            name="AppIntroSliderScreen"
            component={AppIntroSliderScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PersonalDetails"
            component={PersonalDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="WorkInformation"
            component={WorkInformation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Leave"
            component={Leave}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
