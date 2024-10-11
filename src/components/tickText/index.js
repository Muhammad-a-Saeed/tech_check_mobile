import {Pressable} from 'react-native';
import React from 'react';
import {CheckIcon, UnCheckIcon} from '../../assets/icons';
import {preferencesStyles} from '../../screens/auth/styles';
import AppText from '../text';

const TickText = ({text, onPress, isChecked, disabled}) => {
  return (
    <Pressable disabled={disabled} style={[preferencesStyles.tickTextContainer, {opacity: disabled ? 0.7 : 1}]} onPress={() => onPress(text)}>
      {isChecked ? <CheckIcon /> : <UnCheckIcon />}
      <AppText style={preferencesStyles.tickText}>{text}</AppText>
    </Pressable>
  );
};

export default TickText;
