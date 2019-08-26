/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to the app settings.
 *
 * @format
 */

import { LANGUAGE_HAS_BEEN_CHANGED } from './appActions';

export default (state = {}, action) => {
  switch (action.type) {
    case LANGUAGE_HAS_BEEN_CHANGED:
      return {
        ...state,
        language: action.newLanguage
      };

    default:
      return state;
  }
};
