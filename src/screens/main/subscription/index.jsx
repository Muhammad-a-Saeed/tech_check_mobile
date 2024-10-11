import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScrollView, AppText, Header, Screen} from '../../../components';
import {CheckCircleIcon, NotificationIcon} from '../../../assets/icons';
import {ROUTES} from '../../../utils/constants';
import {subscriptionStyles, summaryStyles} from '../styles';
import {COLORS, FONTS} from '../../../theme';

const SUBSCRIPTION = [{title: 'Basic Plan'}, {title: 'Standard Plan'}, {title: 'Premium Plan'}];
const Subscription = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('basic');

  let subscription = 'Basic Plan';
  if (activeTab === 'standard') subscription = 'Standard Plan';
  else if (activeTab === 'premium') subscription = 'Premium Plan';

  return (
    <Screen>
      <Header
        LeftIcon={null}
        title="Subscription"
        RightIcon={<NotificationIcon width={28} />}
        onPressRightIcon={() => navigation.navigate(ROUTES.Notifications)}
      />

      <AppScrollView>
        <ActionButtons active={activeTab} onPress={setActiveTab} />

        <Card title={subscription} />

        <View style={summaryStyles.flex1} />

        <AppButton title={'Next'} onPress={() => navigation.navigate(ROUTES.PaymentMethod)} />
      </AppScrollView>
    </Screen>
  );
};

const Card = ({title}) => {
  return (
    <View style={subscriptionStyles.cardContainer}>
      <View style={subscriptionStyles.titleContainer}>
        <AppText style={subscriptionStyles.title}>{title}</AppText>
        <AppText style={subscriptionStyles.subtitle}>{'per month, billed monthly'}</AppText>
      </View>

      <View style={subscriptionStyles.offerContainer}>
        {[1, 2, 3, 4, 5, 6, 7].map(i => (
          <View key={i} style={subscriptionStyles.offerItem}>
            <View>
              <AppText style={subscriptionStyles.offerHeading}>Offer Heading</AppText>
              <AppText style={subscriptionStyles.offerText}>What you offered?</AppText>
            </View>

            <CheckCircleIcon width={20} />
          </View>
        ))}
      </View>
    </View>
  );
};

const ActionButtons = ({active, onPress}) => {
  return (
    <View style={subscriptionStyles.actionButtons}>
      <AppButton
        title={'Basic'}
        variant={active === 'basic' ? 'primary' : 'secondary'}
        style={subscriptionStyles.headerButton}
        textStyle={subscriptionStyles.buttonText}
        onPress={() => onPress('basic')}
      />
      <AppButton
        title={'Standard'}
        variant={active === 'standard' ? 'primary' : 'secondary'}
        style={subscriptionStyles.headerButton}
        textStyle={subscriptionStyles.buttonText}
        onPress={() => onPress('standard')}
      />
      <AppButton
        title={'Premium'}
        variant={active === 'premium' ? 'primary' : 'secondary'}
        style={subscriptionStyles.headerButton}
        textStyle={subscriptionStyles.buttonText}
        onPress={() => onPress('premium')}
      />
    </View>
  );
};

export default Subscription;
