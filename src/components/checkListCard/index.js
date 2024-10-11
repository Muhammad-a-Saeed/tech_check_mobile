import {View, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, LAYOUT} from '../../theme';
import AppText from '../text';
import {CheckCircleIcon, UnCheckCircleIcon} from '../../assets/icons';

const CheckListCard = ({onPress}) => {
  const [isPreCheckList, setIsPreChecList] = useState(true);
  const [isPostCheckList, setIsPostChecList] = useState(true);

  return (
    <Pressable onPress={onPress} style={[styles.cardContainer, LAYOUT.boxShadow2]}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <AppText style={styles.userName}>Vehicle ID</AppText>
          <AppText style={styles.userRole}>LNO 3442</AppText>
        </View>
        <AppText style={styles.dateText}>09 Sep 2023</AppText>
      </View>
      <View style={styles.infoContainer}>
        <Pressable style={styles.infoSection} onPress={() => setIsPreChecList(!isPreCheckList)}>
          {isPreCheckList ? <CheckCircleIcon width={20} height={20} /> : <UnCheckCircleIcon width={20} height={20} />}
          <AppText style={styles.checklistLabel}>Pre Check List</AppText>
        </Pressable>
        <View style={styles.divider} />
        <Pressable style={styles.infoSection} onPress={() => setIsPostChecList(!isPostCheckList)}>
          {isPostCheckList ? <UnCheckCircleIcon width={20} height={20} /> : <CheckCircleIcon width={20} height={20} />}
          <AppText style={styles.checklistLabel}>Post Check List</AppText>
        </Pressable>
      </View>
    </Pressable>
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
  userInfo: {},
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checklistLabel: {
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  divider: {
    width: 1,
    height: 25,
    backgroundColor: COLORS.grey3,
  },
});

export default CheckListCard;
