/**
 * This module contains actions related to the image picker.
 *
 * @format
 */

export const MEDIA_HAVE_BEEN_CHOSEN = 'cropPicker/MEDIA_HAVE_BEEN_CHOSEN';
export const MEDIA_HAS_BEEN_TAKEN = 'cropPicker/MEDIA_HAS_BEEN_TAKEN';

export const mediaHasBeenTaken = mediaData => ({
  type: MEDIA_HAS_BEEN_TAKEN,
  mediaData
});

export const mediaHaveBeenChosen = mediaDataArray => ({
  type: MEDIA_HAVE_BEEN_CHOSEN,
  mediaDataArray
});
