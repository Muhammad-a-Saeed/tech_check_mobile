import {ImagePickerResponse, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, Dimensions, PermissionsAndroid, Platform} from 'react-native';
import {getDeviceId} from 'react-native-device-info';
import {ShowMessage} from '../components';

type Picker = {
  type: 'camera' | 'gallery';
  mediaType: 'photo' | 'video' | 'mixed';
};

export const ImagePicker = async ({type, mediaType}: Picker): Promise<ImagePickerResponse> => {
  const pickerFunc: any = type === 'camera' ? launchCamera : launchImageLibrary;

  try {
    return await pickerFunc({mediaType});
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const {width, height} = Dimensions.get('window');

export const wp = p => width * (p / 100);
export const hp = p => height * (p / 100);

export const isIOS = Platform.OS === 'ios';

export const getRandomItemFromArray = (arr: []) => {
  if (!arr) return;
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export const onAPIError = (error: Error) => console.log('ERROR > ', error);

export const showConsole = (title: string, message: string) => console.log(title, message);

export const OSVersion = parseInt(Platform.Version, 10);

export const storeDataToStorage = async (key: string, value: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const removeDataFromStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

export const getDataFromStorage = async (value: string) => {
  let data: any = await AsyncStorage.getItem(value);
  let newData = JSON.parse(data);
  return newData;
};

export const getUserFullName = (first: string, last: string) => {
  if (!first || !last) return 'User';
  return `${first} ${last}`;
};

export const confirmationAlert = (message: string, cancelBtnText: string, okayBtnText: string) => {
  return new Promise((resolve, reject) => {
    Alert.alert('Confirm', message, [
      {text: cancelBtnText || 'Cancel', onPress: () => resolve(false)},
      {text: okayBtnText || 'Ok', onPress: () => resolve(true)},
    ]);
  });
};

export const commonAlert = (title: string, message: string) => {
  return new Promise((resolve, reject) => {
    Alert.alert(title, message, [{text: 'Ok', onPress: () => resolve(true)}]);
  });
};



export const getDeviceIdAndFCM = async () => {
  return {id: getDeviceId(), deviceToken: 'FCM'};
};
