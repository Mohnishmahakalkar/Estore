/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {LIGHT_COLORS} from '../theme/colors';

const Profile = () => {
  //https://in.linkedin.com/in/mohnishmahakalkar
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://ca.slack-edge.com/T048WMUQN0N-U049FV7L4TB-728627321382-512',
        }}
      />
      <Text style={styles.name}>Mohnish Mahakalkar</Text>
      {/* <View style={styles.socialContainer}>
        <Text style={styles.socialHead}>
          https://in.linkedin.com/in/mohnishmahakalkar
        </Text>
      </View> */}
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
