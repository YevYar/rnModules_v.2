/**
 * This module contains screen that presents features of the react-native-image-picker.
 *
 * @format
 */

import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from 'react-native-material-ui';
import { Platform, StatusBar, View } from 'react-native';

import Gallery from '../commonComponents/Gallery';
import createStyles from './ImagePicker.styles';
import intoThemeWrapper from '../../utils/intoThemeWrapper';

const options = {
  chooseFromLibraryButtonTitle: '',
  customButtons: [
    { name: 'take', title: 'Take a photo' },
    { name: 'choose', title: 'Choose from library' }
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  },
  takePhotoButtonTitle: '',
  title: 'Select photo'
};

class ImagePickerScreen extends Component {
  static propTypes = {
    chosenPhotos: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
    navigationBarStyle: PropTypes.object.isRequired,
    onImagePress: PropTypes.func.isRequired,
    photoHasBeenChosen: PropTypes.func.isRequired,
    photoHasBeenTaken: PropTypes.func.isRequired,
    takenPhotos: PropTypes.array.isRequired,
    theme: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.showImagePicker = this.showImagePicker.bind(this);
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
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  launchCamera() {
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);
      this.props.photoHasBeenTaken(response.uri);
    });
  }

  launchImageLibrary() {
    ImagePicker.launchImageLibrary(options, (response) => {
      // console.log('Response = ', response);
      this.props.photoHasBeenChosen(response.uri);
    });
  }

  showImagePicker() {
    ImagePicker.showImagePicker(options, (response) => {
      switch (response.customButton) {
        case 'choose':
          this.launchImageLibrary();
          break;

        case 'take':
          this.launchCamera();
          break;

        default:
          break;
      }
    });
  }

  render() {
    const { chosenPhotos, onImagePress, takenPhotos, theme } = this.props;
    const styles = createStyles(theme.palette);

    return (
      <View style={styles.screen}>
        <Button
          text="Let's get a photo"
          accent
          raised
          onPress={this.showImagePicker}
          style={{ container: styles.letButton }}
        />
        <Gallery
          images={chosenPhotos}
          onImagePress={onImagePress(chosenPhotos)}
        />
        <Gallery
          images={takenPhotos}
          onImagePress={onImagePress(takenPhotos)}
        />
      </View>
    );
  }
}

export default intoThemeWrapper(ImagePickerScreen);
