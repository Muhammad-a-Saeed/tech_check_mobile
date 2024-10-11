import {View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppText, AppTextInput, Header, Screen} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LAYOUT} from '../../../theme';
import {AppleIcon, AtTheRateIcon, FacebookIcon, GoogleIcon, LockIcon, UserAvatarIcon} from '../../../assets/icons';
import {authCommonStyles, signInStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';
import {Seperator, Social} from '../signIn';
import useAccountType from '../../../hooks/useAccountType';
import {accountSelector} from '../../../redux/selectors';
import {signUpValidations} from '../../../utils';
import {API_METHODS, callApi} from '../../../network/NetworkManger';
import {API} from '../../../network/Environment';
import {onAPIError} from '../../../helpers';

const SignUp = ({navigation}) => {
  const {isCompany, isTechnician} = useAccountType(accountSelector);
  const [username, setUsername] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    const data = {username, emailId, password, confirmPassword};
    const isValidate = signUpValidations(data);
    if (!isValidate) return;

    const onSuccess = response => {
      if (response.success) {
        console.log('RES: ', response);
      }
    };

    const formatedData = {
      userName: data.username,
      email: data.emailId,
      password: data.password,
      confirmPassword: data.confirmPassword,
      userType: isCompany ? 'Company' : 'isTechnician',
    };

    callApi(API_METHODS.POST, API.signUp, formatedData, onSuccess, onAPIError);

    // navigation.navigate(ROUTES.Address);
  };

  return (
    <Screen>
      <Header title="Sign Up" />
      <KeyboardAwareScrollView contentContainerStyle={[LAYOUT.screenPadding, LAYOUT.flexGrow1]} showsVerticalScrollIndicator={false}>
        <AppText style={authCommonStyles.headLabel}>Sign up with your email address to continue to app.</AppText>

        <View style={{gap: 20}}>
          <AppTextInput
            placeholder="User Name"
            LeftIcon={UserAvatarIcon}
            onChangeText={text => setUsername(text.toLowerCase().replace(/\s/g, ''))}
            value={username}
          />
          <AppTextInput placeholder="Email Id" LeftIcon={AtTheRateIcon} onChangeText={setEmailId} />
          <AppTextInput placeholder="Password" LeftIcon={LockIcon} passwordTypeInput={true} onChangeText={setPassword} />
          <AppTextInput placeholder="Confirm Password" LeftIcon={LockIcon} passwordTypeInput={true} onChangeText={setConfirmPassword} />
        </View>

        <AppButton title={'Sign Up'} style={signInStyles.signinButton} onPress={handleSignup} />

        <Seperator />

        <View style={signInStyles.socialContainer}>
          <Social Icon={GoogleIcon} />
          <Social Icon={AppleIcon} />
          <Social Icon={FacebookIcon} />
        </View>

        <AppText onPress={() => navigation.navigate(ROUTES.SignIn)} style={signInStyles.dontAccountText}>
          Already have an account? <AppText style={signInStyles.signUpText}>Sign In</AppText>
        </AppText>
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default SignUp;
