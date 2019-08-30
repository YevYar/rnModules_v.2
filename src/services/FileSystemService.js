/**
 * This module contains service that works with react-native-fs.
 *
 * @format
 */

import {
  CachesDirectoryPath,
  DocumentDirectoryPath,
  ExternalCachesDirectoryPath,
  ExternalDirectoryPath,
  ExternalStorageDirectoryPath,
  FileProtectionKeys,
  LibraryDirectoryPath,
  MainBundlePath,
  PicturesDirectoryPath,
  TemporaryDirectoryPath,
  readDir,
  readFile,
  stat,
  unlink
} from 'react-native-fs';

export const dirs = {
  CachesDirectoryPath,
  DocumentDirectoryPath,
  ExternalCachesDirectoryPath,
  ExternalDirectoryPath,
  ExternalStorageDirectoryPath,
  FileProtectionKeys,
  LibraryDirectoryPath,
  MainBundlePath,
  PicturesDirectoryPath,
  TemporaryDirectoryPath
};

export const getDirContent = dir => readDir(dir);

export const getFileInfo = path => stat(path);

export const readFileContent = path => readFile(path);

export const removeFile = path => unlink(path);

export const writeFile = (path, text, encoding) =>
  writeFile(path, text, encoding);
