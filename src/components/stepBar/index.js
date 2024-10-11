import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

const StepBar = ({totalSteps, activeStep}) => {
  const renderSteps = () => {
    const steps = [];
    for (let i = 1; i <= totalSteps; i++) {
      steps.push(<View key={i} style={[styles.step, i === activeStep ? styles.activeStep : styles.inactiveStep]} />);
    }

    return steps;
  };

  return <View style={styles.stepContainer}>{renderSteps()}</View>;
};

const styles = StyleSheet.create({
  stepContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },
  step: {
    flexGrow: 1,
    height: 3,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.grey3,
  },
  activeStep: {
    backgroundColor: COLORS.primary,
  },
  inactiveStep: {
    backgroundColor: COLORS.grey3,
  },
  stepText: {
    color: COLORS.white,
  },
});

export default StepBar;
