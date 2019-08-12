/**
 * This module contains component to present image with zoom opportunity.
 *
 * @format
 */

import ImageViewer from 'react-native-image-zoom-viewer';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-ui';
import { StatusBar, SafeAreaView, Text, View } from 'react-native';

import createStyles from './styles/ModalImageViewer.styles';
import intoThemeWrapper from '../../utils/intoThemeWrapper';

class ModalImageViewer extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    imageIndex: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired
  };

  state = { currentIndex: -1, isHeaderVisible: true };

  changeHeaderVisibility() {
    this.setState(prevState => ({isHeaderVisible: !prevState.isHeaderVisible}));
  }

  render() {
    console.log(this.props);
    const { images, imageIndex } = this.props;
    const { palette } = this.props.theme;

    const imagesUrl = images.map(item => ({ url: item }));

    const styles = createStyles(palette);
    return (
      <SafeAreaView style={styles.screen}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          hidden={!this.state.isHeaderVisible}
        />
        {this.state.isHeaderVisible && (
          <View style={styles.navBar}>
            <Button
              icon="arrow-back"
              text=""
              onPress={() => {
                Actions.pop();
              }}
              style={{ text: styles.arrowBack }}
            />
            <Text style={styles.title}>
              {`${
                this.state.currentIndex === -1
                  ? imageIndex + 1
                  : this.state.currentIndex + 1
              }/${images.length}`}
            </Text>
          </View>
        )}
        <ImageViewer
          imageUrls={imagesUrl}
          enableSwipeDown
          onSwipeDown={() => {
            Actions.pop();
          }}
          index={
            this.state.currentIndex === -1
              ? imageIndex
              : this.state.currentIndex
          }
          backgroundColor="transparent"
          renderIndicator={() => null}
          style={styles.imgViewer}
          onChange={index => this.setState({ currentIndex: index })}
          onClick={() => this.changeHeaderVisibility()}
        />
      </SafeAreaView>
    );
  }
}

export default intoThemeWrapper(ModalImageViewer);
