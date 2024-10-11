import React from 'react';
import RNDatePicker from 'react-native-date-picker';

const DatePicker = ({onConfirm, onCancel, open, date}) => {
  return <RNDatePicker mode="date" modal open={open} date={date} onConfirm={onConfirm} onCancel={onCancel} />;
};

export default DatePicker;
