/**
 * This module contains actions related to the file system.
 *
 * @format
 */

export const DIRECTORY_CHANGED = 'fileSystem/DIRECTORY_CHANGED';
export const DIRECTORY_CONTENT_RECEIVED =
  'fileSystem/DIRECTORY_CONTENT_RECEIVED';
export const PATH_IN_DIRECTORY_CHANGED = 'fileSystem/PATH_IN_DIRECTORY_CHANGED';

export const directoryContentHasBeenReceived = content => ({
  type: DIRECTORY_CONTENT_RECEIVED,
  content
});

export const directoryHasBeenChanged = dirName => ({
  type: DIRECTORY_CHANGED,
  dirName
});

export const pathInDirectoryHasBeenChanged = dirPath => ({
  type: PATH_IN_DIRECTORY_CHANGED,
  dirPath
});
