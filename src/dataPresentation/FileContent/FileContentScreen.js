/**
 * This module contains screen that presents content of the selected file and allow file editing.
 *
 * @format
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StatusBar, TextInput, View } from 'react-native';

import createStyles from './FileContent.styles';
import intoThemeWrapper from '../../utils/intoThemeWrapper';

class FileContentScreen extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired
  };

  state = {};

  componentDidMount() {}

  render() {
    const { content, theme } = this.props;

    // console.log(dirs);

    const styles = createStyles(theme.palette);

    return (
      <SafeAreaView style={styles.screen}>
        <StatusBar barStyle="dark-content" />
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text || content}
          editable
          multiline
          scrollEnabled
          style={styles.contentView}
        />
      </SafeAreaView>
    );
  }
}

export default intoThemeWrapper(FileContentScreen);
