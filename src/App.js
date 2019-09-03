/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { ThemeContext, getTheme } from 'react-native-material-ui';

import LightTheme from './themes/LightTheme';
import RootNavigator from './navigators/RootNavigator';
import i18next from './translations/index'; // this import is used to init react-i18next
import store from './redux/store';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeContext.Provider value={getTheme(LightTheme)}>
          <RootNavigator />
        </ThemeContext.Provider>
      </Provider>
    );
  }
}

export default App;
