/**
 * This is a root Saga.
 *
 * @format
 */

import { takeEvery } from 'redux-saga/effects';

/** *********
 * ACTIONS  *
 ********** */
import {
  DIRECTORY_CHANGED,
  PATH_IN_DIRECTORY_CHANGED
} from './fileSystem/fileSystemActions';

/** **********
 * HANDLERS  *
 *********** */
import { onDirectoryHasBeenChanged } from './fileSystem/fileSystemSaga';

export default function* rootSaga() {
  yield takeEvery(DIRECTORY_CHANGED, onDirectoryHasBeenChanged);
  yield takeEvery(PATH_IN_DIRECTORY_CHANGED, onDirectoryHasBeenChanged);
}
