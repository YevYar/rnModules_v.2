/**
 * This module contains tab icon.
 *
 * @format
 */

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import React from 'react';

const TabIcon = ({ activeTintColor, focused, iconName, inactiveTintColor }) => (
  <Icon
    name={iconName}
    color={focused ? activeTintColor : inactiveTintColor}
    size={30}
  />
);

TabIcon.propTypes = {
  activeTintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
  iconName: PropTypes.string.isRequired,
  inactiveTintColor: PropTypes.string.isRequired
};

export default TabIcon;
