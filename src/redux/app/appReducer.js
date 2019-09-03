/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to the app settings.
 *
 * @format
 */

import {
  LANGUAGE_HAS_BEEN_CHANGED,
  LOADING_HAS_BEEN_FINISHED,
  LOADING_HAS_BEEN_STARTED
} from './appActions';

export default (state = {}, action) => {
  switch (action.type) {
    case LANGUAGE_HAS_BEEN_CHANGED:
      return {
        ...state,
        language: action.newLanguage
      };

    case LOADING_HAS_BEEN_FINISHED:
      return {
        ...state,
        isLoadingSomething: false
      };

    case LOADING_HAS_BEEN_STARTED:
      return {
        ...state,
        isLoadingSomething: true
      };

    default:
      return state;
  }
};
