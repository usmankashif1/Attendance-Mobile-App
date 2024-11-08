import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Design from '../utils/Design';
import newTheme from '../utils/Constants';
import {cacheVersion} from '../../metro.config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import {screensEnabled} from 'react-native-screens';
import {useNavigation} from '@react-navigation/native';
const Services = () => {
  const navigation = useNavigation();

  const numColumns = 2;

  const data = [
    {
      title: 'Leaves',
      iconFamily: 'MaterialCommunityIcons',
      iconName: 'calendar-clock-outline',
      color: newTheme.primary,
      screen:'Leave',
    },

    {
      title: 'Attendance',
      iconFamily: 'MaterialCommunityIcons',
      iconName: 'calendar-check-outline',
      color: newTheme.primary,
    },
    {
      title: 'Report',
      iconFamily: 'Foundation',
      iconName: 'page-search',
      color: newTheme.primary,
    },
    {
      title: 'Help',
      iconFamily: 'Feather',
      iconName: 'help-circle',
      color: newTheme.primary,
    },
    {
      title: 'OverTime',
      iconFamily: 'MaterialCommunityIcons',
      iconName: 'account-clock',
      color: newTheme.primary,
    },
    {
      title: 'Calendar',
      iconFamily: 'MaterialCommunityIcons',
      iconName: 'calendar-text-outline',
      color: newTheme.primary,
    },
    {
      title: 'Projects',
      iconFamily: 'MaterialCommunityIcons',
      iconName: 'database',
      color: newTheme.primary,
    },
  ];
  const renderItem = ({item}) => {
    let IconComponent;
    switch (item.iconFamily) {
      case 'Ionicons':
        IconComponent = Ionicons;
        break;
      case 'MaterialCommunityIcons':
        IconComponent = MaterialCommunityIcons;
        break;
      case 'Foundation':
        IconComponent = Foundation;
        break;
      case 'Feather':
        IconComponent = Feather;
        break;
      default:
        IconComponent = Ionicons;
    }

    return (
      <TouchableOpacity onPress={()=>navigation.navigate('Leave')}
        style={styles.ContainerBox}>
        <View style={styles.CircleContainer}>
          <IconComponent name={item.iconName} color={item.color} size={30} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.Container}>
      <View style={styles.UpperContainer}>
        <Text style={[Design.heading, {color: 'white', padding: 15}]}>
          Services
        </Text>
        <FontAwesome
          style={{padding: 15}}
          name="bell"
          color="white"
          size={20}
        />
      </View>
      <FlatList
        key={numColumns}
        numColumns={numColumns}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  HomeiconContainer: {
    height: 50,
    width: 50,
    backgroundColor: newTheme.logoColor,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    marginHorizontal: 20,
  },
  HomeIcon: {
    height: 30,
    width: 30,
  },
  ContainerBox: {
    height: 125,
    width: 165,
    backgroundColor: 'white',
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CircleContainer: {
    height: 60,
    width: 60,
    backgroundColor: '#F2F7F9',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  UpperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    width: '100%',
    backgroundColor: newTheme.primary,
  },
  title: {
    marginVertical: 5,
    top: 3,
    fontSize: 17,
    fontFamily: newTheme.regular,
    color: 'black',
  },
});
