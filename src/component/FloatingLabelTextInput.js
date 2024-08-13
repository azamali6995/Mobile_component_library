import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FloatingLabelInput}  from 'react-native-floating-label-input';

const FloatingLabelTextInput = ({
  label,
  value,
  onChangeText,
  isPassword = false,
  customShowPasswordComponent = <Text>Show</Text>,
  customHidePasswordComponent = <Text>Hide</Text>,
  containerStyle = {},
  inputStyle = {},
  labelStyle = {},
}) => {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <View style={[styles.container, containerStyle]}>
      <FloatingLabelInput
        label={label}
        isPassword={isPassword}
        togglePassword={showPassword}
        value={value}
        onChangeText={onChangeText}
        customShowPasswordComponent={customShowPasswordComponent}
        customHidePasswordComponent={customHidePasswordComponent}
        inputStyles={inputStyle}
        labelStyles={labelStyle}
      />
    </View>
  );
};

export default FloatingLabelTextInput;

const styles = StyleSheet.create({
  container: {

    // padding: 50,
    // flex: 1,
    // backgroundColor: "pink"


  },
});
