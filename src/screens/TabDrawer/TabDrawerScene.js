/**
 * This module contains scene that presents tabs menu drawer.
 *
 * @format
 */

import Icon from 'react-native-vector-icons/FontAwesome';
import InstagramLogin from 'react-native-instagram-login';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Avatar, Button, ListItem } from 'react-native-material-ui';
import {
  Alert,
  NativeModules,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import { LoginButton } from 'react-native-fbsdk';
import { withTranslation } from 'react-i18next';

import createStyles from './TabDrawer.styles';
import intoThemeWrapper from '../../utils/intoThemeWrapper';

const { RNTwitterSignIn } = NativeModules;

class TabDrawerScene extends Component {
  static propTypes = {
    getAccountInfo: PropTypes.func.isRequired,
    loginData: PropTypes.object.isRequired,
    onSettingsPress: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
  };

  componentDidMount() {}

  componentWillUnmount() {}

  _twitterSignIn = () => {
    RNTwitterSignIn.init(
      this.props.loginData.twitter.TWITTER_COMSUMER_KEY,
      this.props.loginData.twitter.TWITTER_CONSUMER_SECRET
    );
    RNTwitterSignIn.logIn()
      .then((loginData) => {
        console.log(loginData);
        const { authToken, authTokenSecret } = loginData;
        if (authToken && authTokenSecret) {
          this.setState({ isLoggedIn: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { getAccountInfo, loginData, onSettingsPress, t, theme } = this.props;
    const { facebook, instagram } = loginData;
    const { twitterColor, instagramColor, googleColor } = theme.palette;

    const styles = createStyles(
      theme.palette,
      Actions.currentParams.navigationBarStyle.backgroundColor
    );

    return (
      <SafeAreaView style={styles.screen}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.scrollViewContentWrapper}>
            <View style={styles.avatarContainer}>
              <Avatar
                icon="person"
                iconColor={theme.palette.tabDrawerIconsTextColor}
                iconSize={130}
                style={{ container: styles.avatar }}
              />
            </View>

            <View style={styles.photoButtonsContainer}>
              <View style={styles.photoButtonWrapper}>
                <Button
                  text=""
                  icon="local-see"
                  style={{ container: styles.photoButton }}
                />
              </View>
              <View style={styles.photoButtonWrapper}>
                <Button
                  text=""
                  icon="photo-library"
                  style={{ container: styles.photoButton }}
                />
              </View>
            </View>

            <ListItem
              leftElement="settings"
              centerElement={{ primaryText: t('settings') }}
              style={{
                container: styles.menuItemContainer,
                leftElementContainer: styles.menuItemLeftElementContainer,
                primaryText: styles.menuItemPrimaryText
              }}
              onPress={onSettingsPress}
            />

            <ListItem
              leftElement="vpn-key"
              centerElement={{ primaryText: t('signIn') }}
              style={{
                container: styles.menuItemContainer,
                leftElementContainer: styles.menuItemLeftElementContainer,
                primaryText: styles.menuItemPrimaryText
              }}
            />
            <View style={styles.loginButtonsContainer}>
              <LoginButton
                permissions={facebook.permissions}
                onLoginFinished={(error, result) => {
                  if (error) {
                    console.log(`login has error: ${result.error}`);
                  } else if (result.isCancelled) {
                    console.log('login is cancelled.');
                  } else {
                    console.log(result);
                    getAccountInfo();
                  }
                }}
                onLogoutFinished={() => console.log('logout.')}
                loginBehaviorAndroid="web_only"
                loginBehaviorIOS="browser"
                style={{ ...styles.loginButton, ...styles.facebookButton }}
              />

              <View style={styles.loginButton}>
                <Icon.Button
                  name="twitter"
                  backgroundColor={twitterColor}
                  borderRadius={5}
                  onPress={this._twitterSignIn}
                >
                  <Text style={styles.loginButtonText}>
                    {t('twitterLoginText')}
                  </Text>
                </Icon.Button>
              </View>

              <GoogleSigninButton
                style={{ ...styles.loginButton, ...styles.googleButton }}
                size={GoogleSigninButton.Size.Standard}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => null}
              />

              <InstagramLogin
                ref={ref => (this.instagramLogin = ref)}
                clientId={instagram.clientId}
                redirectUrl={instagram.redirectUrl}
                scopes={instagram.scopes}
                onLoginSuccess={token => console.log(token)}
                onLoginFailure={data => Alert.alert(data)}
                modalVisible
              />

              <View style={styles.loginButton}>
                <Icon.Button
                  name="instagram"
                  backgroundColor={instagramColor}
                  borderRadius={5}
                  onPress={() => this.instagramLogin.show()}
                >
                  <Text style={styles.loginButtonText}>
                    {t('instagramLoginText')}
                  </Text>
                </Icon.Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default intoThemeWrapper(withTranslation()(TabDrawerScene));
