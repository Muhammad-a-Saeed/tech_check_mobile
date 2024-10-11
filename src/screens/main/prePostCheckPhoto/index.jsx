import {View, Pressable, FlatList} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppText, Header, Screen} from '../../../components';
import {Camera1Icon} from '../../../assets/icons';
import {Photo} from '../checkListDetails';
import ImageView from 'react-native-image-viewing';
import {MechanicImage} from '../../../assets/images';
import {prePostPhotoStyles} from '../styles';
import { ImagePicker } from '../../../helpers';
import {ROUTES} from '../../../utils/constants';
import {useRoute} from '@react-navigation/native';

const PrePostCheckPhoto = ({navigation}) => {
  const {params} = useRoute();
  const headerTitle = params?.headerTitle || '';
  const [isImageViewerShow, setIsImageViewerShow] = useState(false);

  const handleCaptureImage = async () => {
    const images = await ImagePicker({type: 'camera', mediaType: 'photo'});
    console.log(images);
  };

  return (
    <Screen>
      <Header title={headerTitle} />
      <View style={prePostPhotoStyles.container}>
        <Pressable style={prePostPhotoStyles.pressableContainer} onPress={handleCaptureImage}>
          <View style={prePostPhotoStyles.dashedContainer}>
            <Camera1Icon width={70} height={70} />
            <AppText style={prePostPhotoStyles.captureText}>Captured Photo</AppText>
          </View>
        </Pressable>
      </View>

      <FlatList
        data={[1, 2, 1, 1, 1, 2, 1, 1, 2]}
        renderItem={({item, index}) => <Photo onPress={() => setIsImageViewerShow(true)} item={item} />}
        ListFooterComponentStyle={prePostPhotoStyles.footerComponent}
        contentContainerStyle={prePostPhotoStyles.listContainer}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        columnWrapperStyle={prePostPhotoStyles.columnWrapper}
        ListFooterComponent={() => {
          return <AppButton title={'Next'} onPress={() => navigation.navigate(ROUTES.PreCheckList)} />;
        }}
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

export default PrePostCheckPhoto;
