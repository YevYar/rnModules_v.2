/**
 * This module contains styles for ModalImageViewer.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

const createStyles = (palette) => {
  const { imagePreviewColor } = palette;
  console.log('modal');
  return StyleSheet.create({
    screen: {
      backgroundColor: imagePreviewColor,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: 10
    }
  });
};

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
