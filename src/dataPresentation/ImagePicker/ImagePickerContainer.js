/**
 * This module contains container that gives data and functions to ImagePickerScreen.
 *
 * @format
 */

import React from 'react';
import { Actions } from 'react-native-router-flux';

import ImagePickerScreen from './ImagePickerScreen';

const onImagePress = images => i =>
  Actions.imagesView({
    images,
    imageIndex: i
  });

/* Screen requires chosenPhoto, navigation, navigationBarStyle, onImagePress, photoHasBeenChosen, photoHasBeenTaken,
 takenPhoto, theme */
export default props => (
  <ImagePickerScreen {...props} onImagePress={onImagePress} />
);
