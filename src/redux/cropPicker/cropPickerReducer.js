/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to the image picker.
 *
 * @format
 */

import {
  MEDIA_HAVE_BEEN_CHOSEN,
  MEDIA_HAS_BEEN_TAKEN
} from './cropPickerActions';

export default (state = {}, action) => {
  switch (action.type) {
    case MEDIA_HAVE_BEEN_CHOSEN:
      return {
        ...state,
        domainData: {
          ...state.domainData,
          chosenMedia: [
            ...state.domainData.chosenMedia,
            ...action.mediaDataArray
          ]
        }
      };

    case MEDIA_HAS_BEEN_TAKEN:
      return {
        ...state,
        domainData: {
          ...state.domainData,
          takenMedia: [...state.domainData.takenMedia, action.mediaData]
        }
      };

    default:
      return state;
  }
};
