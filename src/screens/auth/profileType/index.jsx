import {View, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppText, Header, Screen} from '../../../components';
import {COLORS, LAYOUT} from '../../../theme';
import {CarGearSettingActiveIcon, CarGearSettingIcon, MenSettingActiveIcon, MenSettingIcon} from '../../../assets/icons';
import {authCommonStyles, profileTypeStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';
import {useDispatch} from 'react-redux';
import {authActions} from '../../../redux/slices/auth';

const SelectionEnum = {
  company: 'company',
  technician: 'technician',
};

const ProfileType = ({navigation}) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(SelectionEnum.company);

  const handleContinue = () => {
    dispatch(authActions.setProfileType(selected));
    navigation.navigate(ROUTES.SignIn, {profileType: selected});
  };

  return (
    <Screen>
      <Header title="Profile Type" />
      <ScrollView contentContainerStyle={[LAYOUT.flexGrow1, LAYOUT.screenPadding]} showsVerticalScrollIndicator={false}>
        <AppText style={authCommonStyles.headLabel}>Choose your profile type to continue to the app.</AppText>

        <SelectionCard onChange={setSelected} value={selected} />

        <AppButton title={'Continue'} onPress={handleContinue} />
      </ScrollView>
    </Screen>
  );
};

const SelectionCard = ({onChange, value}) => {
  return (
    <View style={profileTypeStyles.cardsContainer}>
      <Card
        title={SelectionEnum.company}
        Icon={value === SelectionEnum.company ? CarGearSettingActiveIcon : CarGearSettingIcon}
        isActive={value === SelectionEnum.company}
        onPress={() => onChange(SelectionEnum.company)}
      />

      <Card
        title={SelectionEnum.technician}
        Icon={value === SelectionEnum.technician ? MenSettingActiveIcon : MenSettingIcon}
        isActive={value === SelectionEnum.technician}
        onPress={() => onChange(SelectionEnum.technician)}
      />
    </View>
  );
};

const Card = ({isActive, title, Icon, onPress}) => {
  const selectionCardStyles = {
    ...profileTypeStyles.selectionCardBox,
    borderColor: isActive ? COLORS.primary : null,
    ...(isActive ? LAYOUT.boxShadow3 : null),
    shadowColor: isActive ? COLORS.primary : null,
  };

  const textStyles = {...profileTypeStyles.selectionCardText, color: isActive ? COLORS.primary : COLORS.greyText};
  return (
    <Pressable style={profileTypeStyles.selectionCardContainer} onPress={onPress}>
      <View style={selectionCardStyles}>
        <Icon width={'70%'} height={'70%'} />
      </View>

      <AppText style={textStyles}>{title}</AppText>
    </Pressable>
  );
};

export default ProfileType;
