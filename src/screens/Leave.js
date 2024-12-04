import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import newTheme from '../utils/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import Design from '../utils/Design';
import { SafeAreaView } from 'react-native-safe-area-context';
const Leave = () => {
  const [isClicked, setIsClicked] = useState(false);
  const numColumns = 3;

  const leavesData = [
    {
      title: 'Available',
      subHeading: '8',
    },
    {
      title: 'Approved',
      subHeading: '15',
    },
    {
      title: 'Pending',
      subHeading: '16',
    },
    {
      title: 'Applied',
      subHeading: '10',
    },
    {
      title: 'Rejected',
      subHeading: '7',
    },
    {
      title: 'Total Leave',
      subHeading: '25',
    },
  ];

  const category = [
    {
      key: '1',
      title: 'All',
    },
    {
      key: '2',
      title: 'Pending',
    },
    {
      key: '3',
      title: 'Upcoming',
    },
    {
      key: '4',
      title: 'History',
    },
  ];

  const leaveStatus = [
    {
      status: 'Pending',
      leaveType: 'Sick Leave',
      LeaveDays: '1 Day',
      approvedBy: 'CEO',
      iconFamily: 'Entypo',
      iconName: 'cycle',
    },
    {
      status: 'Rejected',
      leaveType: 'Sick Leave',
      LeaveDays: '2 Day',
      approvedBy: 'CEO',
      iconFamily: 'Entypo',
      iconName: 'circle-with-cross',
    },
    {
      status: 'Approved',
      leaveType: 'Sick Leave',
      LeaveDays: '1 Day',
      approvedBy: 'CEO',
      iconFamily: 'FontAwesome',
      iconName: 'check-circle-o',
    },
  ];

  const renderItem = ({item}) => {
    let IconComponent;
    switch (item.iconFamily) {
      case 'Ionicons':
        IconComponent = iconFamily;
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
    let iconColor;
    if (item.status === 'Pending') {
      iconColor = '#E9BC55';
    } else if (item.status === 'Rejected') {
      iconColor = '#EC6464';
    } else {
      iconColor = '#81C5A2';
    }

    return (
      <View style={styles.StatusContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={[Design.subHeading, {color: '#C1C1C1'}]}>Date</Text>
            <Text style={[Design.subHeading, {color: 'black'}]}>
              Sep 12,2023-Sep 13,2023
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <IconComponent name={item.iconName} color={iconColor} size={20} />

            <Text
              style={[
                styles.status,
                item.status == 'Rejected' && styles.Rejectedstatus,
                item.status == 'Pending' && styles.PendingStatus,
              ]}>
              {item.status}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[
                Design.subHeading,
                {
                  fontSize: 14,
                  fontFamily: newTheme.Semi_Bold,
                  color: '#C1C1C1',
                },
              ]}>
              Leave Type
            </Text>
            <Text style={Design.subHeading}>{item.leaveType}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[
                Design.subHeading,
                {
                  fontSize: 14,
                  fontFamily: newTheme.Semi_Bold,
                  color: '#C1C1C1',
                },
              ]}>
              Applied Days
            </Text>

            <Text style={Design.subHeading}>{item.LeaveDays}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[
                Design.subHeading,
                {
                  fontSize: 14,
                  fontFamily: newTheme.Semi_Bold,
                  color: '#C1C1C1',
                },
              ]}>
              Approved By
            </Text>
            <Text style={Design.subHeading}>{item.approvedBy}</Text>
          </View>
        </View>
      </View>
    );
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.UpperContainer}>
        <TouchableOpacity
          style={{
            marginVertical: 10,
            marginHorizontal: 8,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" color="white" size={25} />
          <Text
            style={[
              Design.subHeading,
              {
                color: 'white',
                fontSize: 19,
                textAlign: 'center',
                marginHorizontal: 10,
              },
            ]}>
            Leave
          </Text>
        </TouchableOpacity>
        <View>
          </View>

          <View style={styles.secondContainer}>
            <Text
              style={[
                Design.subHeading,
                {fontSize: 15, marginVertical: 5, marginHorizontal: 10},
              ]}>
              Leave Stats
            </Text>
            <FlatList
              key={numColumns}
              numColumns={numColumns}
              data={leavesData}
              renderItem={({item}) => (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: newTheme.Bold,
                      color: newTheme.primary,
                    }}>
                    {item.subHeading}
                  </Text>
                  <Text
                    style={{
                      marginVertical: 5,
                      marginHorizontal: 30,
                      fontSize: 14,
                      fontFamily: newTheme.Semi_Bold,
                    }}>
                    {item.title}
                  </Text>
                </View>
              )}
            />
          </View>
          </View>

          <View style={styles.categoryContainer}>
            {category.map(category => (
              <TouchableOpacity
                style={[
                  styles.category,
                  isClicked === category.key && styles.isClickedCategory,
                ]}
                onPress={() => setIsClicked(category.key)}>
                <Text style={[Design.subHeading, {fontSize: 14}]}>
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{marginVertical: 20}}>
            <FlatList
              data={leaveStatus}
              renderItem={renderItem}
             
            />
          </View>
        </SafeAreaView>
  );
};

export default Leave;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  UpperContainer: {
    height: '18%',
    width: '100%',
    backgroundColor: newTheme.primary,
  },
  secondContainer: {
    height: 156,
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F2F2F2',
  },
  categoryContainer: {
    flexDirection: 'row',
    fontSize: 15,
    alignItems: 'center',
    marginLeft: 17,
    marginTop:90
  },
  category: {
    height: 30,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderColor: '#F2F2F2',
    paddingHorizontal: 10,
  },
  isClickedCategory: {
    backgroundColor: '#f2f7f9',
    borderColor: '#9AC3D2',
  },
  StatusContainer: {
    height: 140,
    width: '90%',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    alignSelf: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  status: {
    color: '#81C5A2',
  },
  Rejectedstatus: {
    color: '#EC6464',
  },
  PendingStatus: {
    color: '#E9BC55',
  },
});
