import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {LIGHT_COLORS} from '../theme/colors';

export const ItemCard = (props: any) => {
  const Name = props?.name || 'Name Placeholder';
  const Description =
    props?.description ||
    'Description Placeholder Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, ex voluptas architecto unde, magni temporibus quaerat adipisci rerum expedita culpa repellendus. Doloremque doloribus ipsum est, asperiores quidem exercitationem recusandae? Beatae. ';

  const Price = props?.price || 'Price Placeholder';

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.stretch}
          source={require('../../assets/Placeholder.png')}
        />
        <View style={styles.detail_container}>
          <Text style={styles.txt}> {Name}</Text>
          <Text style={styles.txt}>
            {Description.length > 60
              ? Description.substring(0, 60)
              : Description}
          </Text>
          <Text style={styles.txt}>{Price}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_COLORS.TextColor,
    width: '47%',
    height: '31%',
    borderRadius: 22,
    margin: 6,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  detail_container: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  stretch: {
    width: '40%',
    height: '40%',
    resizeMode: 'stretch',
    borderRadius: 14,
  },
  txt: {
    color: 'white',
  },
});
