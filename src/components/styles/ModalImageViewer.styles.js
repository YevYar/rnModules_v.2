/**
 * This module contains styles for ModalImageViewer.
 *
 * @format
 */

import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

const createStyles = ({
  navigationElementsColor,
  mediaPreviewColor,
  mediaPreviewColorHeader
}) =>
  StyleSheet.create({
    arrowBack: { color: navigationElementsColor },
    image: { flex: 1, borderWidth: 2, borderColor: "red" },
    imgViewer: { flex: 1, overflow: "visible" },
    navBar: {
      alignItems: "flex-start",
      backgroundColor: mediaPreviewColorHeader,
      bottom: 0,
      height: 80,
      left: 0,
      paddingTop: 45,
      right: 0,
      position: "absolute",
      top: 0,
      zIndex: 1
    },
    playButton: { color: navigationElementsColor, fontSize: 30 },
    playButtonContainer: { left: "50%", position: "absolute", top: "50%" },
    screen: {
      backgroundColor: mediaPreviewColor,
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start"
    },
    title: {
      alignSelf: "center",
      color: navigationElementsColor,
      fontSize: 17,
      marginTop: -28
    },
    videoPrevWrapper: { flex: 1 }
  });

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
