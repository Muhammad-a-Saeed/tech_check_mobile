import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../utils/constants';
import {
  AboutUs,
  ChangePassword,
  CheckLists,
  Home,
  NotificationSettings,
  PaymentCard,
  PaymentMethod,
  Profile,
  StaffIDs,
  Subscription,
  Summary,
} from '../../screens/main';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.Home} screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.Home} component={Home} />
      <Stack.Screen name={ROUTES.StaffIDs} component={StaffIDs} />
    </Stack.Navigator>
  );
};

export const ChecklistStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.CheckLists} screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.CheckLists} component={CheckLists} />
    </Stack.Navigator>
  );
};

export const SubscriptionStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.Subscription} screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.Subscription} component={Subscription} />
      <Stack.Screen name={ROUTES.Summary} component={Summary} />
      <Stack.Screen name={ROUTES.PaymentCard} component={PaymentCard} />
      <Stack.Screen name={ROUTES.PaymentMethod} component={PaymentMethod} />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.Profile} screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.Profile} component={Profile} />
      <Stack.Screen name={ROUTES.NotificationSettings} component={NotificationSettings} />
      <Stack.Screen name={ROUTES.ChangePassword} component={ChangePassword} />
      <Stack.Screen name={ROUTES.AboutUs} component={AboutUs} />
    </Stack.Navigator>
  );
};
