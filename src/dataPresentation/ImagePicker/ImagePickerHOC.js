/**
 * This HOC contains all action creators and store's data to send via props to ImagePickerContainer.
 *
 * @format
 */

import ImagePickerContainer from './ImagePickerContainer';
import wrapIntoRedux from '../../utils/intoReduxWrapper';
import {
  photoHasBeenChosen,
  photoHasBeenTaken
} from '../../redux/imagePicker/imagePickerActions';

const mapStateToProps = (state, ownProps) => ({
  chosenPhotos: state.imagePickerState.domainData.chosenPhotos,
  takenPhotos: state.imagePickerState.domainData.takenPhotos
});

const mapDispatchToProps = { photoHasBeenChosen, photoHasBeenTaken };

export default wrapIntoRedux(
  ImagePickerContainer,
  mapStateToProps,
  mapDispatchToProps
);
