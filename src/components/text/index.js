import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS, FONTS, FONT_SIZES} from '../../theme';

const AppText = ({children, style, onPress, ...otherProps}) => {
  return (
    <Text onPress={onPress} style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.lightBlack,
    fontSize: FONT_SIZES.normal,
    fontFamily: FONTS.regular,
    includeFontPadding: false,
  },
});

export default AppText;
