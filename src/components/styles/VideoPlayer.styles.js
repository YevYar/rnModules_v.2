/**
 * This module contains styles for VideoPlayer.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { Dimensions, Platform, StyleSheet } from 'react-native';

const createStyles = (
  { mediaPreviewColorHeader, navigationElementsColor },
  accessibleHeight,
  accessibleWidth
) => {
  const height = accessibleHeight - accessibleHeight * 0.28; // 200;
  const width = accessibleWidth - accessibleWidth * 0.15; // 75;
  const marginTop = Platform.OS === 'android' ? 10 : -height / 2;
  const timeSliderWidth = width - width * 0.5;
  const volumeSliderWidth = width - 110;

  return StyleSheet.create({
    bottomButtonsContainer: {
      alignItems: 'center',
      backgroundColor: mediaPreviewColorHeader,
      borderColor: 'green',
      borderWidth: 2,
      bottom: 0,
      flexDirection: 'column',
      height: 85,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      width,
      zIndex: 1
    },
    container: {
      alignSelf: 'center',
      borderColor: 'red',
      borderWidth: 2,
      height,
      marginTop,
      overflow: 'visible',
      width
    },
    control: {
      // borderColor: 'white',
      // borderWidth: 2,
      height: 45,
      paddingLeft: 0,
      width: 50
    },
    controlIcon: {
      color: navigationElementsColor,
      marginLeft: -23
    },
    timelineControlsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      width
    },
    timelineSlider: { height: 20, width: timeSliderWidth },
    topButtonsContainer: {
      alignItems: 'center',
      backgroundColor: mediaPreviewColorHeader,
      borderColor: 'blue',
      borderWidth: 2,
      flexDirection: 'row',
      height: 60,
      justifyContent: 'space-between',
      left: 0,
      position: 'absolute',
      top: 0,
      width,
      zIndex: 1
    },
    video: {
      height,
      width,
      zIndex: 0
    },
    volumeSlider: { height: 20, width: volumeSliderWidth }
  });
};

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
