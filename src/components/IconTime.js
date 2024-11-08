import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
const IconTime = props => {
  const IconLibrary = {
    AntDesign,
    Ionicons,
    MaterialCommunityIcons,
    Feather
  };
  const Icon = IconLibrary[props.iconFamily];
  return (
    <View>
        <View style={{alignItems:'center',}}>
      {Icon && props.name && (
        <Icon
          name={props.name}
          size={props.size ? props.size : 25}
          color={props.iconColor}
        />
      )}
      <Text style={{color:props.color,marginTop:6,fontSize:props.fontSize ? props.fontSize:15}}>{props.title}</Text>
    </View>
    </View>
  );
};

export default IconTime;

const styles = StyleSheet.create({});
