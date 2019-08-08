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
import ImagePicker from '../dataPresentation/ImagePicker/ImagePickerScreen';
import TabIcon from '../dataPresentation/commonComponents/TabIcon';
import Video from '../dataPresentation/Video/VideoScreen';
import createStyles from './styles/RootNavigator.styles';
import intoThemeWrapper from '../utils/intoThemeWrapper';

const RootNavigator = ({ theme }) => {
  const { accentColor, inactiveIcon, primaryColor } = theme.palette;
  const {
    admobNavigationBarStyle,
    cropPickerNavigationBarStyle,
    fastImageNavigationBarStyle,
    imagePickerNavigationBarStyle,
    videoNavigationBarStyle,
    screen,
    title
  } = createStyles(theme.palette);

  return (
    <View style={screen}>
      <StatusBar backgroundColor={primaryColor} />
      <Router>
        <Tabs
          key="rootTabs"
          activeBackgroundColor={accentColor}
          activeTintColor={primaryColor}
          inactiveTintColor={inactiveIcon}
          labelStyle={{ color: primaryColor }}
          titleStyle={title}
        >
          <Scene
            key="imagePicker"
            title="Image picker"
            component={ImagePicker}
            icon={TabIcon}
            iconName="image"
            navigationBarStyle={imagePickerNavigationBarStyle}
            activeTintColor={primaryColor}
            inactiveTintColor={inactiveIcon}
          />
          <Scene
            key="admob"
            title="Advertisement"
            component={Admob}
            icon={TabIcon}
            iconName="announcement"
            navigationBarStyle={admobNavigationBarStyle}
          />
          <Scene
            key="video"
            title="Video"
            component={Video}
            icon={TabIcon}
            iconName="video-label"
            navigationBarStyle={videoNavigationBarStyle}
          />
          <Scene
            key="cropPicker"
            title="Crop picker"
            component={CropPicker}
            icon={TabIcon}
            iconName="crop"
            navigationBarStyle={cropPickerNavigationBarStyle}
          />
          <Scene
            key="fastImage"
            title="Fast image"
            component={FastImage}
            icon={TabIcon}
            iconName="collections"
            navigationBarStyle={fastImageNavigationBarStyle}
          />
        </Tabs>
      </Router>
    </View>
  );
};

RootNavigator.propTypes = { theme: PropTypes.object.isRequired };

export default intoThemeWrapper(RootNavigator);
