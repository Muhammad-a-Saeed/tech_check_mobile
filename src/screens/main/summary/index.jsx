import {View, Text} from 'react-native';
import React from 'react';
import {AppButton, AppScrollView, AppText, Header, Screen} from '../../../components';
import {COLORS, FONTS, LAYOUT} from '../../../theme';
import {summaryStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';

const Summary = ({navigation}) => {
  return (
    <Screen>
      <Header title="Summary" />

      <AppScrollView>
        <View style={summaryStyles.summaryContainer}>
          <AppText style={summaryStyles.summaryTitle}>Premium monthly</AppText>
          <AppText style={summaryStyles.summarySubtitle}>Access premium features</AppText>
        </View>

        <View style={summaryStyles.paymentDetails}>
          <View style={summaryStyles.detailRow}>
            <AppText>Name</AppText>
            <AppText style={summaryStyles.detailValue}>Card Holder Name</AppText>
          </View>
          <View style={summaryStyles.detailRow}>
            <AppText>Payment</AppText>
            <AppText style={summaryStyles.detailValue}>Master Card</AppText>
          </View>
          <View style={summaryStyles.detailRow}>
            <AppText>Date</AppText>
            <AppText style={summaryStyles.detailValue}>Dec 00, 2023 | 00:00 Pm</AppText>
          </View>
        </View>

        <View style={summaryStyles.amountDetails}>
          <View style={summaryStyles.detailRow}>
            <AppText>Amount</AppText>
            <AppText style={summaryStyles.detailValue}>$0,000</AppText>
          </View>
          <View style={summaryStyles.detailRow}>
            <AppText>Tax</AppText>
            <AppText style={summaryStyles.detailValue}>$000</AppText>
          </View>
          <View style={summaryStyles.detailRow}>
            <AppText>Total</AppText>
            <AppText style={summaryStyles.detailValue}>$0,000</AppText>
          </View>
        </View>
        <View style={summaryStyles.flex1} />
        <AppButton title={'Next'} onPress={() => navigation.navigate(ROUTES.SuccessFull)} />
      </AppScrollView>
    </Screen>
  );
};

export default Summary;
