import {COLORS} from './colors';
import {DefaultTheme} from '@react-navigation/native';

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    background: COLORS.white,
  },
};
