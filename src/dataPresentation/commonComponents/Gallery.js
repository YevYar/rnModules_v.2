/**
 * This module contains gallery that can display grid of images and can do something on image press.
 *
 * @format
 */

import Grid from 'react-native-grid-component';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import createStyles from './styles/Gallery.styles';
import intoThemeWrapper from '../../utils/intoThemeWrapper';

class Gallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    onImagePress: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.styles = createStyles(props.theme.palette);

    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem(data, i) {
    return data.uri ? (
      <TouchableOpacity
        onPress={() => this.props.onImagePress(i)}
        style={this.styles.imagePreviewContainer}
      >
        <Image source={{ uri: data.uri }} style={this.styles.imagePreview} />
      </TouchableOpacity>
    ) : (
      <View style={this.styles.emptyImagePreview}>
        <Icon
          name="broken-image"
          color={this.props.theme.palette.accentColor}
          size={60}
        />
      </View>
    );
  }

  render() {
    const { images } = this.props;

    const showChosenPhotos = images.length > 0;
    const imagesUrl = images.map(item => ({ uri: item }));

    if (showChosenPhotos) {
      return (
        <Grid
          data={imagesUrl}
          numColumns={4}
          keyExtractor={(item, i) => i.toString()}
          renderItem={this._renderItem}
          // renderPlaceholder={this._renderPlaceholder}
          style={this.styles.grid}
        />
      );
    }
    return null;
  }
}

export default intoThemeWrapper(Gallery);
