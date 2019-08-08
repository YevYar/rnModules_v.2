/**
 * This module contains the root app navigator.
 *
 * @format
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import { StatusBar, View } from 'react-native';

import Admob from '../dataPresentation/Admob/AdmobScreen';
import CropPicker from '../dataPresentation/CropPicker/CropPickerScreen';
import FastImage from '../dataPresentation/FastImage/FastImageScreen';
import ImagePickerHOC from '../dataPresentation/ImagePicker/ImagePickerHOC';
import TabIcon from '../dataPresentation/commonComponents/TabIcon';
import Video from '../dataPresentation/Video/VideoScreen';
import createStyles from './styles/RootNavigator.styles';
import wrapIntoTheme from '../utils/intoThemeWrapper';

const RootNavigator = ({ theme }) => {
  const { accentColor, inactiveIcon, primaryColor } = theme.palette;
  const styles = createStyles(theme.palette);

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={primaryColor} />
      <Router>
        <Tabs
          key="rootTabs"
          activeBackgroundColor={accentColor}
          activeTintColor={primaryColor}
          inactiveTintColor={inactiveIcon}
          labelStyle={{ color: primaryColor }}
          titleStyle={styles.title}
        >
          <Scene
            key="imagePicker"
            title="Image picker"
            component={ImagePickerHOC}
            icon={TabIcon}
            iconName="image"
            navigationBarStyle={styles.imagePickerNavigationBarStyle}
            activeTintColor={primaryColor}
            inactiveTintColor={inactiveIcon}
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
            component={Video}
            icon={TabIcon}
            iconName="video-label"
            navigationBarStyle={styles.videoNavigationBarStyle}
          />
          <Scene
            key="cropPicker"
            title="Crop picker"
            component={CropPicker}
            icon={TabIcon}
            iconName="crop"
            navigationBarStyle={styles.cropPickerNavigationBarStyle}
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
      </Router>
    </View>
  );
};

RootNavigator.propTypes = { theme: PropTypes.object.isRequired };

export default wrapIntoTheme(RootNavigator);
