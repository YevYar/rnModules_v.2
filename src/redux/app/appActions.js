/**
 * This module contains actions related to the app settings.
 *
 * @format
 */

export const LANGUAGE_HAS_BEEN_CHANGED = 'app/LANGUAGE_HAS_BEEN_CHANGED';

export const languageHasBeenChanged = newLanguage => ({
  type: LANGUAGE_HAS_BEEN_CHANGED,
  newLanguage
});
