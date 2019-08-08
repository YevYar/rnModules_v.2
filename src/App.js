/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ThemeContext, getTheme } from 'react-native-material-ui';

import LightTheme from './themes/LightTheme';
import RootNavigator from './navigators/RootNavigator';

const App = () => (
  <ThemeContext.Provider value={getTheme(LightTheme)}>
    <RootNavigator />
  </ThemeContext.Provider>
);

export default App;
