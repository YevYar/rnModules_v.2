/**
 * This HOC contains all action creators and store's data to send via props to FileSystemContainer.
 *
 * @format
 */

import FileSystemContainer from './FileSystemContainer';
import wrapIntoRedux from '../../utils/intoReduxWrapper';
import {
  directoryHasBeenChanged,
  pathInDirectoryHasBeenChanged
} from '../../redux/fileSystem/fileSystemActions';

const mapStateToProps = state => ({
  dirContent: state.fileSystemState.domainData.dirContent,
  dirName: state.fileSystemState.domainData.currentDirName,
  pathInDir: state.fileSystemState.domainData.currentPathInDir
});

const mapDispatchToProps = {
  directoryHasBeenChanged,
  pathInDirectoryHasBeenChanged
};

export default wrapIntoRedux(
  FileSystemContainer,
  mapStateToProps,
  mapDispatchToProps
);
