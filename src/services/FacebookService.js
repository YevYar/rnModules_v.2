/**
 * This module contains service that works with react-native-fbsdk.
 *
 * @format
 */

import CookieManager from 'react-native-cookies';
import { LoginManager } from 'react-native-fbsdk';

// LoginManager.setLoginBehavior('web_only');

export const login = () => {
  LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    (result) => {
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        console.log('Login success: ');
        console.log(result);
      }
    },
    (error) => {
      console.log('Login fail with error: ');
      console.log(error);
    }
  );
};

export const logout = () => {
  CookieManager.getAll().then((res) => {
    console.log('CookieManager.getAll =>', res);
    CookieManager.clearAll().then((res) => {
      console.log('CookieManager.clearAll =>', res);
      LoginManager.logOut();
    });
  });
};
