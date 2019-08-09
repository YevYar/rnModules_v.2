/**
 * This module contains component to present image with zoom opportunity.
 *
 * @format
 */

import ImageViewer from 'react-native-image-zoom-viewer';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Platform, StatusBar, View } from 'react-native';

import { Actions } from 'react-native-router-flux';

import createStyles from './styles/ModalImageViewer.styles';
import intoThemeWrapper from '../../utils/intoThemeWrapper';

class ModalImageViewer extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    imageIndex: PropTypes.number.isRequired,
    navigation: PropTypes.object.isRequired,
    navigationBarStyle: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
  };

  /* componentDidMount() {
    const { navigation, navigationBarStyle } = this.props;
    this._navListener = navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(navigationBarStyle.backgroundColor);
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  } */

  render() {
    const { images } = this.props;
    const { palette } = this.props.theme;

    const imagesUrl = images.map(item => ({ url: item }));

    const styles = createStyles(palette);
    return (
      <View style={styles.screen}>
        <StatusBar backgroundColor={palette.imagePreviewColor} />
        <ImageViewer
          imageUrls={imagesUrl}
          enableSwipeDown
          onSwipeDown={() => {
            Actions.pop();
          }}
          index={this.props.imageIndex}
          backgroundColor="transparent"
        />
      </View>
    );
  }
}

export default intoThemeWrapper(ModalImageViewer);
