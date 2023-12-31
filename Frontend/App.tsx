import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {LIGHT_COLORS, DARK_COLORS} from './src/theme/colors';
import {NavigationContainer} from '@react-navigation/native';
import StackRoutes from './src/routes/StackRoutes';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? DARK_COLORS.StatusBar
      : LIGHT_COLORS.StatusBar,
    flex: 1,
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <Provider store={store}>
          <SafeAreaView style={backgroundStyle}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <StackRoutes />
          </SafeAreaView>
        </Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
