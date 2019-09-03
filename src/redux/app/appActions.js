/**
 * This module contains actions related to the app settings.
 *
 * @format
 */

export const LANGUAGE_HAS_BEEN_CHANGED = 'app/LANGUAGE_HAS_BEEN_CHANGED';
export const LOADING_HAS_BEEN_FINISHED = 'app/LOADING_HAS_BEEN_FINISHED';
export const LOADING_HAS_BEEN_STARTED = 'app/LOADING_HAS_BEEN_STARTED';

export const languageHasBeenChanged = newLanguage => ({
  type: LANGUAGE_HAS_BEEN_CHANGED,
  newLanguage
});

export const loadingHasBeenFinished = () => ({type: LOADING_HAS_BEEN_FINISHED});

export const loadingHasBeenStarted = () => ({ type: LOADING_HAS_BEEN_STARTED });
