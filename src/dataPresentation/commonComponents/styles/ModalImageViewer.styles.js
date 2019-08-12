/**
 * This module contains styles for ModalImageViewer.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

const createStyles = (palette) => {
  const {
    imagePreviewBackColor,
    imagePreviewColor,
    imagePreviewColorHeader
  } = palette;

  return StyleSheet.create({
    arrowBack: { color: imagePreviewBackColor },
    imgViewer: { flex: 1 },
    navBar: {
      alignItems: 'flex-start',
      backgroundColor: imagePreviewColorHeader,
      bottom: 0,
      height: 80,
      left: 0,
      paddingTop: 45,
      right: 0,
      position: 'absolute',
      top: 0,
      zIndex: 1
    },
    screen: {
      backgroundColor: imagePreviewColor,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    title: {
      alignSelf: 'center',
      color: imagePreviewBackColor,
      fontSize: 17,
      marginTop: -28
    }
  });
};

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
