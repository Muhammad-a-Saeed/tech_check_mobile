import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChecklistStack, HomeStack, ProfileStack, SubscriptionStack} from '../stacks/main';
import {AppText} from '../../components';
import {ROUTES} from '../../utils/constants';
import {COLORS, FONTS} from '../../theme';
import {
  CheckListBlueIcon,
  CheckListIcon,
  HomeBlueIcon,
  HomeIcon,
  ProfileBlueIcon,
  ProfileIcon,
  SubscriptionBlueIcon,
  SubscriptionIcon,
} from '../../assets/icons';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const profileType = useSelector(state => state?.auth?.profileType);
  const isCompany = profileType === 'company';

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 65, borderTopWidth: 0},
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => <TabIcon Icon={focused ? HomeBlueIcon : HomeIcon} />,
        }}
        name={ROUTES.TabHome}
        component={HomeStack}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => <TabIcon Icon={focused ? CheckListBlueIcon : CheckListIcon} />,
        }}
        name={ROUTES.TabChecklist}
        component={ChecklistStack}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => <TabIcon Icon={focused ? SubscriptionBlueIcon : SubscriptionIcon} style={{opacity: isCompany ? 1 : 0.7}} />,
        }}
        name={ROUTES.TabSubscription}
        component={SubscriptionStack}
        listeners={{
          tabPress: e => {
            if (!isCompany) {
              e.preventDefault();
            }
          },
        }}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => <TabIcon Icon={focused ? ProfileBlueIcon : ProfileIcon} />,
        }}
        name={ROUTES.TabProfile}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

const TabIcon = ({Icon, style}) => {
  return <Icon height={22} width={22} style={style} />;
};

export default BottomTab;
