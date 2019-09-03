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

import i18next from '../translations/index';
import showMessage from '../utils/showMessage';

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

export const getFileInfo = (
  path,
  callback = info =>
    showMessage(
      i18next.t('aboutFileTitle'),
      `
      creation time: ${info.ctime}
      last modification: ${info.mtime}
      path: ${info.path}
      size: ${info.size}`
    ),
  error = (e) => {
    console.log('getFileInfo error:');
    console.log(e);
    showMessage(
      i18next.t('aboutFileErrorTitle'),
      `${i18next.t('aboutFileErrorMessage')}: ${e}`
    );
  }
) =>
  stat(path)
    .then(callback)
    .catch(error);

export const readFileContent = (
  path,
  callback,
  error = (e) => {
    console.log('readFileContent error:');
    console.log(e);
    showMessage(
      i18next.t('fileContentErrorTitle'),
      `${i18next.t('fileContentErrorMessage')}: ${e}`
    );
  }
) =>
  readFile(path)
    .then(callback)
    .catch(error);

export const removeFile = path => unlink(path);
