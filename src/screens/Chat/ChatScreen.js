/**
 * This module contains screen that presents features of the react-native-gifted-chat and socket.io.
 *
 * @format
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocketIOClient from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat';
import { Platform, StatusBar, View } from 'react-native';

export default class ChatScreen extends Component {
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
