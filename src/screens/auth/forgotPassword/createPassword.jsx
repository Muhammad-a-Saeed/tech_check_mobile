import {View, Text} from 'react-native';
import React from 'react';
import {AppButton, AppText, AppTextInput, Header, Screen} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LAYOUT} from '../../../theme';
import {authCommonStyles} from '../styles';
import {LockIcon} from '../../../assets/icons';
import {ROUTES} from '../../../utils/constants';

const CreatePassword = ({navigation}) => {
  return (
    <Screen>
      <Header title="Create Password" />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[LAYOUT.flexGrow1, LAYOUT.screenPadding]}>
        <AppText style={authCommonStyles.headLabel}>Create New Password Here.</AppText>

        <View style={[LAYOUT.flexGrow1, {gap: 20}]}>
          <AppTextInput placeholder="Password" LeftIcon={LockIcon} passwordTypeInput={true} />
          <AppTextInput placeholder="Confirm Password" LeftIcon={LockIcon} passwordTypeInput={true} />
        </View>

        <AppButton style={authCommonStyles.buttonVerticalMargin} title={'Continue'} onPress={() => navigation.replace(ROUTES.SignIn)} />
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default CreatePassword;
