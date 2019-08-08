/**
 * This module contains the root reducer.
 *
 * @format
 */

import { combineReducers } from 'redux';

import imagePickerReducer from './imagePicker/imagePickerReducer';

export default combineReducers({ imagePickerState: imagePickerReducer });
