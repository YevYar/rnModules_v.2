/**
 * This module contains screen that presents features of the react-native-video.
 *
 * @format
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Video from 'react-native-video';
import { Platform, StatusBar, View } from 'react-native';

import createStyles from './Video.styles';
import intoThemeWrapper from '../../utils/intoThemeWrapper';

class VideoScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    navigationBarStyle: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.onAudioBecomingNoisy = this.onAudioBecomingNoisy.bind(this);
  }

  state = { pause: false };

  componentDidMount() {
    const { navigation, navigationBarStyle } = this.props;
    this._navListener = navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(navigationBarStyle.backgroundColor);
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  onAudioBecomingNoisy = () => {
    this.setState({ pause: true });
  };

  render() {
    const { bufferConfig, theme } = this.props;
    const styles = createStyles(theme.palette);

    return (
      <View style={styles.screen}>
        <Video
          source={
            require('./2.mp4') /* {
            uri:
              "http://www.archive.org/download/MickeyMouse-RunawayTrain/Film-42.mp4"
          } */
          } // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref;
          }} // Store reference
          style={styles.backgroundVideo}
          // poster="http://images.pexels.com/medias/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          bufferConfig={bufferConfig}
          controls
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default intoThemeWrapper(VideoScreen);
