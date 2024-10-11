import {View, Text} from 'react-native';
import React from 'react';
import {AppButton, AppText, AppTextInput, Header, Screen} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LAYOUT} from '../../../theme';
import {authCommonStyles} from '../../auth/styles';
import {LockIcon} from '../../../assets/icons';

const ChangePassword = ({navigation}) => {
  return (
    <Screen>
      <Header title="Change Password" />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[LAYOUT.flexGrow1, LAYOUT.screenPadding, LAYOUT.paddingBottom15]}>
        <View style={[LAYOUT.flexGrow1, {gap: 20}]}>
          <AppTextInput placeholder="Old Password" LeftIcon={LockIcon} passwordTypeInput={true} />
          <AppTextInput placeholder="Password" LeftIcon={LockIcon} passwordTypeInput={true} />
          <AppTextInput placeholder="Confirm Password" LeftIcon={LockIcon} passwordTypeInput={true} />
        </View>

        <AppButton title={'Save changes'} onPress={() => navigation.goBack()} />
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default ChangePassword;
