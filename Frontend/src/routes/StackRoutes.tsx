import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../login/Login';
import {LIGHT_COLORS} from '../theme/colors';
import {IconButton} from 'react-native-paper';
import {Badge} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import TabRoutes from './TabRoutes';

const StackRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {backgroundColor: LIGHT_COLORS.StatusBar},
          headerTintColor: LIGHT_COLORS.TextColor,
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={TabRoutes}
          options={{
            headerShown: true,
            headerBackVisible: false,
            title: 'Estore',
            headerTitleStyle: {
              fontFamily: 'StylishCalligraphyDemo-XPZZ',
              fontSize: 42,
            },
            headerTintColor: 'white',
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => {
              return (
                <>
                  <View style={styles.item}>
                    <IconButton
                      icon="account-circle-outline"
                      size={30}
                      style={styles.button}
                      iconColor="white"
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
          }}
        />
      </Stack.Navigator>
    </>
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

export default StackRoutes;
