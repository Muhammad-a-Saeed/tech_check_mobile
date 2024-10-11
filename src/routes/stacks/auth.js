import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../utils/constants';
import {
  Address,
  CreatePassword,
  EmailOTP,
  MapLocation,
  Onboarding,
  Preferences,
  ProfileSetup,
  ProfileType,
  SignIn,
  SignUp,
  Splash,
  UserEmail,
} from '../../screens/auth';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.Splash} screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.Splash} component={Splash} />
      <Stack.Screen name={ROUTES.Onboarding} component={Onboarding} />
      <Stack.Screen name={ROUTES.ProfileType} component={ProfileType} />
      <Stack.Screen name={ROUTES.SignIn} component={SignIn} />
      <Stack.Screen name={ROUTES.SignUp} component={SignUp} />

      <Stack.Screen name={ROUTES.CreatePassword} component={CreatePassword} />
      <Stack.Screen name={ROUTES.UserEmail} component={UserEmail} />
      <Stack.Screen name={ROUTES.EmailOTP} component={EmailOTP} />
      <Stack.Screen name={ROUTES.Address} component={Address} />
      <Stack.Screen name={ROUTES.MapLocation} component={MapLocation} />
      <Stack.Screen name={ROUTES.ProfileSetup} component={ProfileSetup} />
      <Stack.Screen name={ROUTES.Preferences} component={Preferences} />
    </Stack.Navigator>
  );
};

export default AuthStack;
