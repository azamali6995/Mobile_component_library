import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ButtonComponent = ({
  title, 
  onPress, 
  backgroundColor = "#2591CA", 
  fontSize = 20, 
  fontWeight = '600', 
  textColor = '#fff', 
  borderRadius = 10, 
  height = 54, 
  width = '100%'}
) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyleContainer,
        {backgroundColor, borderRadius, height, width},
      ]}>
      <TouchableOpacity
        style={styles.buttonInner}
        onPress={onPress}>
        <Text
          style={{
            fontSize,
            fontWeight,
            color: textColor,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonStyleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonInner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
