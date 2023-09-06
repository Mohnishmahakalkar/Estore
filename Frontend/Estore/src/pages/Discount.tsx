import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import DiscountItemCard from '../components/DiscountItemCard';

const Discount = () => {
  const data = Array.from({length: 1}, (_, index) => ({key: `${index}`}));
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <DiscountItemCard />
            <DiscountItemCard />
          </View>
        )}
        keyExtractor={item => item.key}
        numColumns={1} // Change this to 2 for two items in a row
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    padding: 2,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
});

export default Discount;
