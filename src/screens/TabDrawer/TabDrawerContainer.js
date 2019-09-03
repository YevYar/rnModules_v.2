/**
 * This module contains container that gives data and functions to TabDrawerScene.
 *
 * @format
 */

import React from 'react';
import { Actions } from 'react-native-router-flux';

import TabDrawerScene from './TabDrawerScene';
import { getAccountInfo } from '../../services/FacebookService';

const loginData = {
  facebook: { permissions: ['email', 'public_profile'] },
  instagram: {
    clientId: 'a805d796528b4ed485dfd5323442f6d0',
    redirectUrl: 'http://www.google.com',
    scopes: ['basic']
  },
  twitter: {
    TWITTER_COMSUMER_KEY: 'UH6tuXSAiNdL2p2v1MrAfpjCr',
    TWITTER_CONSUMER_SECRET:
      '7F238uRVysrTAP8vmyuSmh3I60heBJtfOVdllKwd0mHdRPpC3m'
  }
};

const onSettingsPress = () => Actions.settings(Actions.currentParams);

/* Screen requires getAccountInfo, loginData, onSettingsPress */
export default props => (
  <TabDrawerScene
    {...props}
    getAccountInfo={getAccountInfo}
    loginData={loginData}
    onSettingsPress={onSettingsPress}
  />
);
