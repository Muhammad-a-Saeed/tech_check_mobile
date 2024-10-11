import {View, Text, SectionList} from 'react-native';
import React from 'react';
import {AppText, Header, Screen} from '../../../components';
import {LAYOUT} from '../../../theme';
import {NotificationWhitePlusIcon} from '../../../assets/icons';
import {notificationStyles} from '../styles';

const DATA = [
  {
    title: 'Today',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Yesterday',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'November 22, 2022',
    data: ['Water', 'Coke', 'Beer'],
  },
];

const Notifications = () => {
  return (
    <Screen>
      <Header title="Notifications" />
      <SectionList
        style={notificationStyles.sectionList}
        contentContainerStyle={[LAYOUT.screenPadding, notificationStyles.sectionListContainer]}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Notification item={item} />}
        renderSectionHeader={({section: {title}}) => <Text style={notificationStyles.sectionHeader}>{title}</Text>}
      />
    </Screen>
  );
};

const Notification = ({item}) => {
  return (
    <View style={notificationStyles.notificationContainer}>
      <NotificationWhitePlusIcon />
      <View style={notificationStyles.notificationTextContainer}>
        <AppText style={notificationStyles.notificationTitle}>Account Setup Successfully!</AppText>
        <AppText style={notificationStyles.notificationSubtitle}>Your account has been created!</AppText>
      </View>
    </View>
  );
};

export default Notifications;
