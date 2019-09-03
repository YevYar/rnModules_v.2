/**
 * This module contains component to present video player.
 *
 * @format
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';
import { Button } from 'react-native-material-ui';
import { Dimensions, Platform, View } from 'react-native';

import createStyles from './styles/VideoPlayer.styles';
import intoThemeWrapper from '../utils/intoThemeWrapper';

class VideoPlayer extends Component {
  static propTypes = {
    accessibleHeight: PropTypes.number.isRequired,
    accessibleWidth: PropTypes.number.isRequired,
    uri: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired
  };

  state = {
    showControls: true,
    paused: false
  };

  render() {
    console.log('render');
    const { accessibleHeight, accessibleWidth, theme, uri } = this.props;
    const {
      navigationElementsColor,
      tabDrawerTransparencyColor
    } = theme.palette;
    const styles = createStyles(
      theme.palette,
      accessibleHeight,
      accessibleWidth
    );

    return (
      <View style={styles.container}>
        <View style={styles.topButtonsContainer}>
          <Button
            text=""
            icon="volume-up" // volume-off
            style={{ container: styles.control, text: styles.controlIcon }}
          />
          <Slider
            maximumValue={1}
            minimumValue={0}
            step={0.1}
            style={styles.volumeSlider}
            thumbTintColor={navigationElementsColor}
            minimumTrackTintColor={navigationElementsColor}
            maximumTrackTintColor={tabDrawerTransparencyColor}
          />
          <Button
            text=""
            icon="fullscreen" // fullscreen-exit
            style={{ container: styles.control, text: styles.controlIcon }}
          />
        </View>
        <Video
          source={{ uri }}
          muted={this.state.paused}
          paused={this.state.paused}
          resizeMode="contain"
          playInBackground={false}
          playWhenInactive={false}
          style={styles.video}
        />
        <View style={styles.bottomButtonsContainer}>
          <Slider
            maximumValue={1}
            minimumValue={0}
            step={0.1}
            style={styles.timelineSlider}
            thumbTintColor={navigationElementsColor}
            minimumTrackTintColor={navigationElementsColor}
            maximumTrackTintColor={tabDrawerTransparencyColor}
          />
          <View style={styles.timelineControlsContainer}>
            <Button
              text=""
              icon="fast-rewind" // fullscreen-exit
              style={{ container: styles.control, text: styles.controlIcon }}
            />
            <Button
              text=""
              icon="play-arrow" // fullscreen-exit
              style={{ container: styles.control, text: styles.controlIcon }}
            />
            <Button
              text=""
              icon="fast-forward" // fullscreen-exit
              style={{ container: styles.control, text: styles.controlIcon }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default intoThemeWrapper(VideoPlayer);
