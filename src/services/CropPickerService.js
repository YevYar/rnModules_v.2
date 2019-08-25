/**
 * This module contains service that works with react-native-image-crop-picker and react-native-image-picker.
 *
 * @format
 */

import CropPicker from "react-native-image-crop-picker";
import ImagePicker from "react-native-image-picker";

import i18next from "../translations/index";

const getGeneralRequestObject = () => ({
  cropperCancelText: i18next.t("cancel"),
  cropperChooseText: i18next.t("cropperChooseText"),
  cropperToolbarTitle: i18next.t("cropperToolbarTitle"),
  enableRotationGesture: true,
  forceJpg: true,
  freeStyleCropEnabled: true,
  loadingLabelText: i18next.t("loadingLabelText"),
  maxFiles: 3,
  showCropGuidelines: false
});

export const launchCamera = (
  mediaHasBeenTaken,
  config,
  onError = () => null
) => {
  CropPicker.openCamera({ ...getGeneralRequestObject(), ...config })
    .then(response => {
      console.log(response);
      mediaHasBeenTaken({
        mime: response.mime,
        path: response.path
      });
    })
    .catch(error => {
      console.log(error);
      onError(error);
    });
};

export const launchImageLibrary = (
  mediaHaveBeenChosen,
  config,
  onError = () => null
) => {
  CropPicker.openPicker({ ...getGeneralRequestObject(), ...config })
    .then(response => {
      console.log(response);
      mediaHaveBeenChosen(
        Array.isArray(response)
          ? response.map(item => ({ mime: item.mime, path: item.path }))
          : [{ mime: response.mime, path: response.path }]
      );
    })
    .catch(error => {
      console.log(error);
      onError(error);
    });
};

const showCropPickerMenu = (
  mediaHasBeenTaken,
  mediaHaveBeenChosen,
  cropMenuOptions,
  cropPickerConfig
) => {
  ImagePicker.showImagePicker(cropMenuOptions, response => {
    /**
     *  c - crop
     *  m - multiple
     *  me - media
     *  p - photo
     *  s - select
     *  t - take
     *  v - video
     */

    switch (response.customButton) {
      case "sc":
        launchImageLibrary(mediaHaveBeenChosen, {
          cropping: true,
          height: 400,
          mediaType: "photo",
          width: 300,
          ...cropPickerConfig
        });
        break;

      case "sme":
        launchImageLibrary(mediaHaveBeenChosen);
        break;

      case "smme":
        launchImageLibrary(mediaHaveBeenChosen, { multiple: true });
        break;

      case "tc":
        launchCamera(mediaHasBeenTaken, {
          cropping: true,
          height: 400,
          mediaType: "photo",
          width: 300,
          ...cropPickerConfig
        });
        break;

      case "tp":
        launchCamera(mediaHasBeenTaken, { mediaType: "photo" });
        break;

      case "tv":
        launchCamera(mediaHasBeenTaken, { mediaType: "video" });
        break;

      default:
        break;
    }
  });
};

export default showCropPickerMenu;
