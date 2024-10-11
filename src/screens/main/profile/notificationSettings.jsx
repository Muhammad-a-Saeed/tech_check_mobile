import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {AppScrollView, AppText, Header, Screen, Switch} from '../../../components';

const NotificationSettings = () => {
  const [isGeneral, setIsGeneral] = useState(false);
  const [isSound, setIsSound] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <Screen>
      <Header title="Notifications" />

      <AppScrollView>
        <View style={{gap: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <AppText>General</AppText>
            <Switch value={isGeneral} onPress={() => setIsGeneral(!isGeneral)} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <AppText>Sound</AppText>
            <Switch value={isSound} onPress={() => setIsSound(!isSound)} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <AppText>Payments</AppText>
            <Switch value={isPayment} onPress={() => setIsPayment(!isPayment)} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <AppText>Updates</AppText>
            <Switch value={isUpdate} onPress={() => setIsUpdate(!isUpdate)} />
          </View>
        </View>
      </AppScrollView>
    </Screen>
  );
};

export default NotificationSettings;
