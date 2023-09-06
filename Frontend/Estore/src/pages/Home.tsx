import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ItemCard from '../components/ItemCard';

export const Home = () => {
  const data = Array.from({length: 8}, (_, index) => ({key: `${index}`}));

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <ItemCard />
            <ItemCard />
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
