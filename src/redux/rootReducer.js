/**
 * This module contains the root reducer.
 *
 * @format
 */

import { combineReducers } from 'redux';

import appReducer from './app/appReducer';
import cropPickerReducer from './cropPicker/cropPickerReducer';
import fileSystemReducer from './fileSystem/fileSystemReducer';

export default combineReducers({
  appState: appReducer,
  cropPickerState: cropPickerReducer,
  fileSystemState: fileSystemReducer
});
