/**
 * This module contains screen that presents features of the react-native-admob.
 *
 * @format
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AdMobBanner } from 'react-native-admob';
import { Platform, StatusBar, View } from 'react-native';

export default class AdmobScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    navigationBarStyle: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { navigation, navigationBarStyle } = this.props;
    this._navListener = navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(navigationBarStyle.backgroundColor);
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <View>
        <AdMobBanner
          adSize="largeBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.log(error)}
        />
      </View>
    );
  }
}
