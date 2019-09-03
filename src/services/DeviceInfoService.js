/**
 * This module contains service that works with react-native-device-info.
 *
 * @format
 */

import DeviceInfo from 'react-native-device-info';

export const getLocale = () => DeviceInfo.getDeviceLocale();
