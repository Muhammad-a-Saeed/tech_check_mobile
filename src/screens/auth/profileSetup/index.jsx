import {View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppText, AppTextInput, DatePicker, Header, Screen} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LAYOUT} from '../../../theme';
import {authCommonStyles, profileSetupStyles} from '../styles';
import {AutomativeImage} from '../../../assets/images';
import {CalendarIcon, CameraIcon, CarIcon, LocationTickIcon} from '../../../assets/icons';
import { ImagePicker} from '../../../helpers';
import {ROUTES} from '../../../utils/constants';

const ProfileSetup = ({navigation, route}) => {
  const isEditScreen = route.params?.screenType;
  const [image, setImage] = useState(AutomativeImage);
  const [companyFounded, setCompanyFounded] = useState(new Date());
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const handleImagePick = async () => {
    const image = await ImagePicker({type: 'gallery', mediaType: 'image'});
    if (image.assets.length > 0) {
      setImage({uri: image.assets[0].uri});
    }
  };

  const handleCompanyFoundedDateSelect = () => {
    setDatePickerOpen(true);
  };

  return (
    <Screen>
      <Header title={isEditScreen ? 'Profile' : 'Profile Setup'} />
      <KeyboardAwareScrollView contentContainerStyle={[LAYOUT.flexGrow1, LAYOUT.screenPadding]} showsVerticalScrollIndicator={false}>
        {!isEditScreen && <AppText style={authCommonStyles.headLabel}>Please complete your profile to continue.</AppText>}

        <View style={LAYOUT.flexGrow1}>
          {/* Profile Image */}

          <Pressable style={profileSetupStyles.imageContainer} onPress={handleImagePick}>
            <Image source={image} style={profileSetupStyles.image} />
            <View style={profileSetupStyles.cameraIconContainer}>
              <CameraIcon />
            </View>
          </Pressable>

          {/* Input Form */}
          <View style={{gap: 20}}>
            <AppTextInput placeholder="Company Name" LeftIcon={CarIcon} />
            <AppTextInput
              placeholder="Company founded"
              LeftIcon={LocationTickIcon}
              RightIcon={CalendarIcon}
              onPressRightIcon={handleCompanyFoundedDateSelect}
              value={companyFounded.toLocaleDateString()}
            />
            <AppTextInput
              placeholder="About the company"
              containerStyle={profileSetupStyles.companyFundContainer}
              textInputStyle={profileSetupStyles.companyFundInput}
              textAlignVertical="top"
              multiline
            />
          </View>
        </View>

        <AppButton
          title={'Continue'}
          style={authCommonStyles.buttonVerticalMargin}
          onPress={() => {
            if (isEditScreen) return navigation.goBack();
            navigation.navigate(ROUTES.Preferences);
          }}
        />
      </KeyboardAwareScrollView>

      <DatePicker
        open={datePickerOpen}
        date={companyFounded}
        onCancel={() => setDatePickerOpen(false)}
        onConfirm={date => {
          setDatePickerOpen(false);
          setCompanyFounded(date);
        }}
      />
    </Screen>
  );
};

export default ProfileSetup;
