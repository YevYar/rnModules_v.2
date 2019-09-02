/**
 * This module contains scene that presents settings lightbox.
 *
 * @format
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-ui';
import { Picker, View } from 'react-native';
import { withTranslation } from 'react-i18next';

import createStyles from './Settings.styles';
import intoThemeWrapper from '../../utils/intoThemeWrapper';

class SettingsScene extends Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired,
    languages: PropTypes.object.isRequired,
    languageHasBeenChanged: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
  };

  state = {};

  /* static getDerivedStateFromProps(props) {
    return { language: props.language };
  } */

  render() {
    const {
      i18n,
      language,
      languages,
      languageHasBeenChanged,
      t,
      theme
    } = this.props;

    const styles = createStyles(theme.palette);

    return (
      <View style={styles.screen}>
        <View style={styles.box}>
          <Picker
            selectedValue={this.state.language || language}
            style={styles.languagePicker}
            onValueChange={itemValue => this.setState({ language: itemValue })}
          >
            {Object.keys(languages).map(item => (
              <Picker.Item label={languages[item]} value={item} key={item} />
            ))}
          </Picker>
          <View style={styles.bottomButtons}>
            <Button
              text={t('ok')}
              onPress={() => {
                i18n.changeLanguage(this.state.language);
                languageHasBeenChanged(this.state.language);
                // Actions.pop();
              }}
              primary
            />
            <Button
              text={t('cancel')}
              onPress={() => {
                Actions.pop();
              }}
              accent
            />
          </View>
        </View>
      </View>
    );
  }
}

export default intoThemeWrapper(withTranslation()(SettingsScene));
