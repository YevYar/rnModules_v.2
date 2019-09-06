/**
 * This module contains service that works with rn-fetch-blob.
 *
 * @format
 */

import RNFetchBlob from 'rn-fetch-blob';
import { PermissionsAndroid, Platform } from 'react-native';

import showMessage from '../utils/showMessage';

const startDownloading = () => {
  RNFetchBlob.config({
    addAndroidDownloads: {
      description: 'We downloaded this file to test rn-fetch-blob',
      mediaScannable: true,
      mime: 'audio/mpeg',
      notification: true,
      path: `${RNFetchBlob.fs.dirs.DownloadDir}/something.mp3`,
      // showNotification: true,
      title: 'Some file',
      useDownloadManager: true
    },
    // appendExt: 'mp4',
    // fileCache: true,
    indicator: true,
    // path: `${RNFetchBlob.fs.dirs.DownloadDir}/something.mp4`,
    timeout: 20000
  })
    .fetch(
      'GET',
      'https://s2.xn--41a.wiki/0/4650_96978dfc8f0c96caf3efbdc77f572cdf.mp3?filename=mosimann-maruv_-_mon-amour.mp3'
    )
    .progress({ count: 10 }, (received, total) => {
      console.log(`progress: ${received} / ${total}`);
    })
    .then((res) => {
      if (Platform.OS === 'android') {
        RNFetchBlob.android.actionViewIntent(res.path(), 'audio/mpeg');
      }
    })
    .catch((err) => {
      console.log(err);
      showMessage('Download error', err);
    });
};

export const downloadFile = () => {
  Platform.OS === 'android'
    ? PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Cool Photo App Camera Permission',
        message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK'
      }
    )
      .then((res) => {
        if (res === PermissionsAndroid.RESULTS.GRANTED) {
          startDownloading();
        }
      })
      .catch((err) => {
        console.log(err);
        showMessage('Download error', err);
      })
    : startDownloading();
};
