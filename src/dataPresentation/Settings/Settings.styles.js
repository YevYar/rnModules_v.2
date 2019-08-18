/**
 * This module contains styles for SettingsScene.
 *
 * @format
 */

import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

const createStyles = palette => {
  const { canvasColor, lightboxTransparencyColor } = palette;

  return StyleSheet.create({
    box: {
      backgroundColor: canvasColor,
      height: 200,
      width: "70%"
    },
    screen: {
      alignItems: "center",
      backgroundColor: lightboxTransparencyColor,
      bottom: 0,
      height: "100%",
      justifyContent: "center",
      left: 0,
      position: "absolute",
      right: 0,
      top: 0,
      width: "100%"
    }
  });
};

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
