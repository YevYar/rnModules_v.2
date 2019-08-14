/**
 * This module contains screen that presents features of the react-native-image-crop-picker.
 *
 * @format
 */

import CropPicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from 'react-native-material-ui';
import { Platform, StatusBar, Text, View } from 'react-native';

import Gallery from '../commonComponents/Gallery';
import createStyles from './CropPicker.styles';
import intoThemeWrapper from '../../utils/intoThemeWrapper';

const cropMenuOptions = {
  /**
   *  c - crop
   *  m - multiple
   *  me - media
   *  p - photo
   *  s - select
   *  t - take
   *  v - video
   */
  chooseFromLibraryButtonTitle: '',
  customButtons: [
    { name: 'sme', title: 'Choose a media' },
    { name: 'sc', title: 'Choose an image with cropping' },
    { name: 'smme', title: 'Choose a few media' },
    { name: 'tp', title: 'Take a photo' },
    { name: 'tc', title: 'Take a photo with cropping' },
    { name: 'tv', title: 'Take a video' }
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  },
  takePhotoButtonTitle: '',
  title: 'Select media'
};

const generalRequestObject = {
  enableRotationGesture: true,
  forceJpg: true,
  freeStyleCropEnabled: true,
  maxFiles: 3,
  showCropGuidelines: false
};

class CropPickerScreen extends Component {
  static propTypes = {
    bufferConfig: PropTypes.object.isRequired,
    chosenMedia: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
    navigationBarStyle: PropTypes.object.isRequired,
    onMediaPress: PropTypes.func.isRequired,
    mediaHasBeenTaken: PropTypes.func.isRequired,
    mediaHaveBeenChosen: PropTypes.func.isRequired,
    takenMedia: PropTypes.array.isRequired,
    theme: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.showCropPickerMenu = this.showCropPickerMenu.bind(this);
    this.launchCamera = this.launchCamera.bind(this);
    this.launchImageLibrary = this.launchImageLibrary.bind(this);
  }

  componentDidMount() {
    const { navigation, navigationBarStyle } = this.props;
    this._navListener = navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(navigationBarStyle.backgroundColor);
    });
    generalRequestObject.cropperActiveWidgetColor =
      navigationBarStyle.backgroundColor;
    generalRequestObject.cropperStatusBarColor =
      navigationBarStyle.backgroundColor;
    generalRequestObject.cropperToolbarColor =
      navigationBarStyle.backgroundColor;
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  launchCamera(options) {
    CropPicker.openCamera({ ...generalRequestObject, ...options })
      .then((response) => {
        console.log(response);
        this.props.mediaHasBeenTaken({
          mime: response.mime,
          path: response.path
        });
      })
      .catch(error => console.log(error));
  }

  launchImageLibrary(options) {
    CropPicker.openPicker({ ...generalRequestObject, ...options })
      .then((response) => {
        console.log(response);
        this.props.mediaHaveBeenChosen(Array.isArray(response)
            ? response.map(item => ({ mime: item.mime, path: item.path }))
            : [{ mime: response.mime, path: response.path }]);
      })
      .catch(error => console.log(error));
  }

  showCropPickerMenu() {
    ImagePicker.showImagePicker(cropMenuOptions, (response) => {
      switch (response.customButton) {
        case 'sc':
          this.launchImageLibrary({
            cropping: true,
            height: 400,
            mediaType: 'photo',
            width: 300
          });
          break;

        case 'sme':
          this.launchImageLibrary();
          break;

        case 'smme':
          this.launchImageLibrary({ multiple: true });
          break;

        case 'tc':
          this.launchCamera({
            cropping: true,
            height: 400,
            mediaType: 'photo',
            width: 300
          });
          break;

        case 'tp':
          this.launchCamera({ mediaType: 'photo' });
          break;

        case 'tv':
          this.launchCamera({ mediaType: 'video' });
          break;

        default:
          break;
      }
    });
  }

  render() {
    const {
      bufferConfig,
      chosenMedia,
      onMediaPress,
      takenMedia,
      theme
    } = this.props;
    const styles = createStyles(theme.palette);

    return (
      <View style={styles.screen}>
        <Button
          text="Let's get a media"
          accent
          raised
          onPress={this.showCropPickerMenu}
          style={{ container: styles.letButton }}
        />
        {chosenMedia.length > 0 && (
          <View style={styles.gridView}>
            <Text style={styles.text}>Chosen medias</Text>
            <Gallery
              bufferConfig={bufferConfig}
              media={chosenMedia}
              onMediaPress={onMediaPress(chosenMedia)}
            />
          </View>
        )}
        {takenMedia.length > 0 && (
          <View style={styles.gridView}>
            <Text style={styles.text}>Taken medias</Text>
            <Gallery
              bufferConfig={bufferConfig}
              media={takenMedia}
              onMediaPress={onMediaPress(takenMedia)}
            />
          </View>
        )}
      </View>
    );
  }
}

export default intoThemeWrapper(CropPickerScreen);
