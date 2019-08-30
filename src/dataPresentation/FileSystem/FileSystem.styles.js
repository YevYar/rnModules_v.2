/**
 * This module contains styles for FileSystemScreen.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { Platform, StyleSheet } from 'react-native';

const createStyles = (palette) => {
  const { secondaryTextColor } = palette;

  return StyleSheet.create({
    dirPicker: {
      height: Platform.OS === 'ios' ? 200 : 50,
      width: '100%'
    },
    screen: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: 10
    }
  });
};

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
