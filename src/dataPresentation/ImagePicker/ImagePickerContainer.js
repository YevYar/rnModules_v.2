/**
 * This module contains container that gives data and functions to ImagePickerScreen.
 *
 * @format
 */

import React from 'react';

import ImagePickerScreen from './ImagePickerScreen';

/* Screen requires chosenPhoto, navigation, navigationBarStyle, photoHasBeenChosen, photoHasBeenTaken,
 takenPhoto, theme */
export default props => <ImagePickerScreen {...props} />;
