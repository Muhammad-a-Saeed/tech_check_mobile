import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppButton, AppText, AppTextInput, Header, Screen} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LAYOUT} from '../../../theme';
import {AppleIcon, AtTheRateIcon, FacebookIcon, GoogleIcon, LockIcon, UserAvatarIcon} from '../../../assets/icons';
import {authCommonStyles, signInStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';
import {useRoute} from '@react-navigation/native';

const SignIn = ({navigation}) => {
  const {params} = useRoute();
  const isCompany = params?.profileType === 'company';

  return (
    <Screen>
      <Header title="Sign In" />

      <KeyboardAwareScrollView contentContainerStyle={[LAYOUT.screenPadding, LAYOUT.flexGrow1]} showsVerticalScrollIndicator={false}>
        <AppText style={authCommonStyles.headLabel}>Sign In with your email address to continue to app.</AppText>

        <View style={{gap: 20}}>
          <AppTextInput placeholder={isCompany ? 'Email Id' : 'User Id'} LeftIcon={isCompany ? AtTheRateIcon : UserAvatarIcon} />
          <AppTextInput placeholder="Password" LeftIcon={LockIcon} passwordTypeInput={true} />
        </View>

        {isCompany && (
          <AppText style={signInStyles.forgotPasswordText} onPress={() => navigation.navigate(ROUTES.UserEmail)}>
            Forgot Password?
          </AppText>
        )}

        <AppButton title={'Sign in'} style={signInStyles.signinButton} onPress={() => navigation.replace(ROUTES.Main)} />

        {isCompany && (
          <>
            <Seperator />

            <View style={signInStyles.socialContainer}>
              <Social Icon={GoogleIcon} />
              <Social Icon={AppleIcon} />
              <Social Icon={FacebookIcon} />
            </View>

            <AppText onPress={() => navigation.navigate(ROUTES.SignUp)} style={signInStyles.dontAccountText}>
              Don’t have an account? <AppText style={signInStyles.signUpText}>Sign Up</AppText>
            </AppText>
          </>
        )}
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export const Seperator = () => {
  return (
    <View style={signInStyles.seperator}>
      <View style={signInStyles.seperatorLine} />
      <AppText style={signInStyles.orText}>You can connect with</AppText>
      <View style={signInStyles.seperatorLine} />
    </View>
  );
};

export const Social = ({Icon}) => {
  return (
    <TouchableOpacity style={signInStyles.socialIcon}>
      <Icon />
    </TouchableOpacity>
  );
};

export default SignIn;
