/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LIGHT_COLORS} from '../../theme/colors';
import {Snackbar, Text} from 'react-native-paper';

const GoogleButton = () => {
  const [isSnackbarVisible, setisSnackbarVisible] = React.useState(false);
  const onToggleSnackBar = () => setisSnackbarVisible(!isSnackbarVisible);

  React.useEffect(() => {
    setTimeout(() => {
      setisSnackbarVisible(false);
    }, 2000);
  }, [isSnackbarVisible]);

  return (
    <>
      <TouchableOpacity onPress={onToggleSnackBar}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Icon name="google" size={30} color={LIGHT_COLORS.TextColor} />
          </View>
          <View style={styles.textContainer}>
            <Text
              variant="titleMedium"
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: LIGHT_COLORS.TextColor,
              }}>
              Login With Google
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <Snackbar visible={isSnackbarVisible} onDismiss={onToggleSnackBar}>
        This Feature is not yet Available
      </Snackbar>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: LIGHT_COLORS.TextColor,
    flexDirection: 'row',
    padding: 10,
    width: '50%',
    borderRadius: 8,
    marginVertical: 30,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
});

export default GoogleButton;
