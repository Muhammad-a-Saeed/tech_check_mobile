import {View} from 'react-native';
import React from 'react';
import {AppButton, AppTextInput, Header, Screen} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LAYOUT} from '../../../theme';
import {AtTheRateIcon, LockIcon, ProfileAvatarIcon} from '../../../assets/icons';
import {createNewIDsStyles} from '../styles';

const CreateNewID = ({navigation}) => {
  return (
    <Screen>
      <Header title="New ID" />
      <KeyboardAwareScrollView
        contentContainerStyle={[createNewIDsStyles.container, LAYOUT.flexGrow1]}
        style={createNewIDsStyles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={createNewIDsStyles.inputContainer}>
          <AppTextInput placeholder="Technician name" LeftIcon={ProfileAvatarIcon} />
          <AppTextInput placeholder="User ID" LeftIcon={AtTheRateIcon} />
          <AppTextInput placeholder="Password" LeftIcon={LockIcon} />
          <AppTextInput placeholder="Confirm Password" LeftIcon={LockIcon} />
        </View>

        <AppButton title={'Create'} onPress={() => navigation.goBack()} />
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default CreateNewID;
