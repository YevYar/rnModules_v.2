/**
 * This module contains container that gives data and functions to FileSystemScreen.
 *
 * @format
 */

import PropTypes from 'prop-types';
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
const FileSystemContainer = (props) => {
  const { dirName, pathInDir, pathInDirectoryHasBeenChanged } = props;

  const onBackFolderPress = () =>
    pathInDirectoryHasBeenChanged(pathInDir.substring(0, pathInDir.lastIndexOf('/')));

  return (
    <FileSystemScreen
      {...props}
      dirs={dirs}
      isBackFolderLineVisible={pathInDir !== '' && pathInDir !== dirs[dirName]}
      onBackFolderPress={onBackFolderPress}
      onItemLongPress={getFileInfo}
      onItemPress={onItemPress}
      onItemRemove={removeFile}
    />
  );
};

FileSystemContainer.propTypes = {
  dirName: PropTypes.string.isRequired,
  pathInDir: PropTypes.string.isRequired,
  pathInDirectoryHasBeenChanged: PropTypes.func.isRequired
};

export default FileSystemContainer;
