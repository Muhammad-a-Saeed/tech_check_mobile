import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../text';
import {COLORS, FONTS, FONT_SIZES} from '../../theme';
import {ArrowIcon} from '../../assets/icons';

function Header({
  title = '',
  containerStyle,
  LeftIcon = <ArrowIcon width={20} height={20} />,
  RightIcon,
  onPressLeftIcon,
  onPressRightIcon,
  rightText,
  rightTextStyle,
  onPressRightText,
}) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.leftIconAndTitle}>
        {LeftIcon && (
          <TouchableOpacity activeOpacity={0.6} onPress={onPressLeftIcon ? onPressLeftIcon : () => navigation.goBack()}>
            {LeftIcon}
          </TouchableOpacity>
        )}

        <AppText style={styles.title}>{title}</AppText>
      </View>

      <View>
        {RightIcon && (
          <TouchableOpacity activeOpacity={0.6} onPress={onPressRightIcon}>
            {RightIcon}
          </TouchableOpacity>
        )}

        {rightText && (
          <AppText style={rightTextStyle} onPress={onPressRightText}>
            {rightText}
          </AppText>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {height: 50, justifyContent: 'space-between', marginHorizontal: 15, flexDirection: 'row', alignItems: 'center'},
  leftIconAndTitle: {flexDirection: 'row', alignItems: 'center', gap: 15},
  title: {color: COLORS.black, fontSize: FONT_SIZES.huge, fontFamily: FONTS.bold},
});

export default Header;
