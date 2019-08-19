/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ThemeContext, getTheme } from 'react-native-material-ui';

import LightTheme from './themes/LightTheme';
import RootNavigator from './navigators/RootNavigator';
import i18next from './translations/index';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <ThemeContext.Provider value={getTheme(LightTheme)}>
      <I18nextProvider i18n={i18next}>
        <RootNavigator />
      </I18nextProvider>
    </ThemeContext.Provider>
  </Provider>
);

export default App;
