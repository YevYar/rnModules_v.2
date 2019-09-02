/**
 * This module contains container that gives data and functions to FileContentScreen.
 *
 * @format
 */

import React from 'react';

import FileContentScreen from './FileContentScreen';
import {
  dirs,
  getDirContent,
  getFileInfo,
  readFileContent,
  removeFile,
  writeFile
} from '../../services/FileSystemService';

/* Screen requires content */
export default (props) => {
  console.log(props);
  return <FileContentScreen {...props} />;
};
