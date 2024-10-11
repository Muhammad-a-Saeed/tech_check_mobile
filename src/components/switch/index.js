import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../../theme';

const Switch = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={[styles.whiteContainer, {borderColor: props.value ? COLORS.primary : '#d8d8d8'}]}>
      <View>{!props.value && <View style={[styles.unSelected, !props.value ? styles.ballGray : null]} />}</View>
      <View>{props.value && <View style={[styles.selected, !props.value ? styles.ballGray : null]} />}</View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  whiteContainer: {
    height: 15,
    width: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  unSelected: {
    width: 8,
    height: 8,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
  },
  selected: {
    width: 8,
    height: 8,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    alignSelf: 'flex-end',
  },
  ballGray: {
    backgroundColor: '#d8d8d8',
  },
});
export default Switch;
