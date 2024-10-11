import {View, FlatList, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppText, CheckListCard, Header, Screen} from '../../../components';
import {GearImage, MechanicImage} from '../../../assets/images';
import {LAYOUT} from '../../../theme';
import {PhoneBlueIcon} from '../../../assets/icons';
import ImageView from 'react-native-image-viewing';
import {checkListDetailsStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';

const CheckListDetails = ({navigation}) => {
  const [isImageViewerShow, setIsImageViewerShow] = useState(false);

  const renderNextButton = () => {
    return <AppButton title={'next'} onPress={() => navigation.navigate(ROUTES.PreCheckList)} />;
  };

  return (
    <Screen>
      <Header title="Check List Details" />

      <FlatList
        data={[1, 2, 1, 1, 1, 2, 1, 1, 2]}
        renderItem={({item, index}) => <Photo onPress={() => setIsImageViewerShow(true)} item={item} />}
        ListHeaderComponent={() => {
          return (
            <>
              {renderVehicleInfo()}
              <AppText style={checkListDetailsStyles.boldText}>Pre Check List Photos</AppText>
            </>
          );
        }}
        ListFooterComponent={renderNextButton}
        ListFooterComponentStyle={checkListDetailsStyles.footerComponent}
        contentContainerStyle={[LAYOUT.flexGrow1, LAYOUT.screenPadding, LAYOUT.paddingBottom15, checkListDetailsStyles.listContainer]}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        columnWrapperStyle={checkListDetailsStyles.columnWrapper}
      />

      <ImageView
        images={[MechanicImage]}
        imageIndex={0}
        visible={isImageViewerShow}
        onRequestClose={() => {
          setIsImageViewerShow(false);
        }}
      />
    </Screen>
  );
};

export const Photo = ({item, onPress}) => {
  return (
    <Pressable onPress={onPress} style={checkListDetailsStyles.photoContainer}>
      <Image source={item === 2 ? MechanicImage : GearImage} style={checkListDetailsStyles.photoImage} />
    </Pressable>
  );
};

export const renderVehicleInfo = is => {
  return (
    <>
      <CheckListCard />
      <View style={checkListDetailsStyles.vehicleInfoContainer}>
        <PhoneBlueIcon />
        <AppText style={[LAYOUT.flexGrow1, checkListDetailsStyles.greyText]}>+1 324 624 8392</AppText>
        <AppText style={checkListDetailsStyles.checkDetailsLink}>Check details</AppText>
      </View>
    </>
  );
};

export default CheckListDetails;
