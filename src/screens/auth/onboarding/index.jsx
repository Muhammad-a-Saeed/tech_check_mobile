import {Animated, ImageBackground, PanResponder, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Onboard1Image, Onboard2Image, Onboard3Image} from '../../../assets/images';
import {LogoIcon} from '../../../assets/icons';
import {onBoardingStyles} from '../styles';
import {AppButton, AppText} from '../../../components';
import {LAYOUT} from '../../../theme';
import {ROUTES} from '../../../utils/constants';

const DATA = [
  {
    image: Onboard3Image,
    title: 'Welcome!',
    description: "We are thrilled to have you on board! Whether you're a car enthusiast, a DIY mechanic, or simply looking.",
  },
  {
    image: Onboard2Image,
    title: 'Staff Cover',
    description: "We are thrilled to have you on board! Whether you're a car enthusiast, a DIY mechanic, or simply looking.",
  },
  {
    image: Onboard1Image,
    title: 'Check Lists',
    description: "We are thrilled to have you on board! Whether you're a car enthusiast, a DIY mechanic, or simply looking.",
  },
];

const Onboarding = ({navigation}) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex === DATA.length - 1) {
      return moveToProfileTypeScreen();
    }

    setActiveIndex(prev => prev + 1);
  };

  const moveToProfileTypeScreen = () => {
    navigation.navigate(ROUTES.ProfileType);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {useNativeDriver: false}),
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dx > 50) {
        // Swiped to the right

        setActiveIndex(prevIndex => Math.max(0, prevIndex - 1));
      } else if (gestureState.dx < -50) {
        // Swiped to the left
        setActiveIndex(prevIndex => Math.min(DATA.length - 1, prevIndex + 1));
      }

      // Reset the pan gesture
      Animated.spring(pan, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <ImageBackground style={onBoardingStyles.imageContainer} source={DATA[activeIndex].image}>
      <Animated.View style={LAYOUT.flex1} {...panResponder.panHandlers}>
        <View style={[onBoardingStyles.contentContainer, LAYOUT.screenPadding]}>
          <LogoIcon />

          <View style={onBoardingStyles.textContentContainer}>
            <AppText style={onBoardingStyles.welcomeText}>{DATA[activeIndex].title}</AppText>
            <AppText style={onBoardingStyles.welcomeDescriptionText}>{DATA[activeIndex].description}</AppText>
          </View>

          <View style={onBoardingStyles.buttonContainer}>
            <View style={onBoardingStyles.dotsAndSkip}>
              <PaginateDots activeIndex={activeIndex} />
              <AppText style={onBoardingStyles.skipText} onPress={moveToProfileTypeScreen}>
                Skip
              </AppText>
            </View>

            <AppButton title={'Next'} style={onBoardingStyles.nextButton} onPress={handleNext} />
          </View>
        </View>
      </Animated.View>
    </ImageBackground>
  );
};

const PaginateDots = ({activeIndex}) => {
  return (
    <View style={onBoardingStyles.dotsContainer}>
      <Dot isActive={activeIndex === 0} />
      <Dot isActive={activeIndex === 1} />
      <Dot isActive={activeIndex === 2} />
    </View>
  );
};

const Dot = ({isActive}) => {
  return <View style={isActive ? onBoardingStyles.dotActive : onBoardingStyles.dotInactive} />;
};

export default Onboarding;
