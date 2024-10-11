import React, {useState} from 'react';
import {View, Image, Pressable} from 'react-native';
import {AppScrollView, AppText, Header, Screen} from '../../../components';
import {
  BellLightIcon,
  CameraIcon,
  ExitIcon,
  GrayChevronIcon,
  InfoIcon,
  LockLightIcon,
  NotificationIcon,
  PencilLightIcon,
} from '../../../assets/icons';
import {AutomativeImage} from '../../../assets/images';
import {ROUTES} from '../../../utils/constants';
import {profileStyles} from '../styles';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '../../../redux/slices/auth';
import {CommonActions} from '@react-navigation/native';
import {profileSetupStyles} from '../../auth/styles';
import { ImagePicker } from '../../../helpers';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const profileType = useSelector(state => state?.auth?.profileType);
  const isCompany = profileType === 'company';
  const isTechnician = profileType === 'technician';

  const [image, setImage] = useState(null);

  const handleImagePick = async () => {
    if (isCompany) return;

    const image = await ImagePicker({type: 'gallery', mediaType: 'image'});
    if (image.assets.length > 0) {
      setImage({uri: image.assets[0].uri});
    }
  };

  return (
    <Screen>
      <Header
        title="Profile"
        LeftIcon={null}
        RightIcon={<NotificationIcon width={28} />}
        onPressRightIcon={() => navigation.navigate(ROUTES.Notifications)}
      />

      <AppScrollView>
        <View style={profileStyles.profileContainer}>
          <Pressable style={[profileSetupStyles.imageContainer, {marginBottom: 0}]} onPress={handleImagePick}>
            <Image source={image ? image : AutomativeImage} style={profileSetupStyles.image} />
            {isTechnician && (
              <View style={profileSetupStyles.cameraIconContainer}>
                <CameraIcon />
              </View>
            )}
          </Pressable>
          <AppText style={profileStyles.companyName}>{isCompany ? 'Company Name' : 'JHON DOE'}</AppText>

          <View style={profileStyles.settingsContainer}>
            {isCompany && (
              <SettingRow
                Icon={PencilLightIcon}
                title={'Edit Profile'}
                onPress={() => navigation.navigate(ROUTES.Auth, {screen: ROUTES.ProfileSetup, params: {screenType: 'Edit'}})}
              />
            )}
            <SettingRow Icon={BellLightIcon} title={'Notification settings'} onPress={() => navigation.navigate(ROUTES.NotificationSettings)} />
            {isCompany && <SettingRow Icon={LockLightIcon} title={'Change Password'} onPress={() => navigation.navigate(ROUTES.ChangePassword)} />}
            <SettingRow Icon={InfoIcon} title={'About us'} onPress={() => navigation.navigate(ROUTES.AboutUs)} />

            <Pressable
              style={profileStyles.logoutContainer}
              onPress={() => {
                dispatch(authActions.setUser(null));
                navigation.dispatch(CommonActions.reset({index: 0, routes: [{name: ROUTES.Auth}]}));
              }}>
              <ExitIcon width={20} height={20} />
              <AppText>Logout</AppText>
            </Pressable>
          </View>
        </View>
      </AppScrollView>
    </Screen>
  );
};

const SettingRow = ({Icon, title, onPress}) => {
  return (
    <Pressable onPress={onPress} style={profileStyles.settingRowContainer}>
      <View style={profileStyles.settingRowContent}>
        <Icon width={20} height={20} />
        <AppText style={profileStyles.settingRowTitle}>{title}</AppText>
      </View>
      <GrayChevronIcon />
    </Pressable>
  );
};

export default Profile;
