/**
 * This module contains styles for ImagePickerScreen.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

const createStyles = palette =>
  StyleSheet.create({
    letButton: { alignSelf: 'center' },
    screen: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: 10
    }
  });

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
