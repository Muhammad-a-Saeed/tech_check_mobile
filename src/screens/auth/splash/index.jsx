import {View} from 'react-native';
import React, {useEffect} from 'react';
import {LAYOUT} from '../../../theme';
import {splashStyles} from '../styles';
import {LogoIcon} from '../../../assets/icons';
import {ROUTES} from '../../../utils/constants';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(ROUTES.Onboarding);
      //   navigation.replace(ROUTES.Main);
    }, 3000);
  }, []);

  return (
    <View style={[LAYOUT.flex1, splashStyles.container]}>
      <LogoIcon />
    </View>
  );
};

export default Splash;
