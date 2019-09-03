/**
 * This module contains styles for TabDrawerScene.
 *
 * @format
 */

import PropTypes from 'prop-types';
import { Platform, StyleSheet } from 'react-native';

const createStyles = (
  { tabDrawerIconsTextColor, tabDrawerTransparencyColor },
  tabColor
) =>
  StyleSheet.create({
    avatar: {
      borderColor: tabColor,
      borderRadius: 100,
      borderWidth: 3,
      height: 150,
      width: 150
    },
    avatarContainer: {
      height: 155,
      margin: 10,
      width: 155
    },
    facebookButton: {
      height: 40,
      marginLeft: Platform.OS === 'android' ? 2 : 0,
      overflow: 'hidden',
      width: Platform.OS === 'android' ? '98%' : null
    },
    loginButton: {
      borderColor: tabDrawerIconsTextColor,
      borderRadius: 7,
      borderWidth: 2,
      marginBottom: 10
    },
    loginButtonText: {
      color: tabDrawerIconsTextColor,
      fontFamily: 'Arial',
      fontSize: 16
    },
    loginButtonsContainer: {
      backgroundColor: tabDrawerIconsTextColor,
      marginTop: -10,
      paddingBottom: 0,
      paddingLeft: 7,
      paddingRight: 7,
      paddingTop: 0,
      width: 230
    },
    menuItemContainer: {
      backgroundColor: tabDrawerIconsTextColor,
      height: 50,
      marginBottom: 10,
      width: 230
    },
    menuItemLeftElementContainer: {
      // borderColor: tabColor,
      // borderWidth: 2,
      backgroundColor: 'transparent',
      width: 30
    },
    menuItemPrimaryText: {
      alignSelf: 'center',
      marginLeft: -30
    },
    photoButton: {
      backgroundColor: tabDrawerIconsTextColor,
      borderColor: tabColor,
      borderRadius: 10,
      borderWidth: 2,
      height: 45,
      paddingLeft: 25,
      width: 80
    },
    photoButtonWrapper: {
      borderRadius: 10,
      overflow: 'hidden'
    },
    photoButtonsContainer: {
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      marginBottom: 25,
      width: 175
    },
    screen: {
      backgroundColor: tabColor,
      flex: 1
    },
    scrollView: {
      backgroundColor: tabDrawerTransparencyColor,
      flex: 1
    },
    scrollViewContentWrapper: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: 10
    }
  });

createStyles.propTypes = { palette: PropTypes.object.isRequired };

export default createStyles;
