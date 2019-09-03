/**
 * This module contains styles for CropPickerScreen.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

const createStyles = ({ secondaryTextColor }) =>
  StyleSheet.create({
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

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
