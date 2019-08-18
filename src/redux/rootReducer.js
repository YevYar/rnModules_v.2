/**
 * This module contains the root reducer.
 *
 * @format
 */

import { combineReducers } from "redux";

import appReducer from "./app/appReducer";
import cropPickerReducer from "./cropPicker/cropPickerReducer";

export default combineReducers({
  appState: appReducer,
  cropPickerState: cropPickerReducer
});
