/**
 * This module contains service that works with sockets for react-native-gifted-chat.
 *
 * @format
 */

import SocketIOClient from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat';

export default class ChatService {
  constructor(ref) {
    this.chatRef = ref;
    this.socket = SocketIOClient('http://localhost:3000');

    this.storeMessages = this.storeMessages.bind(this);
    this.onReceivedMessage = this.onReceivedMessage.bind(this);

    this.socket.on('id', _id => this.chatRef.setState({ _id }));
    this.socket.on('message', this.onReceivedMessage);
  }

  onSend(messages = []) {
    this.socket.emit('message', messages[0]);
    this.storeMessages(messages);
  }

  onReceivedMessage(messages = []) {
    this.storeMessages(messages);
  }

  storeMessages(messages = []) {
    this.chatRef.setState(previousState => ({ messages: GiftedChat.append(previousState.messages, messages) }));
  }
}
