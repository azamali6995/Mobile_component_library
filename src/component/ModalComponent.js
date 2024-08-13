import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal'; // Ensure the correct modal package is imported

const ModalComponent = ({
  isModalVisible,
  toggleModal,
  onBackdropPress,
  onBackButtonPress,
  children,
  modalStyle = {},
  contentStyle = {},
}) => {
  return (
    <View style={modalStyle}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={onBackdropPress || toggleModal}
        onBackButtonPress={onBackButtonPress || toggleModal}
      >
        <View style={[styles.content, contentStyle]}>
          {children}
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});
