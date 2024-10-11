import {View, ScrollView} from 'react-native';
import React from 'react';
import {AppButton, AppText, AppTextInput, Header, Screen} from '../../../components';
import {LAYOUT} from '../../../theme';
import {addressStyles, authCommonStyles} from '../styles';
import {LocationIcon} from '../../../assets/icons';
import {ROUTES} from '../../../utils/constants';

const Address = ({navigation}) => {
  return (
    <Screen>
      <Header title="Address" />

      <ScrollView contentContainerStyle={[LAYOUT.screenPadding, LAYOUT.flexGrow1]}>
        <AppText style={authCommonStyles.headLabel}>Please enter the details below.</AppText>
        <View style={[LAYOUT.flexGrow1, {gap: 20}]}>
          <AppTextInput placeholder="Type your location" RightIcon={LocationIcon} />

          <AppText
            style={addressStyles.selectOnMapText}
            onPress={
              () => {}
              // navigation.navigate(ROUTES.MapLocation)
            }>
            Select On Map
          </AppText>
        </View>

        <AppButton title={'continue'} style={authCommonStyles.buttonVerticalMargin} onPress={() => navigation.navigate(ROUTES.ProfileSetup)} />
      </ScrollView>
    </Screen>
  );
};

export default Address;
