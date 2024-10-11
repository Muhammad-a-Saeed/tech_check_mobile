import {View, Pressable} from 'react-native';
import React from 'react';
import {AppButton, AppScrollView, AppText, Header, Screen} from '../../../components';
import {AppleIcon, CheckCircleIcon, GoogleIcon, MasterCardIcon, UnCheckCircleIcon} from '../../../assets/icons';

import {paymentStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';

const PaymentMethod = ({navigation}) => {
  return (
    <Screen>
      <Header title="Payment Method" />

      <AppScrollView>
        <View style={paymentStyles.mainContainer}>
          <Pressable style={paymentStyles.container}>
            <View style={paymentStyles.content}>
              <GoogleIcon />
              <AppText>Google Pay</AppText>
            </View>
            <UnCheckCircleIcon width={20} />
          </Pressable>

          <Pressable style={paymentStyles.container}>
            <View style={paymentStyles.content}>
              <AppleIcon />
              <AppText>Apple pay</AppText>
            </View>
            <UnCheckCircleIcon width={20} />
          </Pressable>

          <Pressable style={paymentStyles.container}>
            <View style={paymentStyles.content}>
              <MasterCardIcon />
              <AppText>.... .... .... .... 4679</AppText>
            </View>
            <CheckCircleIcon width={20} />
          </Pressable>
        </View>

        <AppButton title={'Next'} style={paymentStyles.nextButton} onPress={() => navigation.navigate(ROUTES.PaymentCard)} />
      </AppScrollView>
    </Screen>
  );
};

export default PaymentMethod;
