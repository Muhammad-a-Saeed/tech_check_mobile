import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS, LAYOUT} from '../../theme';
import {AutomativeImage} from '../../assets/images';
import AppText from '../text';

const IDCard = () => {
  return (
    <View style={[styles.cardContainer, LAYOUT.boxShadow2]}>
      <View style={styles.header}>
        <View style={styles.userDetails}>
          <View style={styles.avatarContainer}>
            <Image source={AutomativeImage} style={styles.avatar} />
          </View>
          <View style={styles.userInfo}>
            <AppText style={styles.userName}>Jhon Doe</AppText>
            <AppText style={styles.userRole}>Technician</AppText>
          </View>
        </View>
        <AppText style={styles.dateText}>09 Sep 2023</AppText>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoSection}>
          <AppText style={styles.infoLabel}>User ID</AppText>
          <AppText>automotive7532</AppText>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoSection}>
          <AppText style={styles.infoLabel}>Password</AppText>
          <AppText style={styles.passwordText}>1qaz2wsx09@</AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: COLORS.lightblue,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '95%',
    height: '95%',
  },
  userInfo: {
    maxWidth: '60%',
  },
  userName: {
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  userRole: {
    color: COLORS.greyText,
  },
  dateText: {
    color: COLORS.greyText,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },
  infoSection: {},
  infoLabel: {
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  divider: {
    width: 1,
    height: 25,
    backgroundColor: COLORS.grey3,
  },
  passwordText: {
    color: COLORS.greyText,
  },
});

export default IDCard;
