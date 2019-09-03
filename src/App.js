/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { ThemeContext, getTheme } from 'react-native-material-ui';

import LightTheme from './themes/LightTheme';
import RootNavigator from './navigators/RootNavigator';
import i18next from './translations/index'; // this import is used to init react-i18next
import store from './redux/store';
import wrapIntoRedux from './utils/intoReduxWrapper';
import { getLocale } from './services/DeviceInfoService';
import { languageHasBeenChanged } from './redux/app/appActions';

class App extends Component {
  static propTypes = { languageHasBeenChanged: PropTypes.func.isRequired };

  componentDidMount() {
    SplashScreen.hide();
    this.props.languageHasBeenChanged(getLocale().substr(0, 2));
  }

  render() {
    return (
      <ThemeContext.Provider value={getTheme(LightTheme)}>
        <RootNavigator />
      </ThemeContext.Provider>
    );
  }
}

const mapDispatchToProps = { languageHasBeenChanged };

const ConnectedApp = wrapIntoRedux(App, () => ({}), mapDispatchToProps);

const Root = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export default Root;
