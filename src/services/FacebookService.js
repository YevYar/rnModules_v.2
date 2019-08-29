/**
 * This module contains service that works with react-native-fbsdk.
 *
 * @format
 */

import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
  ShareDialog
} from 'react-native-fbsdk';

import i18next from '../translations/index';
import isAppInstalled from './InstalledAppsService';
import showErrorMessage from '../utils/showErrorMessage';

const user = {};

/** ****************
 * LOGIN / LOGOUT  *
 ***************** */

export const login = () => {
  LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    (result) => {
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        console.log('Login success: ');
        console.log(result);
        AccessToken.getCurrentAccessToken().then((data) => {
          console.log(data.accessToken.toString());
        });
      }
    },
    (error) => {
      console.log('Login fail with error: ');
      console.log(error);
    }
  );
};

export const logout = () => {
  /* CookieManager.getAll().then((res) => {
    console.log('CookieManager.getAll =>', res);
    CookieManager.clearAll().then((res) => {
      console.log('CookieManager.clearAll =>', res);
      LoginManager.logOut();
    });
  }); */

  let current_access_token = '';
  AccessToken.getCurrentAccessToken()
    .then((data) => {
      current_access_token = data.accessToken.toString();
    })
    .then(() => {
      const logoutRequest = new GraphRequest(
        'me/permissions/',
        {
          accessToken: current_access_token,
          httpMethod: 'DELETE'
        },
        (error, result) => {
          if (error) {
            console.log('Error fetching data: ' + error.toString());
          } else {
            console.log('Result');
            console.log(result);
            LoginManager.logOut();
          }
        }
      );
      new GraphRequestManager().addRequest(logoutRequest).start();
    })
    .catch((error) => {
      console.log(error);
    });
};

/** *********
 * SHARING  *
 ********** */

// This function should can share videos and photos, but shares only photos now
export const shareMedia = (uri) => {
  console.log(uri);

  isAppInstalled('facebook')
    .then((isInstalled) => {
      if (isInstalled) {
        const sharePhotoContent = {
          contentType: 'photo',
          photos: [{ imageUrl: uri }]
        };

        ShareDialog.show(sharePhotoContent);
      } else throw new Error('Facebook has not been installed');
    })
    .catch((error) => {
      console.log(error);
      showErrorMessage(
        i18next.t('facebookIsNotInstalledTitle'),
        i18next.t('facebookIsNotInstalledMessage')
      );
    });
};

/** ***********
 * USER DATA  *
 ************ */

const _responseInfoCallback = (error, result) => {
  if (error) {
    console.log('Error fetching data: ' + error.toString());
  } else {
    console.log('Success fetching data: ');
    console.log(result);
    user.id = result.id;
    user.name = result.name;
    user.email = result.email;
  }
};

export const getAccountInfo = () => {
  let current_access_token = '';
  AccessToken.getCurrentAccessToken()
    .then((data) => {
      current_access_token = data.accessToken.toString();

      // Create a graph request asking for user information with a callback to handle the response.
      const accountInfoRequest = new GraphRequest(
        '/me',
        {
          httpMethod: 'GET',
          accessToken: current_access_token,
          parameters: { fields: { string: 'email,name' } }
        },
        _responseInfoCallback
      );

      // Start the graph request.
      new GraphRequestManager().addRequest(accountInfoRequest).start();
    })
    .catch((error) => {
      console.log(error.toString());
    });
};
