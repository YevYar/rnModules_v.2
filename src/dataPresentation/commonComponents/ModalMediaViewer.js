/**
 * This module contains component to present image with zoom opportunity.
 *
 * @format
 */

import ImageViewer from 'react-native-image-zoom-viewer';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Video from 'react-native-video';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-ui';
import { Image, StatusBar, SafeAreaView, Text, View } from 'react-native';

import createStyles from './styles/ModalImageViewer.styles';
import intoThemeWrapper from '../../utils/intoThemeWrapper';

class ModalImageViewer extends Component {
  static propTypes = {
    mediaArray: PropTypes.array.isRequired,
    mediaIndex: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.styles = createStyles(props.theme.palette);
  }

  state = {
    currentIndex: -1,
    isHeaderVisible: true,
    showControls: false,
    muted: true
  };

  changeHeaderVisibility() {
    this.setState(prevState => ({isHeaderVisible: !prevState.isHeaderVisible}));
  }

  _renderImg(data, pathsMimes) {
    console.log('_renderImg');
    // console.log(data);
    const { source, style } = data;
    if (pathsMimes[source.uri].includes('video')) console.log(this.state);
    return pathsMimes[source.uri].includes('image') ? (
      <Image source={{ uri: source.uri }} style={style} />
    ) : (
      <Video
        source={
          { uri: source.uri }
          /* require("./2.mp4") /* {
        uri:
          "http://www.archive.org/download/MickeyMouse-RunawayTrain/Film-42.mp4"
      } */
        } // Can be a URL or a local file.
        ref={(ref) => {
          this.player = ref;
        }} // Store reference
        // poster="http://images.pexels.com/medias/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        // bufferConfig={this.props.bufferConfig}
        controls={this.state.showControls}
        muted={this.state.muted}
        paused={this.state.muted}
        resizeMode="contain"
        // volume={0}
        playInBackground={false}
        playWhenInactive={false}
        style={style}
      />
    );
  }

  render() {
    // console.log(this.props);
    console.log(this.state);
    const { mediaArray, mediaIndex } = this.props;
    const { palette } = this.props.theme;

    const mediaPathArray = mediaArray.map(item => ({ url: item.path }));
    const pathsMimes = mediaArray.reduce((newObj, { mime, path }) => {
      newObj[path] = mime;
      return newObj;
    }, {});

    const currentIndex =
      this.state.currentIndex === -1 ? mediaIndex : this.state.currentIndex;

    return (
      <SafeAreaView style={this.styles.screen}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          hidden={!this.state.isHeaderVisible}
        />
        {this.state.isHeaderVisible && (
          <View style={this.styles.navBar}>
            <Button
              icon="arrow-back"
              text=""
              onPress={() => {
                Actions.pop();
              }}
              style={{ text: this.styles.arrowBack }}
            />
            <Text style={this.styles.title}>
              {`${currentIndex + 1}/${mediaArray.length}`}
            </Text>
          </View>
        )}
        <ImageViewer
          imageUrls={mediaPathArray}
          enableSwipeDown
          onSwipeDown={() => {
            Actions.pop();
          }}
          index={currentIndex}
          backgroundColor="transparent"
          renderIndicator={() => null}
          style={this.styles.imgViewer}
          onChange={(index) => {
            console.log('onChange');
            console.log(index);
            if (mediaArray[index].mime.includes('video')) {
              this.setState({
                showControls: true,
                muted: false,
                currentIndex: index
              });
            } else {
              this.setState({
                showControls: false,
                muted: true,
                currentIndex: index
              });
            }
          }}
          onClick={() => this.changeHeaderVisibility()}
          renderImage={data => this._renderImg(data, pathsMimes)}
        />
        {/*
          // mediaPathArray[currentIndex].mime.includes('image') ? (
          <ImageViewer
            imageUrls={mediaPathArray}
            enableSwipeDown
            onSwipeDown={() => {
              Actions.pop();
            }}
            index={currentIndex}
            backgroundColor="transparent"
            renderIndicator={() => null}
            style={this.styles.imgViewer}
            onChange={index => this.setState({ currentIndex: index })}
            onClick={() => this.changeHeaderVisibility()}
            renderImage={data => this._renderImg(data)}
          />
          /* ) : (
          <Video
            source={
              { uri: mediaPathArray[currentIndex].url }
              /* require("./2.mp4") /* {
            uri:
              "http://www.archive.org/download/MickeyMouse-RunawayTrain/Film-42.mp4"
          } */
        /* } // Can be a URL or a local file.
            ref={(ref) => {
              this.player = ref;
            }} // Store reference
            // poster="http://images.pexels.com/medias/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            // bufferConfig={this.props.bufferConfig}
            resizeMode="contain"
            repeat
            // volume={0}
            playInBackground={false}
            playWhenInactive={false}
          />
          ) */}
      </SafeAreaView>
    );
  }
}

export default intoThemeWrapper(ModalImageViewer);
