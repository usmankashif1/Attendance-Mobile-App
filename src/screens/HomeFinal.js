import {
  Dimensions,
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
import newTheme from '../utils/Constants';
import IconTime from '../components/IconTime';
import CheckInOut from '../components/CheckInOut';

const HomeFinal = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.UpperContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.personImg}
            source={require('../assets/images/person.jpg')}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View>
              <Text style={[Design.heading, {color: 'white', fontSize: 20}]}>
                Usman Kashif
              </Text>
              <Text
                style={[Design.subHeading, {color: '#e3dfd3', fontSize: 17}]}>
                React Native
              </Text>
            </View>
            <View style={styles.bellContainer}>
              <MaterialCommunityIcons name="bell" color="#1F389B" size={23} />
            </View>
          </View>
        </View>
        <View style={styles.FirstContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Feather name="calendar" color="#1F389B" size={25} />
              <Text style={Design.subHeading}>28 OCT 2024</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="time" color="#1F389B" size={25} />
              <Text style={Design.subHeading}>2:34 PM</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 20,
            }}>
            <View style={styles.timerCount}>
              <Text style={styles.count}>09</Text>
            </View>
            <View style={styles.timerCount}>
              <Text style={styles.count}>39</Text>
            </View>
            <View style={styles.timerCount}>
              <Text style={styles.count}>09</Text>
            </View>
            <Text style={[Design.heading, {fontSize: 17, color: '#ACACAC'}]}>
              HRS
            </Text>
          </View>
          <Text style={[Design.subHeading, {textAlign: 'center'}]}>
            General 10:00 AM to 06:00 PM
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginVertical: 15,
            }}>
            <TouchableOpacity style={styles.buttonBoxes}>
              <Octicons name="briefcase" color="#1F389B" size={20} />
              <Text
                style={[
                  Design.subHeading,
                  {
                    fontSize: 18,
                    fontFamily: newTheme.Bold,
                    color: '#1F389B',
                    left: 5,
                  },
                ]}>
                Work Time
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonBoxes, isClicked && styles.clickedStyle]}
              onPress={() => setIsClicked(!isClicked)}>
              <AntDesign
                name="login"
                color={isClicked ? '#FFFFFF' : '#1F389B'}
                size={20}
              />
              <Text
                style={[
                  styles.CheckinButton,
                  isClicked && styles.selectedCheckInButton,
                ]}>
                {isClicked ? 'Check Out' : 'Check in'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.secondContainer}>
          <Text style={[Design.subHeading, {fontSize: 15}]}>
            Today working hour
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <IconTime
              title={'09:34:34'}
              iconFamily={'MaterialCommunityIcons'}
              name={'clock-check-outline'}
              iconColor={'#1F389B'}
              size={23}
            />
            <IconTime
              title={'09:34:34'}
              iconFamily={'Feather'}
              name={'coffee'}
              iconColor={'#1F389B'}
              size={23}
            />

            <IconTime
              title={'09:34:34'}
              iconFamily={'MaterialCommunityIcons'}
              name={'clock-check-outline'}
              iconColor={'#1F389B'}
              size={23}
            />
            <IconTime
              title={'09:34:34'}
              iconFamily={'Ionicons'}
              name={'briefcase-outline'}
              iconColor={'#1F389B'}
              size={23}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={[Design.heading, {fontSize: 19, marginLeft: 25}]}>
            Your Activity
          </Text>
          <TouchableOpacity>
            <Text style={{color: 'blue', marginRight: 25}}>View All</Text>
          </TouchableOpacity>
        </View>

        <CheckInOut
          title1={'Check In'}
          title2={'September 23, 2023'}
          title3={'10:00 am'}
          title4={'On Time'}
          iconFamily={'AntDesign'}
          name={'logout'}
          iconColor={'#1F389B'}
          size={23}
        />
        <View style={{marginVertical: 20}}>
          <CheckInOut
            title1={'Break in'}
            title2={'September 23, 2023'}
            title3={'10:00 am'}
            title4={'On Time'}
            iconFamily={'Feather'}
            name={'coffee'}
            iconColor={'#1F389B'}
            size={23}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeFinal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  UpperContainer: {
    flex: 0.3,
    backgroundColor: '#1F389B',
  },
  personImg: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  bellContainer: {
    height: 35,
    width: 35,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 20,
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
  timerCount: {
    height: 50,
    width: 50,
    backgroundColor: '#E9F1F4',
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 20,
    color: '#414F5A',
    fontFamily: newTheme.Bold,
  },
  buttonBoxes: {
    height: 50,
    width: '43%',
    borderRadius: 10,
    borderColor: '#E9F1F4',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickedStyle:{
    backgroundColor:'#BE273A'
  },
  secondContainer: {
    height: '45%',
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: '#E9F1F4',
  },
  CheckinButton: {
    fontSize: 18,
    fontFamily: newTheme.Bold,
    color: '#1F389B',
    left: 5,
  },
  selectedCheckInButton:{
    color:'white',

  }
});
