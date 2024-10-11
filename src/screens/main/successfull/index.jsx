import {View, Text} from 'react-native';
import React from 'react';
import {AppButton, AppText, Header, Screen} from '../../../components';
import {TickDotsIcon} from '../../../assets/icons';
import {FONTS, LAYOUT} from '../../../theme';
import {successStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';

const SuccessFull = ({navigation}) => {
  return (
    <Screen>
      <View style={successStyles.container}>
        <TickDotsIcon />
        <AppText style={successStyles.title}>Successfully subscribed</AppText>
        <AppText style={successStyles.description}>
          You've purchased your subscription successfully. Now you have access to all premium options in the app.
        </AppText>
        <AppButton title={'Go to home'} style={successStyles.button} onPress={() => navigation.navigate(ROUTES.Home)} />
      </View>
    </Screen>
  );
};

export default SuccessFull;
