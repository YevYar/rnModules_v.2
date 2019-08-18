/**
 * This module contains container that gives data and functions to TabDrawerScene.
 *
 * @format
 */

import React from "react";
import { Actions } from "react-native-router-flux";

import TabDrawerScene from "./TabDrawerScene";

const onSettingsPress = () => Actions.settings(Actions.currentParams);

/* Screen requires onSettingsPress */
export default props => (
  <TabDrawerScene {...props} onSettingsPress={onSettingsPress} />
);
