import {View} from 'react-native';
import React, {useRef, useState} from 'react';
import {AppButton, AppText, Header, Screen} from '../../../components';
import {LAYOUT} from '../../../theme';
import {authCommonStyles, mapLocationStyles} from '../styles';
import MapView, {Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import {isAndroid} from '../../../utils';

const MapLocation = () => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    name: '',
    latitude: 12.33,
    longitude: 244.44,
    latitudeDelta: 5,
    longitudeDelta: 5,
  });

  return (
    <Screen>
      <Header title="Map" />

      <View style={[LAYOUT.screenPadding, LAYOUT.flexGrow1]}>
        <AppText style={authCommonStyles.headLabel}>Please enter the details below.</AppText>
      </View>

      <MapView
        ref={mapRef}
        zoomEnabled={true}
        zoomTapEnabled={true}
        style={mapLocationStyles.map}
        provider={isAndroid ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
        initialRegion={region}
        region={region}>
        {/* <Marker draggable={true} tracksViewChanges={false} image={appIcons.mapPin} coordinate={region}></Marker> */}
      </MapView>

      <AppButton title={'Select'} style={authCommonStyles.buttonVerticalMargin} />
    </Screen>
  );
};

export default MapLocation;
