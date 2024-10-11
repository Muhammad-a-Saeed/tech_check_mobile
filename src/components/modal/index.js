import React from 'react';
import {Modal as RNModal, StyleSheet, View} from 'react-native';

const AppModal = ({isVisible, setIsVisible, children}) => {
  return (
    <RNModal animationType="slide" transparent={true} visible={isVisible} onRequestClose={() => setIsVisible(false)}>
      <View style={styles.centeredView}>{children}</View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
});

export default AppModal;
