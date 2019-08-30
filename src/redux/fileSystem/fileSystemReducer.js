/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to the file system.
 *
 * @format
 */

import {
  DIRECTORY_CHANGED,
  DIRECTORY_CONTENT_RECEIVED
} from './fileSystemActions';

export default (state = {}, action) => {
  switch (action.type) {
    case DIRECTORY_CHANGED:
      return {
        ...state,
        domainData: {
          ...state.domainData,
          currentDirName: action.dirName
        }
      };

    case DIRECTORY_CONTENT_RECEIVED:
      return {
        ...state,
        domainData: {
          ...state.domainData,
          dirContent: action.content
        }
      };

    default:
      return state;
  }
};
