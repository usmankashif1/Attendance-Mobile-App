import {StyleSheet} from 'react-native';
import newTheme from './Constants';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontFamily: newTheme.Bold,
    color: 'black',
    fontSize: 25,
  },
  subHeading: {
    fontSize: 14,
    fontFamily: newTheme.regular,
    color:'black'
  },
  validation:{
    fontFamily:newTheme.regular,
    color:'red',
    alignSelf:'flex-start',
    marginLeft:20,
    marginTop:2
  }
});
