import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Services from '../screens/Services';
import Tasks from '../screens/Tasks';
import HomeFinal from '../screens/HomeFinal';
import Profile from '../screens/Profile';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import PersonalDetails from '../screens/PersonalDetails';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="HomeFinal"
      screenOptions={{
        tabBarActiveTintColor: '#1F389B',
        tabBarInactiveTintColor: '#787575',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeFinal}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({size, color}) => (
            <Feather name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="tasks" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({color, size}) => (
            <Foundation name="die-four" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" color={color} size={25} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
