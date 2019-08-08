/**
 * This module contains styles for ImagePickerScreen.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

const createStyles = palette =>
  /* const {
        accentColor,
        additionalColor,
        additionalColor_2,
        additionalColor_3,
        alternateTextColor,
        primaryColor
    } = palette; */
  StyleSheet.create({
    screen: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
    }
  });
createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
