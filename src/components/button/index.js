import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import AppText from '../text';
import {COLORS, FONTS} from '../../theme';

const AppButton = ({title, style, textStyle, onPress, variant = 'primary', ...restProps}) => {
  return (
    <TouchableOpacity style={[variant == 'primary' ? styles.primary : styles.secondary, style]} onPress={onPress} activeOpacity={0.7} {...restProps}>
      <AppText style={[variant == 'primary' ? styles.primaryText : styles.secondaryText, textStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primary: {
    width: '100%',
    height: 50,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },

  secondary: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
  },

  primaryText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FONTS.bold,
    textTransform: 'uppercase',
  },

  secondaryText: {
    color: COLORS.primary,
    fontSize: 18,
    fontFamily: FONTS.bold,
    textTransform: 'uppercase',
  },
});

export default AppButton;
