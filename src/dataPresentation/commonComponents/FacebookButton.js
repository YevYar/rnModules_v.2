/**
 * This module contains Facebook login button.
 *
 * @format
 */

import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { withTranslation } from 'react-i18next';

import createStyles from './styles/FacebookButton.styles';
import intoThemeWrapper from '../../utils/intoThemeWrapper';

class FacebookButton extends Component {
  static contextTypes = {
    isLoggedIn: PropTypes.bool,
    login: PropTypes.func,
    logout: PropTypes.func
    // props: PropTypes.shape({})
  };

  static propTypes = {
    t: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
  };

  render() {
    console.log(this.props);
    const { t, theme } = this.props;
    const { palette } = theme;
    const styles = createStyles(palette);
    const { facebookColor } = palette;

    return (
      <View style={styles.button}>
        <Icon.Button
          name="facebook"
          backgroundColor={facebookColor}
          borderRadius={5}
          onPress={() => {
            !this.context.isLoggedIn
              ? this.context.login()
              : this.context.logout();
          }}
        >
          <Text style={styles.buttonText}>
            {!this.context.isLoggedIn
              ? t('facebookLoginText')
              : t('facebookLogoutText')}
          </Text>
        </Icon.Button>
      </View>
    );
  }
}

export default intoThemeWrapper(withTranslation()(FacebookButton));
