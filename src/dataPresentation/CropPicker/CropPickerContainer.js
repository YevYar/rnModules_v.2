/**
 * This module contains container that gives data and functions to CropPickerScreen.
 *
 * @format
 */

import React from "react";
import { Actions } from "react-native-router-flux";

import CropPickerScreen from "./CropPickerScreen";

const bufferConfig = {
  minBufferMs: 15000,
  maxBufferMs: 50000,
  bufferForPlaybackMs: 5500,
  bufferForPlaybackAfterRebufferMs: 3000
};

const onMediaPress = mediaArray => i =>
  Actions.mediaView({
    mediaArray,
    mediaIndex: i
  });

/* Screen requires bufferConfig, chosenPhoto, navigation, navigationBarStyle, onMediaPress, mediaHasBeenTaken, mediaHaveBeenChosen,
 takenPhoto */
export default props => (
  <CropPickerScreen
    {...props}
    bufferConfig={bufferConfig}
    onMediaPress={onMediaPress}
  />
);
