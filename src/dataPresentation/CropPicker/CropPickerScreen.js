/**
 * This module contains screen that presents features of the react-native-image-crop-picker.
 *
 * @format
 */

import PropTypes from "prop-types";
import React, { Component } from "react";

import { Button } from "react-native-material-ui";
import { Platform, StatusBar, Text, View } from "react-native";
import { withTranslation } from "react-i18next";

import Gallery from "../commonComponents/Gallery";
import createStyles from "./CropPicker.styles";
import intoThemeWrapper from "../../utils/intoThemeWrapper";

class CropPickerScreen extends Component {
  static propTypes = {
    bufferConfig: PropTypes.object.isRequired,
    chosenMedia: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
    navigationBarStyle: PropTypes.object.isRequired,
    onGetMedia: PropTypes.func.isRequired,
    onMediaPress: PropTypes.func.isRequired,
    takenMedia: PropTypes.array.isRequired,
    t: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { navigation, navigationBarStyle } = this.props;
    this._navListener = navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("light-content");
      Platform.OS === "android" &&
        StatusBar.setBackgroundColor(navigationBarStyle.backgroundColor);
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    const {
      bufferConfig,
      chosenMedia,
      onGetMedia,
      onMediaPress,
      takenMedia,
      t,
      theme
    } = this.props;
    const styles = createStyles(theme.palette);

    return (
      <View style={styles.screen}>
        <Button
          text={t("buttonTitle")}
          accent
          raised
          onPress={onGetMedia /* this.showCropPickerMenu */}
          style={{ container: styles.letButton }}
        />
        {chosenMedia.length > 0 && (
          <View style={styles.gridView}>
            <Text style={styles.text}>{t("chosenMedias")}</Text>
            <Gallery
              bufferConfig={bufferConfig}
              media={chosenMedia}
              onMediaPress={onMediaPress(chosenMedia)}
            />
          </View>
        )}
        {takenMedia.length > 0 && (
          <View style={styles.gridView}>
            <Text style={styles.text}>{t("takenMedias")}</Text>
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

export default intoThemeWrapper(withTranslation()(CropPickerScreen));
