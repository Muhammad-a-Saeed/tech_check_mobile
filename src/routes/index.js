import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './stacks/auth';
import BottomTab from './bottomTab';
import {ROUTES} from '../utils/constants';
import {NavigationTheme} from '../theme';
import {CheckListDetails, CreateNewID, Notifications, PrePostCheckPhoto, SuccessFull, VehicleDetailsAdd} from '../screens/main';
import VehicleDetails from '../screens/main/vehicleDetails';
import PreCheckList from '../screens/main/checkListDetails/preCheckList';
import PostCheckList from '../screens/main/checkListDetails/postCheckList';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

const Routes = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator initialRouteName={ROUTES.Auth} screenOptions={screenOptions}>
        {/* Auth Screens */}
        <Stack.Screen name={ROUTES.Auth} component={AuthStack} />
        {/* Screens With Bottom Tab */}
        <Stack.Screen name={ROUTES.Main} component={BottomTab} />
        {/* Screens Without Bottom Tab Screens */}

        <Stack.Screen name={ROUTES.Notifications} component={Notifications} />
        <Stack.Screen name={ROUTES.CreateNewID} component={CreateNewID} />
        <Stack.Screen name={ROUTES.CheckListDetails} component={CheckListDetails} />
        <Stack.Screen name={ROUTES.VehicleDetails} component={VehicleDetails} />
        <Stack.Screen name={ROUTES.PreCheckList} component={PreCheckList} />
        <Stack.Screen name={ROUTES.PostCheckList} component={PostCheckList} />
        <Stack.Screen name={ROUTES.SuccessFull} component={SuccessFull} />
        <Stack.Screen name={ROUTES.VehicleDetailsAdd} component={VehicleDetailsAdd} />
        <Stack.Screen name={ROUTES.PrePostCheckPhoto} component={PrePostCheckPhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
