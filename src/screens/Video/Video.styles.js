/**
 * This module contains styles for VideoScreen.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

const createStyles = ({ mediaPreviewColor }) =>
  StyleSheet.create({
    backgroundVideo: {
      backgroundColor: mediaPreviewColor,
      borderColor: 'red',
      borderWidth: 3,
      flex: 1
    },
    screen: { flex: 1 }
  });

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
