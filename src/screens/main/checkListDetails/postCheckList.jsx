import {View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScrollView, AppText, Header, Screen, StepBar, TickText} from '../../../components';
import {renderVehicleInfo} from '.';
import {checkListDetailsStyles} from '../styles';
import {COLORS, FONTS, FONT_SIZES} from '../../../theme';
import {ROUTES} from '../../../utils/constants';
import {useSelector} from 'react-redux';

const PostCheckList = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const profileType = useSelector(state => state?.auth?.profileType);
  const isCompany = profileType === 'company';

  const TireInspection = [
    {title: 'Check tire pressure and ensure they are properly inflated.', isSelected: true, isDisable: false},
    {title: 'Look for any signs of wear, such as cuts or bulges.', isSelected: false, isDisable: true},
  ];

  const FluidsLevel = [
    {title: 'Engine oil', isSelected: true, isDisable: false},
    {title: 'Transmission fluid', isSelected: true, isDisable: false},
    {title: 'Brake fluid', isSelected: false, isDisable: false},
    {title: 'Coolant/antifreeze', isSelected: false, isDisable: false},
    {title: 'Power steering fluid', isSelected: false, isDisable: false},
    {title: 'Windshield washer fluid', isSelected: true, isDisable: false},
  ];

  const LightsAndSignals = [
    {title: 'Headlights (low and high beams)', isSelected: true, isDisable: false},
    {title: 'Brake lights', isSelected: true, isDisable: false},
    {title: 'Turn signals', isSelected: true, isDisable: false},
    {title: 'Hazard lights', isSelected: true, isDisable: false},
  ];

  const Brakes = [
    {title: 'Check for any unusual noises or sensations when braking', isSelected: true, isDisable: false},
    {title: 'Ensure the brake pedal feels firm and responsive.', isSelected: true, isDisable: false},
  ];

  const Battery = [
    {title: 'Inspect for signs of corrosion or loose connections', isSelected: true, isDisable: false},
    {title: 'Test the battery voltage if needed', isSelected: true, isDisable: false},
  ];

  const BeltsAndHoses = [
    {title: 'Look for any visible signs of wear or damage.', isSelected: true, isDisable: false},
    {title: 'Check for proper tension in belts.', isSelected: true, isDisable: false},
  ];

  const AirFilter = [{title: "Ensure it's clean and not clogged with debris.", isSelected: true, isDisable: false}];

  const handleNext = () => {
    if (currentIndex === 2) {
      if (isCompany) navigation.navigate(ROUTES.CheckListDetails);
      else navigation.navigate(ROUTES.PrePostCheckPhoto, {headerTitle: 'Post Check photo'});

      return;
    }
    setCurrentIndex(prev => Math.max(0, prev + 1));
  };

  return (
    <Screen>
      <Header title="Check List Details" />
      <AppScrollView>
        {isCompany && renderVehicleInfo()}
        <StepBar activeStep={currentIndex} totalSteps={2} />
        <AppText style={checkListDetailsStyles.boldText}>Post Check List From Technician</AppText>
        {currentIndex === 1 && (
          <View>
            <View>
              <AppText style={{fontSize: FONT_SIZES.large, color: COLORS.black, fontFamily: FONTS.bold, marginTop: 20, marginBottom: 10}}>
                Tire Inspection
              </AppText>

              {TireInspection.map((inspec, index) => (
                <TickText isChecked={inspec.isSelected} disabled={inspec.isDisable} onPress={() => {}} key={index} text={inspec.title} />
              ))}
            </View>

            <View>
              <AppText style={{fontSize: FONT_SIZES.large, color: COLORS.black, fontFamily: FONTS.bold, marginTop: 20, marginBottom: 10}}>
                Fluid Levels
              </AppText>

              {FluidsLevel.map((inspec, index) => (
                <TickText isChecked={inspec.isSelected} disabled={inspec.isDisable} onPress={() => {}} key={index} text={inspec.title} />
              ))}
            </View>

            <View>
              <AppText style={{fontSize: FONT_SIZES.large, color: COLORS.black, fontFamily: FONTS.bold, marginTop: 20, marginBottom: 10}}>
                Lights and Signals
              </AppText>

              {LightsAndSignals.map((inspec, index) => (
                <TickText isChecked={inspec.isSelected} disabled={inspec.isDisable} onPress={() => {}} key={index} text={inspec.title} />
              ))}
            </View>
          </View>
        )}

        {currentIndex === 2 && (
          <View>
            <View>
              <AppText style={{fontSize: FONT_SIZES.large, color: COLORS.black, fontFamily: FONTS.bold, marginTop: 20, marginBottom: 10}}>
                Brakes
              </AppText>

              {Brakes.map((inspec, index) => (
                <TickText isChecked={inspec.isSelected} disabled={inspec.isDisable} onPress={() => {}} key={index} text={inspec.title} />
              ))}
            </View>

            <View>
              <AppText style={{fontSize: FONT_SIZES.large, color: COLORS.black, fontFamily: FONTS.bold, marginTop: 20, marginBottom: 10}}>
                Battery
              </AppText>

              {Battery.map((inspec, index) => (
                <TickText isChecked={inspec.isSelected} disabled={inspec.isDisable} onPress={() => {}} key={index} text={inspec.title} />
              ))}
            </View>

            <View>
              <AppText style={{fontSize: FONT_SIZES.large, color: COLORS.black, fontFamily: FONTS.bold, marginTop: 20, marginBottom: 10}}>
                Belts and Hoses
              </AppText>

              {BeltsAndHoses.map((inspec, index) => (
                <TickText isChecked={inspec.isSelected} disabled={inspec.isDisable} onPress={() => {}} key={index} text={inspec.title} />
              ))}
            </View>

            <View>
              <AppText style={{fontSize: FONT_SIZES.large, color: COLORS.black, fontFamily: FONTS.bold, marginTop: 20, marginBottom: 10}}>
                Air Filter
              </AppText>

              {AirFilter.map((inspec, index) => (
                <TickText isChecked={inspec.isSelected} disabled={inspec.isDisable} onPress={() => {}} key={index} text={inspec.title} />
              ))}
            </View>
          </View>
        )}

        <View style={{flexGrow: 1}} />
        <AppButton title={'next'} onPress={handleNext} style={checkListDetailsStyles.footerComponent} />
      </AppScrollView>
    </Screen>
  );
};

export default PostCheckList;
