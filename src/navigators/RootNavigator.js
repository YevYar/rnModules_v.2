/**
 * This module contains the root app navigator.
 *
 * @format
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Drawer, Modal, Router, Scene, Tabs } from 'react-native-router-flux';
import { Icon } from 'react-native-material-ui';
import { StatusBar, View } from 'react-native';
import { withTranslation } from 'react-i18next';

import Admob from '../screens/Admob/AdmobScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import CropPickerReduxConnecter from '../screens/CropPicker/CropPickerReduxConnecter';
import FileContentReduxConnecter from '../screens/FileContent/FileContentReduxConnecter';
import FileSystemReduxConnecter from '../screens/FileSystem/FileSystemReduxConnecter';
import ModalImageViewer from '../components/ModalMediaViewer';
import TabDrawerContainer from '../screens/TabDrawer/TabDrawerContainer';
import TabIcon from '../components/TabIcon';
import VideoContainer from '../screens/Video/VideoContainer';
import SettingsReduxConnecter from '../screens/Settings/SettingsReduxConnecter';
import createStyles from './styles/RootNavigator.styles';
import wrapIntoTheme from '../utils/intoThemeWrapper';

const RootNavigator = (props) => {
  const { t, theme } = props;
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
          <Modal key="lightbox" hideNavBar>
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
                    title={t('cropPickerTitle')}
                    component={CropPickerReduxConnecter}
                    icon={TabIcon}
                    iconName="crop"
                    navigationBarStyle={styles.cropPickerNavigationBarStyle}
                  />
                  <Scene
                    key="admob"
                    title={t('admobTitle')}
                    component={Admob}
                    icon={TabIcon}
                    iconName="announcement"
                    navigationBarStyle={styles.admobNavigationBarStyle}
                  />
                  <Scene
                    key="video"
                    title={t('videoTitle')}
                    component={VideoContainer}
                    icon={TabIcon}
                    iconName="video-label"
                    navigationBarStyle={styles.videoNavigationBarStyle}
                  />
                  <Scene
                    key="fileSystem"
                    title={t('fileSystemTitle')}
                    component={FileSystemReduxConnecter}
                    icon={TabIcon}
                    iconName="sd-storage"
                    navigationBarStyle={styles.fastImageNavigationBarStyle}
                  />
                  <Scene
                    key="chat"
                    title={t('chatTitle')}
                    component={ChatScreen}
                    icon={TabIcon}
                    iconName="chat"
                    navigationBarStyle={styles.chatNavigationBarStyle}
                  />
                </Tabs>
              </Scene>
            </Drawer>

            <Scene
              key="settings"
              title="Settings"
              component={SettingsReduxConnecter}
            />
          </Modal>

          <Scene
            key="mediaView"
            title=""
            component={ModalImageViewer}
            hideNavBar
          />
          <Scene
            key="fileContent"
            title=""
            component={FileContentReduxConnecter}
          />
        </Modal>
      </Router>
    </View>
  );
};

RootNavigator.propTypes = {
  t: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default wrapIntoTheme(withTranslation()(RootNavigator));
