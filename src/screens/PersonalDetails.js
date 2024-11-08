import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Design from '../utils/Design';
import newTheme from '../utils/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const PersonalDetails = () => {
  const workDetails = [
    {id: '1', label: 'Full Name', key: 'Full Name'},
    {id: '2', label: 'Phone Number', key: 'Phone Number'},
    {id: '3', label: 'Email', key: 'Email'},
    {id: '4', label: 'Date of Birth', key: 'Date of Birth'},
    {id: '5', label: 'Marital Status', key: 'Marital Status'},
    {id: '6', label: 'Nationality', key: 'Nationality'},
    {id: '6', label: 'Address', key: 'Address'},
    {id: '6', label: 'Identification No', key: 'Identification No'},
    {id: '6', label: 'Field of Study', key: 'Field of Study'},
    {id: '6', label: 'Emergency Contact', key: 'Emergency Contact'},
  ];
  const navigation = useNavigation();
  return (
    <View style={[Design.container, styles.Container]}>
      <View style={styles.UpperContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" color="white" size={25} />
            <Text style={[Design.subHeading, {color: 'white', fontSize: 17}]}>
              Personal Details
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={[Design.subHeading, {color: 'white', fontSize: 17}]}>
          Edit
        </Text>
      </View>
      <View style={styles.MainContainer}>
        <Text
          style={[
            Design.heading,
            {
              fontSize: 17,
              marginHorizontal: 10,
              marginVertical: 4,
              color: '#525E68',
            },
          ]}>
          General Details
        </Text>
        <FlatList
          data={workDetails}
          renderItem={({item}) => (
            <View style={{flex: 1, padding: 20}}>
              <Text style={styles.SubDetails}>{item.label}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: newTheme.primary,
  },
  UpperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  MainContainer: {
    height: '70%',
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 4,
  },
  SubDetails: {
    fontSize: 18,
    fontFamily: newTheme.regular,
    color: '#C4C4C4',
  },
});
