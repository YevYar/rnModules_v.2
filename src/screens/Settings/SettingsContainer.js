/**
 * This module contains container that gives data and functions to SettingsScene.
 *
 * @format
 */

import React from 'react';

import SettingsScene from './SettingsScene';
import { languages } from '../../translations/index';

/* Screen requires language, languages, languageHasBeenChanged */
export default props => <SettingsScene {...props} languages={languages} />;
