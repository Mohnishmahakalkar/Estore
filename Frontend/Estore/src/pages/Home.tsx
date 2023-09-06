import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ItemCard} from '../components/ItemCard';

export const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#F8F8FF',
    padding: 2,
  },
});
