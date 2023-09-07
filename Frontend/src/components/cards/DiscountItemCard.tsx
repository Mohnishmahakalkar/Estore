import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {LIGHT_COLORS} from '../../theme/colors';

const DiscountItemCard = props => {
  const Name = props?.name || 'Name Placeholder';
  const Description =
    props?.description ||
    'Description Placeholder Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, ex voluptas architecto unde, magni temporibus quaerat adipisci rerum expedita culpa repellendus. Doloremque doloribus ipsum est, asperiores quidem exercitationem recusandae? Beatae.';
  const Price = props?.price || 'Price Placeholder';
  const DiscountPercentage = props?.discountPercentage || '40%'; 

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/Placeholder.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{Name}</Text>
        <Text style={styles.description}>
          {Description.length > 60
            ? Description.substring(0, 60) + '...'
            : Description}
        </Text>
        <Text style={styles.price}>{Price}</Text>
      </View>
      {parseFloat(DiscountPercentage) > 0 && (
        <View style={styles.discountBanner}>
          <Text style={styles.discountText}>{DiscountPercentage}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_COLORS.TextColor,
    width: '45%',
    aspectRatio: 1,
    borderRadius: 16,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Needed for positioning the discount banner.
  },
  image: {
    width: '50%',
    height: '40%',
    resizeMode: 'stretch',
    borderRadius: 12,
    margin: 8,
  },
  textContainer: {
    flex: 1,
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  price: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  discountBanner: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default DiscountItemCard;
