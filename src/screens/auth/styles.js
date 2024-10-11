import {StyleSheet} from 'react-native';
import {COLORS, FONTS, FONT_SIZES, hp, wp} from '../../theme';

export const authCommonStyles = StyleSheet.create({
  headLabel: {
    marginBottom: 25,
  },
  buttonVerticalMargin: {
    marginVertical: 40,
  },
});

export const splashStyles = StyleSheet.create({
  container: {backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center'},
});

export const onBoardingStyles = StyleSheet.create({
  imageContainer: {flex: 1, height: '100%'},
  contentContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  textContentContainer: {alignItems: 'center', width: '90%', marginTop: '12%', marginBottom: '75%', gap: 10},
  welcomeText: {fontSize: 40, fontFamily: FONTS.black, color: COLORS.white},
  welcomeDescriptionText: {color: COLORS.white, textAlign: 'center'},
  nextButton: {},
  skipText: {color: COLORS.white, textDecorationLine: 'underline'},
  dotsContainer: {flexDirection: 'row', alignSelf: 'center', gap: 7},
  dotActive: {width: 25, height: 7, backgroundColor: COLORS.primary, borderRadius: 100},
  dotInactive: {width: 7, height: 7, backgroundColor: COLORS.grey2, borderRadius: 100},
  buttonContainer: {width: '100%', gap: 50},
  dotsAndSkip: {flexDirection: 'row', justifyContent: 'space-between'},
});

export const profileTypeStyles = StyleSheet.create({
  container: {},
  selectionCardText: {fontSize: FONT_SIZES.large, textTransform: 'uppercase'},
  selectionCardBox: {
    width: '100%',
    height: '80%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  selectionCardContainer: {width: wp(42), height: wp(52), alignItems: 'center', gap: 5},
  cardsContainer: {flexDirection: 'row', justifyContent: 'center', gap: wp(5), marginTop: '20%', marginBottom: '40%'},
});

export const signInStyles = StyleSheet.create({
  forgotPasswordText: {color: COLORS.primary, textDecorationLine: 'underline', textAlign: 'right', marginTop: 12},
  signinButton: {marginTop: 50},
  seperator: {flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', marginTop: 70, marginBottom: 50},
  seperatorLine: {height: 1, flexGrow: 1, backgroundColor: COLORS.grey3},
  orText: {color: COLORS.greyText, marginHorizontal: 10},
  socialIcon: {
    width: 80,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 12,
    borderColor: COLORS.grey3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grey1,
  },
  dontAccountText: {color: COLORS.greyText, marginTop: 80, alignSelf: 'center'},
  socialContainer: {flexDirection: 'row', gap: 15, alignSelf: 'center'},
  signUpText: {color: COLORS.primary, fontFamily: FONTS.bold, textDecorationLine: 'underline'},
});

export const emailOTPStyles = StyleSheet.create({
  buttonWrapper: {gap: 15},
  dontGetText: {color: COLORS.primary, textAlign: 'center', fontSize: FONT_SIZES.small},
  resendButton: {width: '30%', height: 40, alignSelf: 'center'},
  resendButtonText: {fontSize: FONT_SIZES.regular},
  otpInput: {
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 50,
    fontSize: 14,
    fontFamily: FONTS.bold,
    backgroundColor: COLORS.grey1,
  },
  otpContainer: {justifyContent: 'space-around', width: wp(70), alignSelf: 'center'},
});

export const addressStyles = StyleSheet.create({
  selectOnMapText: {alignSelf: 'center', color: COLORS.primary, textDecorationLine: 'underline'},
});

export const mapLocationStyles = StyleSheet.create({
  map: {
    width: '100%',
    height: hp(200),
    borderRadius: 16,
    marginBottom: 20,
    marginTop: 30,
  },
});

export const profileSetupStyles = StyleSheet.create({
  imageContainer: {
    width: wp(25),
    height: wp(25),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  cameraIconContainer: {
    width: '30%',
    height: '30%',
    borderRadius: 100,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    bottom: 5,
  },
  companyFundContainer: {height: 200},
  companyFundInput: {height: '100%', paddingTop: 20},
});

export const preferencesStyles = StyleSheet.create({
  label: {
    fontFamily: FONTS.bold,
    marginTop: 20,
    marginBottom: 12,
    fontSize: FONT_SIZES.regular,
  },
  tickTextContainer: {flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 10, alignSelf: 'flex-start'},
  tickText: {color: COLORS.greyText, maxWidth: '90%'},
});
