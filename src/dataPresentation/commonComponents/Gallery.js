/**
 * This module contains gallery that can display grid of media (video, image) and can do something on media press.
 *
 * @format
 */

import Grid from "react-native-grid-component";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Video from "react-native-video";
import { Image, TouchableOpacity, View } from "react-native";

import createStyles from "./styles/Gallery.styles";
import intoThemeWrapper from "../../utils/intoThemeWrapper";

class Gallery extends Component {
  static propTypes = {
    bufferConfig: PropTypes.object.isRequired,
    media: PropTypes.array.isRequired,
    onMediaPress: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.styles = createStyles(props.theme.palette);

    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem(data, i) {
    console.log(data);
    const { onMediaPress, theme } = this.props;
    return data.uri ? (
      <TouchableOpacity
        onPress={() => onMediaPress(i)}
        style={this.styles.mediaPreviewContainer}
      >
        {data.mime.includes("image") ? (
          <Image source={{ uri: data.uri }} style={this.styles.mediaPreview} />
        ) : (
          <Video
            source={
              { uri: data.uri }
              /* require("./2.mp4") /* {
            uri:
              "http://www.archive.org/download/MickeyMouse-RunawayTrain/Film-42.mp4"
          } */
            } // Can be a URL or a local file.
            ref={ref => {
              this.player = ref;
            }} // Store reference
            style={this.styles.mediaPreview}
            // poster="http://images.pexels.com/medias/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            // bufferConfig={this.props.bufferConfig}
            resizeMode="contain"
            repeat
            muted
            // volume={0}
            playInBackground={false}
            playWhenInactive={false}
            disableFocus
          />
        )}
      </TouchableOpacity>
    ) : (
      <View style={this.styles.emptyMediaPreview}>
        <Icon name="broken-image" color={theme.palette.accentColor} size={60} />
      </View>
    );
  }

  render() {
    const { media } = this.props;

    const showchosenMedia = media.length > 0;
    const mediaPathArray = media.map(item => ({
      uri: item.path,
      mime: item.mime
    }));

    if (showchosenMedia) {
      return (
        <Grid
          data={mediaPathArray}
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
