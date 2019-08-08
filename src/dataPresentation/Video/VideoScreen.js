/**
 * This module contains screen that presents features of the react-native-video.
 *
 * @format
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StatusBar, View } from 'react-native';

export default class ImagePicker extends Component {
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
    return <View />;
  }
}
