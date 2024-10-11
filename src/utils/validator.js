import {ShowMessage} from '../components';

const emailRegExp = /^[+._\-\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const signUpValidations = data => {
  if (data.username === '') {
    ShowMessage('Username is required');
  } else if (data.emailId === '') {
    ShowMessage('Email Id is required');
  } else if (!emailRegExp.test(data.emailId)) {
    ShowMessage('Email Id is invalid');
  } else if (data.password === '') {
    ShowMessage('Password is required');
  } else if (data.password.length < 6) {
    ShowMessage('Password must be 6 character long');
  } else if (data.password !== data.confirmPassword) {
    ShowMessage('Password and confirm password is not matched');
  } else {
    return true;
  }
};
