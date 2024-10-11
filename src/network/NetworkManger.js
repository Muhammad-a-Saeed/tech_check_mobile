import {BASE_URL} from './Environment';
import {getDeviceId} from 'react-native-device-info';
import store from '../redux/store';
import {authActions} from '../redux/slices/auth';
import {ShowMessage} from '../components';

export const AUTHORIZE = 'AUTHORIZE';
export const NETWORK_ERROR = 'NETWORK ERROR';

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

export const API_STATUS = {
  SUCCESS: 200,
  ERROR: 400,
  AUTHENTICATION_FAIL: 401,
  NOT_FOUND: 400,
};

var defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const callApi = async (
  method,
  endPoint,
  bodyParams,
  onSuccess,
  onError,
  setLoading = () => {},
  multipart,
  count = 0,
) => {
  let url = BASE_URL + endPoint;

  console.log('URL  => ', url);
  console.log('BODY => ', bodyParams);

  let token = store?.getState().auth.accessToken ?? false;
  let refreshToken = store?.getState()?.auth?.refreshToken ?? false;
  // console.log('TOKEN => ', store?.getState());

  if (multipart) {
    defaultHeaders['Content-Type'] = 'multipart/form-data';
  } else {
    defaultHeaders['Content-Type'] = 'application/json';
  }
  if (token) {
    defaultHeaders['Authorization'] = token;
  }

  let fetchObject = {
    method: method,
    headers: defaultHeaders,
    body: method == 'GET' ? null : method == 'DELETE' ? null : multipart ? bodyParams : JSON.stringify(bodyParams),
  };
  if (bodyParams == null) {
    delete fetchObject.body;
  }
  // console.log('fetchObject ==>>   ', fetchObject);
  try {
    setLoading(true);
    let response = await fetch(url, fetchObject);
    // console.log('Response  ==>>   ', response);
    let responseJson = await response.json();
    setLoading(false);

    if (responseJson?.message == 'jwt expired' && count < 2 && refreshToken) {
      let fetchObject = {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify({
          device: {
            id: getDeviceId(),
          },
        }),
      };
      setLoading(true);
      await fetch(`${BASE_URL}user/refresh/${refreshToken}`, fetchObject)
        .then(async res => {
          let resJson = await res.json();
          setLoading(false);

          store?.dispatch(authActions.setAccessToken(resJson.data.accessToken));
          callApi(method, endPoint, bodyParams, onSuccess, onError, (setLoading = () => {}), multipart, count + 1);
        })
        .catch(err => {
          setLoading(false);
          console.log('error refresh token=> ', err);
        });
    } else if (responseJson?.status < 400) {
      onSuccess(responseJson);
      if (responseJson?.message && method !== API_METHODS.GET) ShowMessage(responseJson?.message);
      else if (responseJson?.errorType) {
        ShowMessage(responseJson?.errorType);
      }
    } else {
      onError(responseJson);
      if (responseJson?.message) {
        ShowMessage(responseJson?.message);
      } else if (responseJson?.errorType) ShowMessage(responseJson?.errorType);
    }
  } catch (error) {
    ShowMessage('Network request failed');
    setLoading(false);
    onError(error);
    console.log('Api call try catch error:', error.message);
  }
};
