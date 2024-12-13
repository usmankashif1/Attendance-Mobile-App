import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUp from './src/screens/SignUp'
import Login from './src/screens/Login'
import AppNavigation from './src/navigation/AppNavigation'
import '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';


const App = () => {
  return (
   <AppNavigation/>
 )
}

export default App

const styles = StyleSheet.create({})  