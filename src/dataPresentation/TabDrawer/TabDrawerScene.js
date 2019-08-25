/**
 * This module contains scene that presents tabs menu drawer.
 *
 * @format
 */

import Icon from "react-native-vector-icons/FontAwesome";
import InstagramLogin from "react-native-instagram-login";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Avatar, Button, ListItem } from "react-native-material-ui";
import { Alert, SafeAreaView, ScrollView, Text, View } from "react-native";
import { FBLogin, FBLoginManager } from "react-native-facebook-login";
import { withTranslation } from "react-i18next";

import createStyles from "./TabDrawer.styles";
import intoThemeWrapper from "../../utils/intoThemeWrapper";

class TabDrawerScene extends Component {
  static propTypes = {
    onSettingsPress: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
  };

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { onSettingsPress, t, theme } = this.props;
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
              centerElement={{ primaryText: t("settings") }}
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
              centerElement={{ primaryText: t("signIn") }}
              style={{
                container: styles.menuItemContainer,
                leftElementContainer: styles.menuItemLeftElementContainer,
                primaryText: styles.menuItemPrimaryText
              }}
            />

            <InstagramLogin
              ref={ref => (this.instagramLogin = ref)}
              clientId="a805d796528b4ed485dfd5323442f6d0"
              redirectUrl="http://www.google.com"
              scopes={["basic"]}
              onLoginSuccess={token => console.log(token)}
              onLoginFailure={data => Alert.alert(data)}
              modalVisible
            />

            <View style={styles.loginButtonsContainer}>
              <View style={styles.loginButton}>
                <Icon.Button
                  name="facebook"
                  backgroundColor={facebookColor}
                  borderRadius={5}
                  onPress={() => Alert.alert("facebook")}
                >
                  <Text style={styles.loginButtonText}>
                    {t("facebookLoginText")}
                  </Text>
                </Icon.Button>
              </View>
              <View style={styles.loginButton}>
                <Icon.Button
                  name="twitter"
                  backgroundColor={twitterColor}
                  borderRadius={5}
                  onPress={() => Alert.alert("twitter")}
                >
                  <Text style={styles.loginButtonText}>
                    {t("twitterLoginText")}
                  </Text>
                </Icon.Button>
              </View>
              <View style={styles.loginButton}>
                <Icon.Button
                  name="google"
                  backgroundColor={googleColor}
                  borderRadius={5}
                  onPress={() => Alert.alert("google")}
                >
                  <Text style={styles.loginButtonText}>
                    {t("googleLoginText")}
                  </Text>
                </Icon.Button>
              </View>
              <View style={styles.loginButton}>
                <Icon.Button
                  name="instagram"
                  backgroundColor={instagramColor}
                  borderRadius={5}
                  onPress={() => this.instagramLogin.show()}
                >
                  <Text style={styles.loginButtonText}>
                    {t("instagramLoginText")}
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
