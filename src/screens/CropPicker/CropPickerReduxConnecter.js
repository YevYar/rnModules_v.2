/**
 * This HOC contains all action creators and store's data to send via props to CropPickerContainer.
 *
 * @format
 */

import CropPickerContainer from './CropPickerContainer';
import wrapIntoRedux from '../../utils/intoReduxWrapper';
import {
  mediaHasBeenTaken,
  mediaHaveBeenChosen
} from '../../redux/cropPicker/cropPickerActions';

const mapStateToProps = state => ({
  chosenMedia: state.cropPickerState.domainData.chosenMedia,
  takenMedia: state.cropPickerState.domainData.takenMedia
});

const mapDispatchToProps = { mediaHasBeenTaken, mediaHaveBeenChosen };

export default wrapIntoRedux(
  CropPickerContainer,
  mapStateToProps,
  mapDispatchToProps
);
