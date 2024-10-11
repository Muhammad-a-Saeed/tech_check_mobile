import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';
import {EyeHideIcon, EyeOpenIcon} from '../../assets/icons';

function AppTextInput({
  RightIcon,
  LeftIcon,
  width = '100%',
  onChangeText,
  containerStyle,
  placeholder = '',
  innerRef,
  onPressRightIcon,
  textInputStyle,
  secureTextEntry,
  passwordTypeInput,
  ...otherProps
}) {
  const [isSecurePassword, setIsSecurePassword] = useState(false);

  const PasswordRightIcon = isSecurePassword ? EyeHideIcon : EyeOpenIcon;
  return (
    <View style={[styles.searchSection, containerStyle]}>
      {LeftIcon && <LeftIcon height={20} />}

      <TextInput
        ref={innerRef}
        style={[styles.input, textInputStyle]}
        selectionColor={COLORS.primary}
        placeholder={placeholder}
        placeholderTextColor={COLORS.greyText}
        secureTextEntry={isSecurePassword}
        onChangeText={onChangeText}
        {...otherProps}
      />

      {passwordTypeInput && <PasswordRightIcon height={20} width={20} onPress={() => setIsSecurePassword(prev => !prev)} />}
      {RightIcon && <RightIcon height={20} width={20} onPress={onPressRightIcon} />}
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: COLORS.grey5,
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    backgroundColor: COLORS.grey5,
    fontFamily: FONTS.regular,
    fontSize: 15,
    color: COLORS.black,
    height: '100%',
    paddingHorizontal: 7,
  },
});

export default AppTextInput;
