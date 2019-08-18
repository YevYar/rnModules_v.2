/**
 * This module contains the root app navigator.
 *
 * @format
 */

import PropTypes from "prop-types";
import React from "react";
import {
  Drawer,
  Lightbox,
  Modal,
  Router,
  Scene,
  Tabs
} from "react-native-router-flux";
import { Icon } from "react-native-material-ui";
import { StatusBar, View } from "react-native";

import Admob from "../dataPresentation/Admob/AdmobScreen";
import CropPickerHOC from "../dataPresentation/CropPicker/CropPickerHOC";
import FastImage from "../dataPresentation/FastImage/FastImageScreen";
import ModalImageViewer from "../dataPresentation/commonComponents/ModalMediaViewer";
import TabDrawerContainer from "../dataPresentation/TabDrawer/TabDrawerContainer";
import TabIcon from "../dataPresentation/commonComponents/TabIcon";
import VideoContainer from "../dataPresentation/Video/VideoContainer";
import SettingsScene from "../dataPresentation/Settings/SettingsScene";
import createStyles from "./styles/RootNavigator.styles";
import wrapIntoTheme from "../utils/intoThemeWrapper";

const RootNavigator = ({ theme }) => {
  const {
    accentColor,
    inactiveIcon,
    navigationElementsColor,
    primaryColor
  } = theme.palette;
  const styles = createStyles(theme.palette);

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={primaryColor} />
      <Router>
        <Modal>
          <Lightbox key="lightbox" hideNavBar>
            <Drawer
              key="tabDrawer"
              contentComponent={TabDrawerContainer}
              hideNavBar
              drawerIcon={
                <Icon name="menu" size={30} color={navigationElementsColor} />
              }
            >
              <Scene hideNavBar panHandlers={null}>
                <Tabs
                  key="rootTabs"
                  activeBackgroundColor={accentColor}
                  activeTintColor={primaryColor}
                  inactiveTintColor={inactiveIcon}
                  labelStyle={{ color: primaryColor }}
                  titleStyle={styles.title}
                  hideNavBar
                  drawerLockMode="locked-closed"
                >
                  <Scene
                    key="cropPicker"
                    title="Crop picker"
                    component={CropPickerHOC}
                    icon={TabIcon}
                    iconName="crop"
                    navigationBarStyle={styles.cropPickerNavigationBarStyle}
                  />
                  <Scene
                    key="admob"
                    title="Advertisement"
                    component={Admob}
                    icon={TabIcon}
                    iconName="announcement"
                    navigationBarStyle={styles.admobNavigationBarStyle}
                  />
                  <Scene
                    key="video"
                    title="Video"
                    component={VideoContainer}
                    icon={TabIcon}
                    iconName="video-label"
                    navigationBarStyle={styles.videoNavigationBarStyle}
                  />
                  <Scene
                    key="fastImage"
                    title="Fast image"
                    component={FastImage}
                    icon={TabIcon}
                    iconName="collections"
                    navigationBarStyle={styles.fastImageNavigationBarStyle}
                  />
                </Tabs>
              </Scene>
            </Drawer>

            <Scene key="settings" title="Settings" component={SettingsScene} />
          </Lightbox>

          <Scene
            key="mediaView"
            title=""
            component={ModalImageViewer}
            hideNavBar
          />
        </Modal>
      </Router>
    </View>
  );
};

RootNavigator.propTypes = { theme: PropTypes.object.isRequired };

export default wrapIntoTheme(RootNavigator);
