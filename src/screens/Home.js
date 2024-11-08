import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import newTheme from '../utils/Constants';
import Design from '../utils/Design';

const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center',}}>
          <View style={styles.HomeiconContainer}>
            <Image
              style={styles.HomeIcon}
              source={require('../assets/images/Home.png')}
            />
          </View>
          <Text style={[Design.heading, {color: 'white'}]}>Home</Text>
        </View>

        <Image
          style={styles.BellIcon}
          source={require('../assets/images/Bell.png')}
        />
      </View>
      <Image
        style={styles.HomeLogo}
        source={require('../assets/images/HomeLogo.png')}
      />
      <Text style={[Design.subHeading,{color:'white',fontSize:18,textAlign:'center',fontFamily:newTheme.Bold}]}>
        No Organization Account exists for {"\n"} this user in Structure Limited
      </Text>
      <Text style={[Design.subHeading,{color:'white',fontSize:14,textAlign:'center',marginTop:12}]}>
      There are no records to{"\n"} display right now.
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  BellIcon: {
    height: 50,
    width: 50,
    marginRight: 20,
  },
  HomeLogo: {
    height: '35%',
    width: '62%',
    alignSelf: 'center',
    marginVertical: 60,
  },
});
