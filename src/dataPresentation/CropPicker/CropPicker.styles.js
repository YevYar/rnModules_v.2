/**
 * This module contains styles for CropPickerScreen.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

const createStyles = (palette) => {
  const { secondaryTextColor } = palette;

  return StyleSheet.create({
    gridView: { flex: 1 },
    letButton: { alignSelf: 'center', marginBottom: 20 },
    screen: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: 10
    },
    text: { color: secondaryTextColor }
  });
};

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
