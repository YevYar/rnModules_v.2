/**
 * This module contains actions related to the file system.
 *
 * @format
 */

export const DIRECTORY_CHANGED = 'fileSystem/DIRECTORY_CHANGED';
export const DIRECTORY_CONTENT_RECEIVED =
  'fileSystem/DIRECTORY_CONTENT_RECEIVED';

export const directoryContentHasBeenReceived = content => ({
  type: DIRECTORY_CONTENT_RECEIVED,
  content
});

export const directoryHasBeenChanged = dirName => ({
  type: DIRECTORY_CHANGED,
  dirName
});
