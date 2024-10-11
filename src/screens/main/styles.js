import {StyleSheet} from 'react-native';
import {COLORS, FONTS, FONT_SIZES, LAYOUT, wp} from '../../theme';

export const homeStyles = StyleSheet.create({
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '90%',
    height: '90%',
  },
  greetingContainer: {
    gap: 5,
  },
  greetingText: {
    fontSize: FONT_SIZES.small,
    color: COLORS.greyText,
  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  sectionTitle: {
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.regular,
  },
  sectionLink: {
    color: COLORS.primary,
  },
  cardContainer: {
    gap: 15,
  },
});

export const notificationStyles = StyleSheet.create({
  sectionList: {
    marginTop: 10,
  },
  sectionListContainer: {
    gap: 15,
  },
  sectionHeader: {
    // Add styles for section header if needed
  },
  notificationContainer: {
    padding: 15,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderRadius: 20,
  },
  notificationTextContainer: {
    maxWidth: '70%',
  },
  notificationTitle: {
    color: COLORS.white,
  },
  notificationSubtitle: {
    color: COLORS.grey2,
  },
});

export const staffIDsStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    ...LAYOUT.screenPadding,
  },
  sectionHeader: {
    ...homeStyles.sectionHeader,
    marginTop: 20,
  },
  sectionTitle: {
    ...homeStyles.sectionTitle,
  },
  sectionLink: {
    ...homeStyles.sectionLink,
  },
  flatListContainer: {
    gap: 15,
  },
});

export const createNewIDsStyles = StyleSheet.create({
  container: {
    ...LAYOUT.screenPadding,
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
  },
  inputContainer: {
    gap: 20,
    flex: 0.5,
  },
});

export const checkListDetailsStyles = StyleSheet.create({
  vehicleInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  greyText: {
    color: COLORS.greyText,
  },
  checkDetailsLink: {
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
  boldText: {
    fontFamily: FONTS.bold,
  },
  footerComponent: {
    marginVertical: 25,
  },
  listContainer: {
    gap: 15,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  photoContainer: {
    width: wp(28),
    height: wp(28),
    borderRadius: 10,
  },
  photoImage: {
    width: '100%',
    height: '100%',
  },
});

export const vehicleDetailsStyles = StyleSheet.create({
  cardContainer: {
    ...LAYOUT.boxShadow1,
    borderRadius: 10,
    padding: 15,
    gap: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greyText: {
    color: COLORS.greyText,
  },
});

export const paymentStyles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', ...LAYOUT.boxShadow1, padding: 15, borderRadius: 10},
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  mainContainer: {
    gap: 12,
    flex: 1,
  },
  nextButton: {},
});

export const subscriptionStyles = StyleSheet.create({
  buttonText: {
    fontSize: FONT_SIZES.normal,
    textTransform: 'capitalize',
  },
  headerButton: {borderRadius: 100, width: '31%', height: 40},
  actionButtons: {flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 30},
  cardContainer: {
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderColor: COLORS.primary,
  },
  titleContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    gap: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
  },
  subtitle: {
    fontSize: 12,
  },
  offerContainer: {
    gap: 12,
    marginTop: 20,
  },
  offerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  offerHeading: {
    fontSize: 16, // Adjust the size as needed
    // Add any additional styles for the offer heading
  },
  offerText: {
    color: COLORS.greyText,
    fontSize: 12,
  },
});

export const summaryStyles = StyleSheet.create({
  summaryContainer: {
    ...LAYOUT.boxShadow2,
    padding: 20,
    gap: 5,
    borderRadius: 10,
  },
  summaryTitle: {
    fontSize: 20,
    fontFamily: FONTS.bold,
  },
  summarySubtitle: {
    color: COLORS.greyText,
  },
  paymentDetails: {
    ...LAYOUT.boxShadow2,
    padding: 20,
    gap: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailValue: {
    fontSize: 12,
    color: COLORS.greyText,
  },
  amountDetails: {
    ...LAYOUT.boxShadow2,
    padding: 20,
    gap: 10,
    borderRadius: 10,
  },
  flex1: {
    flex: 1,
  },
});

export const successStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    ...LAYOUT.screenPadding,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    marginVertical: 20,
  },
  description: {
    textAlign: 'center',
  },
  button: {
    marginTop: '50%',
  },
});

export const profileStyles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    gap: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  companyName: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: 16,
    marginTop: 10,
  },
  settingsContainer: {
    gap: 20,
    width: '100%',
    marginTop: 30,
  },
  settingRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  settingRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  settingRowTitle: {
    color: COLORS.lightBlack,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
export const vehicleDetailsAddStyles = StyleSheet.create({
  formContainer: {gap: 20, flex: 1},
});

export const prePostPhotoStyles = StyleSheet.create({
  container: {
    ...LAYOUT.screenPadding,
    ...LAYOUT.paddingBottom15,
  },
  pressableContainer: {
    ...LAYOUT.boxShadow2,
    padding: 10,
    borderRadius: 7,
  },
  dashedContainer: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: COLORS.primary,
  },
  captureText: {textDecorationLine: 'underline', color: COLORS.primary},
  listContainer: {
    ...LAYOUT.flexGrow1,
    ...LAYOUT.screenPadding,
    ...LAYOUT.paddingBottom15,
    ...checkListDetailsStyles.listContainer,
  },
  footerComponent: {
    marginVertical: 20,
  },
  columnWrapper: {
    ...checkListDetailsStyles.columnWrapper,
  },
});
