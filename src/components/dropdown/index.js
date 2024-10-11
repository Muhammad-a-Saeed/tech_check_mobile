import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {CheckedCircleIcon, ChevronIcon, UnCheckedCircleIcon} from '../../assets/icons';
import AppText from '../text';
import AppTextInput from '../textInput';
import {COLORS} from '../../theme';

const Dropdown = ({
  zIndex,
  options,
  selectedValue,
  onValueChange = () => {},
  icon = true,
  label = 'Dropdown',
  containerStyle,
  isOtherAnswerOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = option => {
    setIsOpen(false);
    onValueChange(option);
  };

  return (
    <View style={[styles.container, containerStyle, {zIndex: zIndex}]}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
        <AppText style={styles.label}>{label}</AppText>
        <AppText style={styles.selectedValue}>{selectedValue}</AppText>
        {icon && <ChevronIcon height={18} />}
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.optionsContainer}>
          {options.map(option => (
            <TouchableOpacity key={option} onPress={() => handleOptionSelect(option)} style={styles.option}>
              <AppText>{option}</AppText>
              {option === selectedValue ? <CheckedCircleIcon height={20} /> : <UnCheckedCircleIcon height={20} />}
            </TouchableOpacity>
          ))}

          {isOtherAnswerOption && (
            <View style={styles.otherAnswerContainer}>
              <AppText style={styles.label}>Other (please specify)</AppText>
              <AppTextInput placeholder="Write here" containerStyle={styles.otherAnswerInput} />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    borderRadius: 12,
    backgroundColor: COLORS.grey5,
    paddingHorizontal: 17,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  label: {
    fontSize: 14,
    color: COLORS.greyText,
  },
  otherAnswerContainer: {
    padding: 15,
  },

  selectedValue: {
    flex: 1,
    fontSize: 14,
    textAlign: 'right',
  },
  optionsContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 5,
  },
  option: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderBottomColor: COLORS.grey3,
  },
  otherAnswerInput: {
    marginVertical: 10,
  },
});

export default Dropdown;
