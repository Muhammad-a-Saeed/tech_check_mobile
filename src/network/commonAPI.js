import {ShowMessage} from '../components';
import {getDeviceIdAndFCM, onAPIError} from '../helpers';
import {authActions} from '../redux/slices/auth';
import {ROUTES} from '../utils/constants';
import {API} from './Environment';
import {API_METHODS, callApi} from './NetworkManger';

const sendOTP = async data => {
  let apiResponse = {};

  const onSuccess = response => {
    apiResponse = response;
  };

  const onError = error => {
    apiResponse = error;
  };

  await callApi(API_METHODS.POST, API.sendOTP, data, onSuccess, onError);

  if (apiResponse.message) ShowMessage(apiResponse.message);
  return apiResponse;
};

const verifyOTP = async (data, apiEndPoint = API.verifyOTP) => {
  let apiResponse = {};

  const onSuccess = response => {
    apiResponse = response;
  };

  const onError = error => {
    apiResponse = error;
  };

  const formatedData = {...data, device: await getDeviceIdAndFCM()};
  await callApi(API_METHODS.POST, apiEndPoint, formatedData, onSuccess, onError);

  if (apiResponse.message) ShowMessage(apiResponse.message);
  return apiResponse;
};

const forgotPassword = async email => {
  let apiResponse = {};

  const onSuccess = response => {
    apiResponse = response;
  };

  const onError = error => (apiResponse = error);

  await callApi(API_METHODS.POST, API.forgotPassword, {email}, onSuccess, onError);

  return apiResponse;
};

const getUserDetail = async () => {
  let apiResponse = {};

  const onSuccess = response => {
    apiResponse = response;
  };

  const onError = error => (apiResponse = error);

  await callApi(API_METHODS.GET, API.userMe, null, onSuccess, onError);

  return apiResponse;
};

const logout = async (dispatch, navigation, setIsLoading) => {
  const onSuccess = response => {
    if (response.success) {
      dispatch(authActions.setUser(null));
      dispatch(authActions.setRefreshToken(null));
      dispatch(authActions.setAccessToken(null));
      navigation.replace(ROUTES.Auth);
    }
  };

  callApi(API_METHODS.POST, API.logout, {device: await getDeviceIdAndFCM()}, onSuccess, onAPIError, setIsLoading);
};

const updateUserById = async (userId, apiBody) => {
  let apiResponse = {};
  const onSuccess = response => {
    apiResponse = response;
  };

  const onError = error => (apiResponse = error);

  await callApi(API_METHODS.PATCH, `${API.user}/${userId}`, apiBody, onSuccess, onError);

  return apiResponse;
};

export default {
  sendOTP,
  verifyOTP,
  forgotPassword,
  logout,
  getUserDetail,
  updateUserById,
};
