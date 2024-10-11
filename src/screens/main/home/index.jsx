import {Image, View} from 'react-native';
import React from 'react';
import {AppScrollView, AppText, CheckListCard, Header, IDCard, Screen} from '../../../components';
import {NotificationIcon} from '../../../assets/icons';
import {AutomativeImage} from '../../../assets/images';
import {homeStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const profileType = useSelector(state => state?.auth?.profileType);
  const isCompany = profileType === 'company';

  return (
    <Screen>
      <Header
        title="Home"
        LeftIcon={null}
        RightIcon={<NotificationIcon width={28} />}
        onPressRightIcon={() => navigation.navigate(ROUTES.Notifications)}
      />

      <AppScrollView>
        <View style={homeStyles.userInfoContainer}>
          <View style={homeStyles.avatarContainer}>
            <Image source={AutomativeImage} style={homeStyles.avatar} />
          </View>
          <View style={homeStyles.greetingContainer}>
            <AppText style={homeStyles.greetingText}>Good Morning</AppText>
            <AppText>Alex Matheson</AppText>
          </View>
        </View>

        {isCompany && (
          <View style={homeStyles.sectionContainer}>
            <View style={homeStyles.sectionHeader}>
              <AppText style={homeStyles.sectionTitle}>Staff IDs</AppText>
              <AppText style={homeStyles.sectionLink} onPress={() => navigation.navigate(ROUTES.StaffIDs)}>
                See all
              </AppText>
            </View>

            <View style={homeStyles.cardContainer}>
              {[1, 2].map((staffID, index) => (
                <IDCard key={index} />
              ))}
            </View>
          </View>
        )}

        <View style={homeStyles.sectionContainer}>
          <View style={homeStyles.sectionHeader}>
            <AppText style={homeStyles.sectionTitle}>Check Lists</AppText>
            <AppText style={homeStyles.sectionLink} onPress={() => navigation.navigate(ROUTES.TabChecklist, {screen: ROUTES.CheckLists})}>
              See all
            </AppText>
          </View>

          <View style={homeStyles.cardContainer}>
            {[1, 2, 2, 1, 1, 2, 1, 1].map((staffID, index) => (
              <CheckListCard key={index} />
            ))}
          </View>
        </View>
      </AppScrollView>
    </Screen>
  );
};

export default Home;
