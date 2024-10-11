import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppText, Header, Screen, TickText} from '../../../components';
import {LAYOUT} from '../../../theme';
import {authCommonStyles, preferencesStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';

const Preferences = ({navigation}) => {
  const [isNotify, setIsNotify] = useState(true);
  const [contentPreferences, setContentPreferences] = useState(['Media Preferences', 'Diagnostics and Troubleshooting', 'Technology and Features1']);
  const [mediaPreferences, setMediaPreferences] = useState(['How-to Guides', 'Expert Interviews', 'Technology and Features']);

  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const handleSelectPreference = preference => {
    if (selectedPreferences.includes(preference)) {
      const updatedPreferences = selectedPreferences.filter(p => p !== preference);
      setSelectedPreferences(updatedPreferences);
    } else {
      setSelectedPreferences(prev => [...prev, preference]);
    }
  };

  return (
    <Screen>
      <Header title="Address" />

      <ScrollView contentContainerStyle={[LAYOUT.screenPadding, LAYOUT.flexGrow1]}>
        <AppText style={authCommonStyles.headLabel}>Please check the preference you want.</AppText>

        <View style={LAYOUT.flexGrow1}>
          <TickText text={'Notify me about recalls and updates'} isChecked={isNotify} onPress={() => setIsNotify(p => !p)} />

          <AppText style={preferencesStyles.label}>Content Preferences</AppText>

          {contentPreferences.map(preference => (
            <TickText key={preference} text={preference} isChecked={selectedPreferences.includes(preference)} onPress={handleSelectPreference} />
          ))}

          <AppText style={preferencesStyles.label}>Media Preferences</AppText>
          {mediaPreferences.map(preference => (
            <TickText key={preference} onPress={handleSelectPreference} isChecked={selectedPreferences.includes(preference)} text={preference} />
          ))}
        </View>

        <AppButton style={authCommonStyles.buttonVerticalMargin} title={'Continue'} onPress={() => navigation.replace(ROUTES.Main)} />
      </ScrollView>
    </Screen>
  );
};

export default Preferences;
