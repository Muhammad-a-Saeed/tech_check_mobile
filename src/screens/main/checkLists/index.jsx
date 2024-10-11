import {View, FlatList} from 'react-native';
import React from 'react';
import {AppText, AppTextInput, CheckListCard, Header, Screen} from '../../../components';
import {staffIDsStyles} from '../styles';
import {BluePlusIcon, SearchBlueIcon} from '../../../assets/icons';
import {LAYOUT} from '../../../theme';
import {ROUTES} from '../../../utils/constants';
import {useSelector} from 'react-redux';

const CheckLists = ({navigation}) => {
  const profileType = useSelector(state => state?.auth?.profileType);
  const isTechnician = profileType === 'technician';

  return (
    <Screen>
      <Header
        LeftIcon={null}
        title="Check Lists"
        RightIcon={isTechnician ? <BluePlusIcon width={28} onPress={() => navigation.navigate(ROUTES.VehicleDetailsAdd)} /> : null}
      />

      <View style={staffIDsStyles.container}>
        <AppTextInput placeholder="Search" RightIcon={SearchBlueIcon} />

        <View style={staffIDsStyles.sectionHeader}>
          <AppText style={staffIDsStyles.sectionTitle}>Check Lists</AppText>
        </View>
      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        contentContainerStyle={[LAYOUT.screenPadding, LAYOUT.flexGrow1, staffIDsStyles.flatListContainer, LAYOUT.paddingBottom15]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => <CheckListCard onPress={() => navigation.navigate(ROUTES.CheckListDetails)} />}
      />
    </Screen>
  );
};

export default CheckLists;
