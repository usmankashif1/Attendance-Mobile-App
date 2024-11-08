import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import newTheme from '../utils/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Design from '../utils/Design';
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
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
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
      </View>
    </View>
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
  },
  category: {
    height: 30,
    width: 75,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderColor: '#F2F2F2',
  },
  isClickedCategory: {
    backgroundColor: '#9AC3D2',
  },
});
