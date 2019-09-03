/**
 * This module contains styles for FileContentScreen.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

const createStyles = ({ canvasColor }) =>
  StyleSheet.create({
    contentView: {
      backgroundColor: canvasColor,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      textAlignVertical: 'top'
    },
    screen: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: 10
    }
  });

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
