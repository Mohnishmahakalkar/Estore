/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import {LIGHT_COLORS} from '../theme/colors';
import {Home} from '../pages/Home';
import Discount from '../pages/Discount';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const TabRoutes = () => {
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

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    discount: Discount,
    cart: RecentsRoute,
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

export default TabRoutes;
