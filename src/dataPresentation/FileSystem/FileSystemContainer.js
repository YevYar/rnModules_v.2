/**
 * This module contains container that gives data and functions to FileSystemScreen.
 *
 * @format
 */

import React from 'react';

import FileSystemScreen from './FileSystemScreen';
import {
  dirs,
  getDirContent,
  getFileInfo,
  readFileContent,
  removeFile,
  writeFile
} from '../../services/FileSystemService';

/* Screen requires dirContent, dirName, directoryHasBeenChanged, dirs */
export default props => <FileSystemScreen {...props} dirs={dirs} />;
