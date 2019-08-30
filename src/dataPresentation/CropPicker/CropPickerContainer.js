/**
 * This module contains container that gives data and functions to CropPickerScreen.
 *
 * @format
 */

import React from 'react';
import TouchID from 'react-native-touch-id';
import { Actions } from 'react-native-router-flux';
import { withTranslation } from 'react-i18next';

import CropPickerScreen from './CropPickerScreen';
import showCropPickerMenu from '../../services/CropPickerService';
import { shareMedia } from '../../services/FacebookService';

export default withTranslation()(({ mediaHasBeenTaken, mediaHaveBeenChosen, t, ...props }) => {
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
    cancelButtonTitle: t('cancel'),
    chooseFromLibraryButtonTitle: '',
    customButtons: [
      { name: 'sme', title: t('chooseMedia') },
      { name: 'sc', title: t('chooseImageCropping') },
      { name: 'smme', title: t('chooseMediaMultiple') },
      { name: 'tp', title: t('takePhoto') },
      { name: 'tc', title: t('takePhotoCropping') },
      { name: 'tv', title: t('takeVideo') }
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    },
    takePhotoButtonTitle: '',
    title: t('menuTitle')
  };

  const { backgroundColor } = props.navigationBarStyle;

  const cropPickerConfig = {
    cropperActiveWidgetColor: backgroundColor,
    cropperStatusBarColor: backgroundColor,
    cropperToolbarColor: backgroundColor
  };

  const touchIdConfig = {
    title: t('touchIdTitle'),
    imageColor: backgroundColor,
    cancelText: t('cancel'),
    passcodeFallback: true
  };

  const onGetMedia = () => {
    TouchID.authenticate(t('reason'), touchIdConfig)
      .then((response) => {
        console.log(response);
        // Alert.alert("Authenticated Successfully");
        showCropPickerMenu(
          mediaHasBeenTaken,
          mediaHaveBeenChosen,
          cropMenuOptions,
          cropPickerConfig
        );
      })
      .catch((error) => {
        // Alert.alert("Authenticated Failed");
        console.log(error);
        showCropPickerMenu(
          mediaHasBeenTaken,
          mediaHaveBeenChosen,
          cropMenuOptions,
          cropPickerConfig
        );
      });
  };

  const bufferConfig = {
    minBufferMs: 15000,
    maxBufferMs: 50000,
    bufferForPlaybackMs: 5500,
    bufferForPlaybackAfterRebufferMs: 3000
  };

  const onMediaPress = mediaArray => i =>
    Actions.mediaView({
      mediaArray,
      mediaIndex: i
    });

  /* Screen requires bufferConfig, chosenPhoto, navigation, navigationBarStyle, onGetMedia, onMediaLongPress, onMediaPress, takenPhoto */
  return (
    <CropPickerScreen
      {...props}
      bufferConfig={bufferConfig}
      onGetMedia={onGetMedia}
      onMediaPress={onMediaPress}
      onMediaLongPress={shareMedia}
    />
  );
});
