/**
 * This module contains styles for Gallery.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

const createStyles = (palette) => {
  const {
    accentBorderColor,
    borderColor,
    disabledColor,
    mediaPreviewColor
  } = palette;

  return StyleSheet.create({
    grid: {
      flex: 1,
      marginTop: 10,
      overflow: 'visible'
    },
    mediaPreview: {
      backgroundColor: mediaPreviewColor,
      borderColor,
      borderWidth: 2,
      flex: 1
    },
    mediaPreviewContainer: {
      height: 100,
      margin: 1,
      width: '24.5%'
    },
    emptyMediaPreview: {
      alignItems: 'center',
      backgroundColor: disabledColor,
      borderColor: accentBorderColor,
      borderWidth: 2,
      flexDirection: 'column',
      height: 100,
      justifyContent: 'center',
      margin: 1,
      width: '24.5%'
    }
  });
};

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
