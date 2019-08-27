/**
 * This module contains styles for FacebookButton.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

const createStyles = ({ tabDrawerIconsTextColor }) =>
  StyleSheet.create({
    button: {
      borderColor: tabDrawerIconsTextColor,
      borderRadius: 7,
      borderWidth: 2,
      marginBottom: 10
    },
    buttonText: {
      color: tabDrawerIconsTextColor,
      fontFamily: 'Arial',
      fontSize: 16
    }
  });

createStyles.propTypes = {tabDrawerIconsTextColor: PropTypes.string.isRequired};

export default createStyles;
