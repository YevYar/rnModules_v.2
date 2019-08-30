/**
 * This module contains saga that executes all functions related to the file system.
 *
 * @format
 */

import { call, put } from 'redux-saga/effects';

import i18next from '../../translations/index';
import showErrorMessage from '../../utils/showErrorMessage';
import { directoryContentHasBeenReceived } from './fileSystemActions';
import { dirs, getDirContent } from '../../services/FileSystemService';

export function* onDirectoryHasBeenChanged(action) {
  try {
    const content = yield call(getDirContent, dirs[action.dirName]);
    yield put(directoryContentHasBeenReceived(content));
  } catch (error) {
    console.log('onDirectoryHasBeenChanged error: ');
    console.log(error);
    showErrorMessage(
      i18next.t('getDirectoryContentErrorTitle'),
      i18next.t('getDirectoryContentErrorMessage')
    );
  }
}
