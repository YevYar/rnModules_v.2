/**
 * This module contains service that works with react-native-check-app-install.
 *
 * @format
 */

import { AppInstalledChecker } from 'react-native-check-app-install';

export default appName => AppInstalledChecker.isAppInstalled(appName);
