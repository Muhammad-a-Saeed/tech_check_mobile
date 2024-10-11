import {View} from 'react-native';
import React from 'react';
import {AppButton, AppText, AppTextInput, Header, Screen} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LAYOUT} from '../../../theme';
import {authCommonStyles} from '../styles';
import {AtTheRateIcon} from '../../../assets/icons';
import {ROUTES} from '../../../utils/constants';

const UserEmail = ({navigation}) => {
  return (
    <Screen>
      <Header title="Email" />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[LAYOUT.flexGrow1, LAYOUT.screenPadding]}>
        <AppText style={authCommonStyles.headLabel}>Enter your Email to Reset Password.</AppText>

        <View style={LAYOUT.flexGrow1}>
          <AppTextInput placeholder="Email Id" LeftIcon={AtTheRateIcon} />
        </View>

        <AppButton style={authCommonStyles.buttonVerticalMargin} title={'Continue'} onPress={() => navigation.navigate(ROUTES.EmailOTP)} />
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default UserEmail;
