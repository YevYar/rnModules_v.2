/**
 * This module contains actions related to the image picker.
 *
 * @format
 */

export const PHOTO_HAS_BEEN_CHOSEN = 'imagePicker/PHOTO_HAS_BEEN_CHOSEN';
export const PHOTO_HAS_BEEN_TAKEN = 'imagePicker/PHOTO_HAS_BEEN_TAKEN';

export const photoHasBeenTaken = uri => ({ type: PHOTO_HAS_BEEN_TAKEN, uri });

export const photoHasBeenChosen = uri => ({ type: PHOTO_HAS_BEEN_CHOSEN, uri });
