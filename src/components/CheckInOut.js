import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import newTheme from '../utils/Constants';
const CheckInOut = props => {
  const IconLibrary = {
    AntDesign,
    Ionicons,
    MaterialCommunityIcons,
    Feather,
  };
  const Icon = IconLibrary[props.iconFamily];
  return (
    <View>
      <View style={styles.BoxContainer}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={styles.logoContainer}>
          {Icon && props.name && (
            <Icon
              name={props.name}
              size={props.size ? props.size : 25}
              color={props.iconColor}
            />
          )}
        </View>

        <View>
        

          <Text
            style={{
              color: 'black',
              marginTop: 6,
              fontSize: props.fontSize ? props.fontSize : 18,
              fontFamily: newTheme.Bold,
            }}>
            {props.title1}
          </Text>
          <Text
            style={{
              color: '#C3C3C3',
              marginTop: 6,
              fontSize: props.fontSize ? props.fontSize : 15,
              fontFamily: newTheme.Semi_Bold,
            }}>
            {props.title2}
          </Text>
        </View>
        </View>
        <View style={{justifyContent:'center',padding:10}}>
          <Text
            style={{
              color: 'black',
              marginTop: 6,
              fontSize: props.fontSize ? props.fontSize : 16,
              fontFamily: newTheme.regular,
            }}>
            {props.title3}
          </Text>
          <Text
            style={{
              color: '#C3C3C3',
              marginTop: 6,
              fontSize: props.fontSize ? props.fontSize : 15,
              fontFamily: newTheme.Semi_Bold,
            }}>
            {props.title4}
          </Text>
        </View>
      </View>
      </View>
    
  );
};

export default CheckInOut;

const styles = StyleSheet.create({
  BoxContainer: {
    height: 100,
    width: '85%',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius:9,
    borderColor:'#E9F1F4'
    
  },
  logoContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#E9F1F4',
    borderRadius: 35,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
