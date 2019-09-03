/**
 * This module contains screen that presents content of the selected file and allow file editing.
 *
 * @format
 */

import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StatusBar, TextInput } from 'react-native';

import createStyles from './FileContent.styles';
import intoThemeWrapper from '../../utils/intoThemeWrapper';

const FileContentScreen = ({ content, loadingHasBeenFinished, theme }) => {
  const styles = createStyles(theme.palette);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <TextInput
        value={content}
        editable
        multiline
        scrollEnabled
        style={styles.contentView}
      />
      {loadingHasBeenFinished() && null}
    </SafeAreaView>
  );
};

FileContentScreen.propTypes = {
  content: PropTypes.string.isRequired,
  loadingHasBeenFinished: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default intoThemeWrapper(FileContentScreen);
