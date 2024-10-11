import {View, FlatList} from 'react-native';
import React from 'react';
import {AppText, AppTextInput, Header, IDCard, Screen} from '../../../components';
import {LAYOUT} from '../../../theme';
import {SearchBlueIcon} from '../../../assets/icons';
import {ROUTES} from '../../../utils/constants';
import {staffIDsStyles} from '../styles';

const StaffIDs = ({navigation}) => {
  return (
    <Screen>
      <Header title="Staff IDs" />

      <View style={staffIDsStyles.container}>
        <AppTextInput placeholder="Search" RightIcon={SearchBlueIcon} />

        <View style={staffIDsStyles.sectionHeader}>
          <AppText style={staffIDsStyles.sectionTitle}>Staff IDs</AppText>
          <AppText style={staffIDsStyles.sectionLink} onPress={() => navigation.navigate(ROUTES.CreateNewID)}>
            Create new
          </AppText>
        </View>
      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        contentContainerStyle={[LAYOUT.screenPadding, LAYOUT.flexGrow1, staffIDsStyles.flatListContainer, LAYOUT.paddingBottom15]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => <IDCard />}
      />
    </Screen>
  );
};

export default StaffIDs;
