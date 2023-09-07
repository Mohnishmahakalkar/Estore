/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {LIGHT_COLORS} from '../theme/colors';
import {useSelector} from 'react-redux';
import {Button, Text} from 'react-native-paper';

const Profile = () => {
  const user = useSelector((store): any => store.user.user);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `${user.profile_pic}`,
        }}
      />
      <Text style={styles.name}>
        {user.first_name} {user.last_name}
      </Text>
      <Button
        mode="outlined"
        onPress={() => console.log('hello')}
        style={{
          borderWidth: 2,
          borderColor: LIGHT_COLORS.TextColor,
          backgroundColor: LIGHT_COLORS.StatusBar,
          width: '40%',
          height: 60,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Text
          variant="headlineMedium"
          style={{
            fontFamily: 'StylishCalligraphyDemo-XPZZ',
          }}>
          Logout
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    resizeMode: 'stretch',
    marginBottom: 30,
  },
  name: {
    fontFamily: 'StylishCalligraphyDemo-XPZZ',
    fontSize: 72,
    color: LIGHT_COLORS.StatusBar,
    textAlign: 'center',
  },
  socialContainer: {
    textAlign: 'left',
    padding: 4,
  },
  socialHead: {
    color: LIGHT_COLORS.StatusBar,
    fontSize: 40,
  },
  socialText: {
    color: LIGHT_COLORS.StatusBar,
    fontSize: 20,
  },
});

export default Profile;
