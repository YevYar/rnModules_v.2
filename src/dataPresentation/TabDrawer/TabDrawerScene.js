/**
 * This module contains scene that presents tabs menu drawer.
 *
 * @format
 */

import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Avatar, Button, ListItem } from 'react-native-material-ui';
import { Alert, SafeAreaView, ScrollView, Text, View } from 'react-native';

import createStyles from './TabDrawer.styles';
import i18next from '../../translations/index';
import intoThemeWrapper from '../../utils/intoThemeWrapper';

class TabDrawerScene extends Component {
  static propTypes = {
    onSettingsPress: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
  };

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { onSettingsPress, theme } = this.props;
    const {
      facebookColor,
      twitterColor,
      instagramColor,
      googleColor
    } = theme.palette;

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
                  upperCase={false}
                  style={{ container: styles.photoButton }}
                />
              </View>
              <View style={styles.photoButtonWrapper}>
                <Button
                  text=""
                  icon="photo-library"
                  upperCase={false}
                  style={{ container: styles.photoButton }}
                />
              </View>
            </View>

            <ListItem
              leftElement="settings"
              centerElement={{ primaryText: i18next.t('settings') }}
              style={{
                container: styles.menuItemContainer,
                leftElementContainer: styles.menuItemLeftElementContainer,
                primaryText: styles.menuItemPrimaryText
              }}
              onPress={
                // () => this.props.navigation.navigate('settings')
                onSettingsPress
                // () => Actions.settings(Actions.currentParams)
              }
            />

            <ListItem
              leftElement="vpn-key"
              centerElement={{ primaryText: i18next.t('signIn') }}
              style={{
                container: styles.menuItemContainer,
                leftElementContainer: styles.menuItemLeftElementContainer,
                primaryText: styles.menuItemPrimaryText
              }}
            />

            <View style={styles.loginButtonsContainer}>
              <View style={styles.loginButton}>
                <Icon.Button
                  name="facebook"
                  backgroundColor={facebookColor}
                  borderRadius={5}
                  onPress={() => Alert.alert('facebook')}
                >
                  <Text style={styles.loginButtonText}>
                    {i18next.t('facebookLoginText')}
                  </Text>
                </Icon.Button>
              </View>
              <View style={styles.loginButton}>
                <Icon.Button
                  name="twitter"
                  backgroundColor={twitterColor}
                  borderRadius={5}
                  onPress={() => Alert.alert('twitter')}
                >
                  <Text style={styles.loginButtonText}>
                    {i18next.t('twitterLoginText')}
                  </Text>
                </Icon.Button>
              </View>
              <View style={styles.loginButton}>
                <Icon.Button
                  name="google"
                  backgroundColor={googleColor}
                  borderRadius={5}
                  onPress={() => Alert.alert('google')}
                >
                  <Text style={styles.loginButtonText}>
                    {i18next.t('googleLoginText')}
                  </Text>
                </Icon.Button>
              </View>
              <View style={styles.loginButton}>
                <Icon.Button
                  name="instagram"
                  backgroundColor={instagramColor}
                  borderRadius={5}
                  onPress={() => Alert.alert('instagram')}
                >
                  <Text style={styles.loginButtonText}>
                    {i18next.t('instagramLoginText')}
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

export default intoThemeWrapper(TabDrawerScene);
