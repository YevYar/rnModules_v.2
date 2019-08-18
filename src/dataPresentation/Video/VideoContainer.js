/**
 * This module contains container that gives data and functions to VideoScreen.
 *
 * @format
 */

import React from "react";
import { Actions } from "react-native-router-flux";

import VideoScreen from "./VideoScreen";

const onImagePress = images => i =>
  Actions.imagesView({
    images,
    imageIndex: i
  });

const bufferConfig = {
  minBufferMs: 15000,
  maxBufferMs: 50000,
  bufferForPlaybackMs: 5500,
  bufferForPlaybackAfterRebufferMs: 3000
};

/* Screen requires bufferConfig */
export default props => <VideoScreen {...props} bufferConfig={bufferConfig} />;
