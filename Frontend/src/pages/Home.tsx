import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ItemCard from '../components/cards/ItemCard';
import axios from 'axios';
import {BACKEND_URL} from '../constants/constants';

export const Home = () => {
  const [items, setitems] = React.useState([]);
  const [hasError, setHasError]: any = React.useState(null);

  const getItems = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${BACKEND_URL}products`,
      });
      if (response.data) {
        setitems(response.data);
      }
    } catch (error) {
      setHasError(error);
      console.log(error);
    }
  };

  React.useEffect(() => {
    getItems();
  }, [hasError]);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => <ItemCard data={item} />}
        keyExtractor={item => item?.product_id}
        numColumns={2} // Change this to 2 for two items in a row
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
