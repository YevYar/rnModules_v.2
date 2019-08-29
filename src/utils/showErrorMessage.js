/**
 * This module contains the error displaying function.
 *
 * @format
 */

import { Alert } from 'react-native';

export default (title, message) => {
  Alert.alert(title, message);
};
