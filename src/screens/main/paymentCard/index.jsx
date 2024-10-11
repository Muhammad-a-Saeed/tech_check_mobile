import {View, Text} from 'react-native';
import React from 'react';
import {AppButton, AppScrollView, AppTextInput, Header, Screen} from '../../../components';
import {paymentStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';

const PaymentCard = ({navigation}) => {
  return (
    <Screen>
      <Header title="Payment Card" />

      <AppScrollView>
        <View style={{gap: 20, flex: 1}}>
          <AppTextInput placeholder="Card Holder Name" />
          <AppTextInput placeholder="Card Number" />

          <View style={{flexDirection: 'row', gap: 12}}>
            <AppTextInput placeholder="Expiry Date" containerStyle={{width: '55%'}} />
            <AppTextInput placeholder="CVCs" containerStyle={{width: '42%'}} />
          </View>
        </View>

        <AppButton title={'Next'} style={paymentStyles.nextButton} onPress={() => navigation.navigate(ROUTES.Summary)} />
      </AppScrollView>
    </Screen>
  );
};

export default PaymentCard;
