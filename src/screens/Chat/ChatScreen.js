/**
 * This module contains screen that presents features of the react-native-gifted-chat and socket.io.
 *
 * @format
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GiftedChat } from 'react-native-gifted-chat';
import { Platform, StatusBar } from 'react-native';

import ChatService from '../../services/ChatService';

export default class ChatScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    navigationBarStyle: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { messages: [], _id: -1 };
    this.service = new ChatService(this);
  }

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
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.service.onSend(messages)}
        user={{ _id: this.state._id }}
      />
    );
  }
}
