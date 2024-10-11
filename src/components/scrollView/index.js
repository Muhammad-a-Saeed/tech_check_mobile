import {ScrollView} from 'react-native';
import React from 'react';
import {LAYOUT} from '../../theme';

const AppScrollView = ({children}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[LAYOUT.screenPadding, LAYOUT.flexGrow1, LAYOUT.paddingBottom15]}
      style={{marginTop: 10}}
      children={children}
    />
  );
};

export default AppScrollView;
