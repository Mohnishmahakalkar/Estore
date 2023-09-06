/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Badge, BottomNavigation, IconButton, Text} from 'react-native-paper';
import {LIGHT_COLORS} from '../theme/colors';
import {Home} from '../pages/Home';
import Discount from '../pages/Discount';
import Cart from '../pages/Cart';
import {StyleSheet, View} from 'react-native';

const TabRoutes = ({navigation}: any) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'discount',
      title: 'Discount',
      focusedIcon: 'ticket-percent',
      unfocusedIcon: 'ticket-percent-outline',
    },
    {
      key: 'cart',
      title: 'Cart',
      focusedIcon: 'cart',
      unfocusedIcon: 'cart-outline',
    },
  ]);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <>
            <View style={styles.item}>
              <IconButton
                icon="account-circle-outline"
                size={30}
                style={styles.button}
                iconColor="white"
                onPress={() => {
                  navigation.navigate('Profile');
                }}
              />
            </View>
            <View style={styles.item}>
              <IconButton
                icon="cart"
                size={25}
                style={styles.button}
                iconColor="white"
              />
              <Badge visible={true} style={styles.badge}>
                12
              </Badge>
            </View>
          </>
        );
      },
    });
  }, [navigation]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    discount: Discount,
    cart: Cart,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{
        backgroundColor: LIGHT_COLORS.StatusBar,
      }}
      theme={{colors: {secondaryContainer: LIGHT_COLORS.TextColor}}}
      activeColor="white"
      inactiveColor="white"
      renderLabel={(props: {
        route: any;
        focused: boolean;
        color: string;
      }): React.ReactNode => (
        <Text
          variant="bodySmall"
          style={{
            width: '100%',
            textAlign: 'center',
            color: props.color,
            fontFamily: 'StylishCalligraphyDemo-XPZZ',
            fontSize: 16,
          }}>
          {props.route.title}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    marginVertical: 12,
    marginHorizontal: 2,
  },
  button: {
    opacity: 2,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 0,
    color: 'white',
    backgroundColor: '#E76161',
  },
  label: {
    flex: 1,
  },
});

export default TabRoutes;
