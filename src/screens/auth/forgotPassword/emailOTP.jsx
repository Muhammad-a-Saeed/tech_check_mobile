import {View} from 'react-native';
import React from 'react';
import {AppButton, AppText, Header, Screen} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, LAYOUT} from '../../../theme';
import {authCommonStyles, emailOTPStyles} from '../styles';
import OTPTextInput from 'react-native-otp-textinput';
import {ROUTES} from '../../../utils/constants';

const EmailOTP = ({navigation}) => {
  const handleChangeText = text => {
    if (text.length == 4) {
      navigation.navigate(ROUTES.CreatePassword);
    }
  };

  return (
    <Screen>
      <Header title="OTP" />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[LAYOUT.flexGrow1, LAYOUT.screenPadding]}>
        <AppText style={authCommonStyles.headLabel}>Enter OTP We’ve Just Sent You by Email.</AppText>

        <View style={LAYOUT.flexGrow1}>
          <OTPTextInput
            autoFocus
            tintColor={COLORS.primary}
            containerStyle={emailOTPStyles.otpContainer}
            textInputStyle={emailOTPStyles.otpInput}
            handleTextChange={handleChangeText}
          />
        </View>

        <View style={[authCommonStyles.buttonVerticalMargin, emailOTPStyles.buttonWrapper]}>
          <AppText style={emailOTPStyles.dontGetText}>Don’t get one time code ?</AppText>
          <AppButton title={'Resend'} style={emailOTPStyles.resendButton} textStyle={emailOTPStyles.resendButtonText} />
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default EmailOTP;
