import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Design from '../utils/Design';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import newTheme from '../utils/Constants';
import IconTime from '../components/IconTime';
import CheckInOut from '../components/CheckInOut';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation=useNavigation();
  const data = [
    {
      title: '3',
      subTitle: 'Monthly\nAttendance',
    },
    {
      title: '4',
      subTitle: 'Approved\nLeaves',
    },
    {
      title: '6',
      subTitle: 'Remaing\nLeaves',
    },
  ];

  const profile = [
    {
      id: '1',
      iconFamily: 'Feather',
      iconName: 'user',
      color: '#1F389B',
      title: 'Personal Details',
      screen: 'PersonalDetails',
    },
    {
      id: '2',
      iconFamily: 'Ionicons',
      iconName: 'briefcase-outline',
      color: '#1F389B',
      title: 'Work Information',
      screen: 'WorkInformation',
    },
    {
      id: '3',
      iconFamily: 'MaterialCommunityIcons',
      iconName: 'lock-outline',
      color: '#1F389B',
      title: 'Change Password',
      // screen: 'ShippingAddress',
    },
    {
      id: '4',
      iconFamily: 'Feather',
      iconName: 'settings',
      color: '#1F389B',
      title: 'Settings',
      // screen: 'Settings',
    },
    {
      id: '5',
      iconFamily: 'MaterialCommunityIcons',
      iconName: 'logout',
      color: '#c93e3e',
      title: 'Logout',
      // screen: 'PrivacyPolicy',
    },
  ];

  const renderItem = ({item}) => {
    let IconComponent;

    switch (item.iconFamily) {
      case 'Ionicons':
        IconComponent = Ionicons;
        break;
      case 'Entypo':
        IconComponent = Entypo;
        break;
      case 'MaterialCommunityIcons':
        IconComponent = MaterialCommunityIcons;
        break;
      case 'AntDesign':
        IconComponent = AntDesign;
        break;
      case 'FontAwesome':
        IconComponent = FontAwesome;
        break;
      case 'MaterialIcons':
        IconComponent = MaterialIcons;
        break;
      case 'Feather':
        IconComponent = Feather;
        break;
      default:
        IconComponent = Feather;
    }

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate(item.screen)}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconComponent name={item.iconName} size={27} color={item.color} />

          <Text
            style={[
              styles.itemText,
              {color: item.title === 'Logout' ? '#c93e3e' : '#868E95'},
            ]}>
            {item.title}
          </Text>
        </View>
        {item.title !== 'Logout' && (
          <MaterialIcons
            name="navigate-next"
            size={27}
            color="black"
            style={styles.NextIcon}
          />
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.UpperContainer}>
        <Text
          style={[
            Design.heading,
            {color: 'white', fontSize: 17, fontFamily: newTheme.regular,marginHorizontal:15,marginTop:10},
          ]}>
          Profile
        </Text>
        <Image
          style={styles.profileImage}
          source={require('../assets/images/person.jpg')}
        />
        <Text style={[Design.heading, {color: 'white', textAlign: 'center'}]}>
          Usman Kashif
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontFamily: newTheme.regular,
          }}>
          React Native Developer
        </Text>
        <View style={styles.midContainer}>
          <FlatList
            horizontal
            data={data}
            renderItem={({item}) => (
              <View style={styles.FlatListContainer}>
                <Text
                  style={[Design.heading, {fontSize: 19, color: '#1F389B'}]}>
                  {item.title}
                </Text>
                <Text
                  style={[
                    Design.subHeading,
                    {
                      fontFamily: newTheme.Bold,
                      textAlign: 'center',
                      fontSize: 15,
                      color: '#868E95',
                    },
                  ]}>
                  {item.subTitle}
                </Text>
              </View>
            )}
          />
        </View>
        <View style={[styles.midContainer, {height: '125%',borderRadius:10}]}>
          <FlatList data={profile} renderItem={renderItem} />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  UpperContainer: {
    flex: 0.3,
    backgroundColor: '#1F389B',
  },

  FirstContainer: {
    height: '100%',
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: '#E9F1F4',
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
  midContainer: {
    height: 100,
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 5,
  },
  FlatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 23,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 15,
  },
  itemText: {
    marginLeft: 10,
    color: '#868E95',
    fontFamily: newTheme.Bold,
    fontSize: 16,
  },
  NextIcon: {
    marginTop: 2,
    marginRight: 10,
  },
});
