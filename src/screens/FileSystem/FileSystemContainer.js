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
  getFileInfo,
  readFileContent,
  removeFile
} from '../../services/FileSystemService';
import i18next from '../../translations/index';
import showMessage from '../../utils/showMessage';

/* Screen requires dirContent, dirName, directoryHasBeenChanged, dirs, isBackFolderLineVisible, isLoadingSomething,
navigation, navigationBarStyle, onBackFolderPress, onItemLongPress, onItemPress, onItemRemove, pathInDirectoryHasBeenChanged */
const FileSystemContainer = ({
  dirName,
  loadingHasBeenFinished,
  loadingHasBeenStarted,
  pathInDir,
  pathInDirectoryHasBeenChanged,
  ...props
}) => {
  const onBackFolderPress = () =>
    pathInDirectoryHasBeenChanged(pathInDir.substring(0, pathInDir.lastIndexOf('/'))); // go to the previous folder

  const onItemPress = (path) => {
    loadingHasBeenStarted();
    readFileContent(
      path,
      (data) => {
        // console.log(data);
        Actions.fileContent({ content: data });
      },
      (e) => {
        console.log('readFileContent error:');
        console.log(e);
        loadingHasBeenFinished();
        showMessage(
          i18next.t('fileContentErrorTitle'),
          `${i18next.t('fileContentErrorMessage')}: ${e}`
        );
      }
    );
  };

  return (
    <FileSystemScreen
      {...props}
      dirName={dirName}
      dirs={dirs}
      isBackFolderLineVisible={
        pathInDir !== '' && // if we change the main folder (folders from picker), we have empty pathInDir. So we don't need show '...'
        /**
         * For Android: if we go to the deeper folder in the main folder and then go back to the main folder, we don't have empty pathInDir.
         * (on Android ways to the main folders from dirs don't contain / in the end) */
        pathInDir !== dirs[dirName] &&
        /**
         * For IOS: if we go to the deeper folder in the main folder and then go back to the main folder, we don't have empty pathInDir.
         * (on IOS ways to the main folders from dirs contain / in the end) */
        pathInDir !== dirs[dirName].substring(0, dirs[dirName].lastIndexOf('/'))
      }
      onBackFolderPress={onBackFolderPress}
      onItemLongPress={getFileInfo}
      onItemPress={onItemPress}
      onItemRemove={removeFile}
      pathInDirectoryHasBeenChanged={pathInDirectoryHasBeenChanged}
    />
  );
};

FileSystemContainer.propTypes = {
  dirName: PropTypes.string.isRequired,
  loadingHasBeenFinished: PropTypes.func.isRequired,
  loadingHasBeenStarted: PropTypes.func.isRequired,
  pathInDir: PropTypes.string.isRequired,
  pathInDirectoryHasBeenChanged: PropTypes.func.isRequired
};

export default FileSystemContainer;
