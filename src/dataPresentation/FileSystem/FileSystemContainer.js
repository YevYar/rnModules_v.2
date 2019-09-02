/**
 * This module contains container that gives data and functions to FileSystemScreen.
 *
 * @format
 */

import React from 'react';
import { Actions } from 'react-native-router-flux';

import FileSystemScreen from './FileSystemScreen';
import {
  dirs,
  getDirContent,
  getFileInfo,
  readFileContent,
  removeFile,
  writeFile
} from '../../services/FileSystemService';

const onItemPress = path =>
  readFileContent(path, (data) => {
    // console.log(data);
    Actions.fileContent({ content: data });
  });

/* Screen requires dirContent, dirName, directoryHasBeenChanged, dirs, onItemRemove, onItemLongPress */
export default props => (
  <FileSystemScreen
    {...props}
    dirs={dirs}
    onItemLongPress={getFileInfo}
    onItemPress={onItemPress}
    onItemRemove={removeFile}
  />
);
