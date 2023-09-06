import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Dashboard = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={{color: 'black'}}>dashboard</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
  },
});
export default Dashboard;
