import {View, Text} from 'react-native';
import React from 'react';
import {AppButton, AppScrollView, AppTextInput, Header, Screen} from '../../../components';
import {Car1Icon, CarBodyIcon, CarIcon, HighMeterIcon, IDCardIcon, PhoneIcon, ZeroMeterIcon} from '../../../assets/icons';
import {authCommonStyles} from '../../auth/styles';
import {ROUTES} from '../../../utils/constants';
import {vehicleDetailsAddStyles} from '../styles';

const VehicleDetailsAdd = ({navigation}) => {
  return (
    <Screen>
      <Header title="Vehicle Details" />
      <AppScrollView>
        <View style={vehicleDetailsAddStyles.formContainer}>
          <AppTextInput LeftIcon={Car1Icon} placeholder="Vehicle" />
          <AppTextInput LeftIcon={IDCardIcon} placeholder="Vehicle ID" />
          <AppTextInput LeftIcon={ZeroMeterIcon} placeholder="Mileage" />
          <AppTextInput LeftIcon={HighMeterIcon} placeholder="Odometer" />
          <AppTextInput LeftIcon={CarBodyIcon} placeholder="Exterior Condition" />
          <AppTextInput LeftIcon={PhoneIcon} placeholder="Contact info" />
        </View>

        <AppButton
          title={'next'}
          style={authCommonStyles.buttonVerticalMargin}
          onPress={() => navigation.navigate(ROUTES.PrePostCheckPhoto, {headerTitle: 'Pre Check photo'})}
        />
      </AppScrollView>
    </Screen>
  );
};

export default VehicleDetailsAdd;
