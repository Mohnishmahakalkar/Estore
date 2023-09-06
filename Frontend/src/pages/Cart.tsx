import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    padding: 2,
  },
});

export default Cart;
