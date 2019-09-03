/**
 * This HOC contains all action creators and store's data to send via props to FileSystemContainer.
 *
 * @format
 */

import FileSystemContainer from './FileSystemContainer';
import wrapIntoRedux from '../../utils/intoReduxWrapper';
import {
  loadingHasBeenFinished,
  loadingHasBeenStarted
} from '../../redux/app/appActions';
import {
  directoryHasBeenChanged,
  pathInDirectoryHasBeenChanged
} from '../../redux/fileSystem/fileSystemActions';

const mapStateToProps = state => ({
  dirContent: state.fileSystemState.domainData.dirContent,
  dirName: state.fileSystemState.domainData.currentDirName,
  isLoadingSomething: state.appState.isLoadingSomething,
  pathInDir: state.fileSystemState.domainData.currentPathInDir
});

const mapDispatchToProps = {
  directoryHasBeenChanged,
  loadingHasBeenFinished,
  loadingHasBeenStarted,
  pathInDirectoryHasBeenChanged
};

export default wrapIntoRedux(
  FileSystemContainer,
  mapStateToProps,
  mapDispatchToProps
);
