import {FlatList, InteractionManager, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Design from '../utils/Design';
import newTheme from '../utils/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const WorkInformation = () => {
 

const workDetails=[
  {id:'1',label:'Username',key:'Username'},
  {id:'2',label:'Employee ID',key:'Employee ID'},
  {id:'3',label:'Date of Joining',key:'Date of Joining'},
  {id:'4',label:'Department',key:'Department'},
  {id:'5',label:'Designation',key:'Designation'},
  {id:'6',label:'Employee Contact Number',key:'Employee Contact Number'},
]
const BankDetails=[
  {id:'1',label:'Bank Name',key:'Bank Name'},
  {id:'2',label:'Account Number',key:'Account Number'},
  {id:'3',label:'Branch Address',key:'Branch Address'},
  
]

  const navigation = useNavigation();
  return (
    <View style={[Design.container, styles.Container]}>
      <View style={styles.UpperContainer}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" color="white" size={25} />
          <Text style={[Design.subHeading, {color: 'white', fontSize: 17}]}>
            Work Information
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.DetailsContainer}>
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
          Work Details
        </Text>
        <FlatList
        data={workDetails}
        renderItem={({item})=>(
          <Text style={[Design.subHeading,{color:'#C4C4C4',fontSize:17,padding:20}]}>{item.label}</Text>
        )}
        />
      </View>
      <View style={styles.BankContainer}>
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
          Bank Details
        </Text>
        <FlatList
        data={BankDetails}
        renderItem={({item})=>(
          <Text style={[Design.subHeading,{color:'#C4C4C4',fontSize:16,padding:10}]}>{item.label}</Text>
        )}
        />
      </View>
    </View>
  );
};

export default WorkInformation;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: newTheme.primary,
  },
  UpperContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  DetailsContainer: {
    height: '60%',
    width: '92%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 4,
    alignSelf: 'center',
  },
  BankContainer: {
    height: '20%',
    width: '92%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});
