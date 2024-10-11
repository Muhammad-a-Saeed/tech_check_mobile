import React from 'react';
import {View, ScrollView} from 'react-native';
import {AppScrollView, AppText, CheckListCard, Header, Screen} from '../../../components';
import {LAYOUT} from '../../../theme';
import {PhoneBlueIcon} from '../../../assets/icons';
import {checkListDetailsStyles, vehicleDetailsStyles} from '../styles';

const VehicleDetails = ({navigation}) => {
  return (
    <Screen>
      <Header title="Vehicle Details" />
      <AppScrollView>
        <CheckListCard />
        <View style={checkListDetailsStyles.vehicleInfoContainer}>
          <PhoneBlueIcon />
          <AppText style={[LAYOUT.flexGrow1, checkListDetailsStyles.greyText]}>+1 324 624 8392</AppText>
        </View>

        <View style={vehicleDetailsStyles.cardContainer}>
          {renderInfoRow('Vehicle name', 'Audi A3')}
          {renderInfoRow('Mileage', '14 kmpl')}
          {renderInfoRow('Odometer', '+07%')}
          {renderInfoRow('Odometer', 'Standard')}
        </View>
      </AppScrollView>
    </Screen>
  );
};

const renderInfoRow = (label, value) => {
  return (
    <View style={vehicleDetailsStyles.infoRow}>
      <AppText>{label}</AppText>
      <AppText style={vehicleDetailsStyles.greyText}>{value}</AppText>
    </View>
  );
};

export default VehicleDetails;
