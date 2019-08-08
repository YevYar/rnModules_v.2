/**
 * This module contains styles for RootNavigator.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

const createStyles = (palette) => {
  const {
    accentColor,
    additionalColor,
    additionalColor_2,
    additionalColor_3,
    alternateTextColor,
    primaryColor
  } = palette;
  return StyleSheet.create({
    admobNavigationBarStyle: { backgroundColor: accentColor },
    cropPickerNavigationBarStyle: { backgroundColor: additionalColor },
    fastImageNavigationBarStyle: { backgroundColor: additionalColor_2 },
    imagePickerNavigationBarStyle: { backgroundColor: primaryColor },
    videoNavigationBarStyle: { backgroundColor: additionalColor_3 },
    screen: { flex: 1 },
    title: { color: alternateTextColor }
  });
};

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
