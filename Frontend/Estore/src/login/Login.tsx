/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LIGHT_COLORS} from '../theme/colors';
import {TextInput, Text, HelperText} from 'react-native-paper';
import GoogleButton from '../components/buttons/GoogleButton';
import {Button} from 'react-native-paper';
import {Formik} from 'formik';
import {APP_NAME, BACKEND_URL} from '../constants/constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}: any) => {
  const [isPasswordVissible, setIsPasswordVissible] = React.useState(false);
  const [hasError, setHasError] = React.useState({
    status: false,
    field: '',
    message: '',
  });

  const loginSubmit = async (values: any) => {
    if (!values?.username) {
      return setHasError({
        status: true,
        field: 'username',
        message: 'Username Not Provided',
      });
    }
    if (!values?.password) {
      return setHasError({
        status: true,
        field: 'password',
        message: 'Password Not Provided',
      });
    }
    setHasError({status: false, field: '', message: ''});

    try {
      const response = await axios({
        method: 'post',
        url: `${BACKEND_URL}login`,
        data: {
          username: values?.username,
          password: values?.password,
        },
      });
      try {
        await AsyncStorage.setItem('Token', response.data.token);
        await navigation.navigate('Dashboard');
      } catch (err) {
        console.log(err);
      }
      console.log(response.data.token, 'response');
    } catch (err) {
      setHasError({
        status: true,
        field: err?.response?.data?.field,
        message: err?.response?.data?.msg,
      });
    }
  };

  const getToken = async () => {
    let token = await AsyncStorage.getItem('Token');
    if (token) {
      navigation.navigate('Dashboard');
    }
  };

  React.useEffect(() => {
    getToken();
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text
          style={{
            fontSize: 80,
            fontFamily: 'StylishCalligraphyDemo-XPZZ',
            color: LIGHT_COLORS.TextColor,
          }}>
          {APP_NAME}
        </Text>
      </View>
      <HelperText type="error" visible={hasError.status}>
        {hasError.message}
      </HelperText>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={loginSubmit}>
        {({values, handleChange, handleBlur, handleSubmit}) => (
          <>
            <View style={styles.input}>
              <TextInput
                label="Username / Email"
                inputMode="email"
                id="username"
                error={hasError.status && hasError.field === 'username'}
                right={<TextInput.Icon icon="email" />}
                theme={{
                  colors: {
                    onSurfaceVariant: LIGHT_COLORS.TextColor,
                  },
                }}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                activeUnderlineColor={LIGHT_COLORS.TextColor}
                underlineColor={LIGHT_COLORS.TextColor}
                underlineStyle={{borderColor: LIGHT_COLORS.TextColor}}
                style={{backgroundColor: '#5b3892'}}
              />
              <TextInput
                label="Password"
                inputMode="text"
                id="password"
                error={hasError.status && hasError.field === 'password'}
                secureTextEntry={!isPasswordVissible}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                right={
                  <TextInput.Icon
                    icon="eye"
                    onPress={() => {
                      setIsPasswordVissible(!isPasswordVissible);
                    }}
                  />
                }
                theme={{
                  colors: {
                    onSurfaceVariant: LIGHT_COLORS.TextColor,
                  },
                }}
                activeUnderlineColor={LIGHT_COLORS.TextColor}
                underlineColor={LIGHT_COLORS.TextColor}
                underlineStyle={{borderColor: LIGHT_COLORS.TextColor}}
                style={{backgroundColor: '#5b3892'}}
              />
              <Button
                mode="outlined"
                onPress={handleSubmit}
                style={{borderWidth: 2, borderColor: LIGHT_COLORS.TextColor}}>
                <Text
                  style={{fontWeight: 'bold', color: LIGHT_COLORS.TextColor}}>
                  Login
                </Text>
              </Button>
            </View>
          </>
        )}
      </Formik>

      <GoogleButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5b3892',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  spacing: {
    marginVertical: 12,
  },
  input: {
    minWidth: '80%',
    gap: 50,
    padding: 20,
    marginVertical: 10,
  },
});

export default Login;
