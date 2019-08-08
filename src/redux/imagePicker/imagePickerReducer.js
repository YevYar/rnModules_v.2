/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to the image picker.
 *
 * @format
 */

import {
  PHOTO_HAS_BEEN_CHOSEN,
  PHOTO_HAS_BEEN_TAKEN
} from './imagePickerActions';

export default (state = {}, action) => {
  switch (action.type) {
    case PHOTO_HAS_BEEN_CHOSEN:
      return {
        ...state,
        domainData: {
          ...state.domainData,
          chosenPhotos: [...state.domainData.chosenPhotos, action.uri]
        }
      };

    case PHOTO_HAS_BEEN_TAKEN:
      return {
        ...state,
        domainData: {
          ...state.domainData,
          takenPhotos: [...state.domainData.takenPhotos, action.uri]
        }
      };

    default:
      return state;
  }
};
