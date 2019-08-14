/**
 * This module contains the root reducer.
 *
 * @format
 */

import { combineReducers } from 'redux';

import cropPickerReducer from './cropPicker/cropPickerReducer';

export default combineReducers({ cropPickerState: cropPickerReducer });
