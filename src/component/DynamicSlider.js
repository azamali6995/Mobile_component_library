import React from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider'; // Ensure the correct slider package is imported

const DynamicSlider = ({
  style = {},
  minimumValue = 0,
  maximumValue = 1,
  value,
  onValueChange,
  minimumTrackTintColor = '#FFFFFF',
  maximumTrackTintColor = '#000000',
  thumbTintColor = '#FFFFFF',
  step = 0,
}) => {
  return (
    <Slider
      style={[styles.slider, style]}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      value={value}
      onValueChange={onValueChange}
      minimumTrackTintColor={minimumTrackTintColor}
      maximumTrackTintColor={maximumTrackTintColor}
      thumbTintColor={thumbTintColor}
      step={step}
    />
  );
};

export default DynamicSlider;

const styles = StyleSheet.create({
  slider: {
    width: 200,
    height: 40,
  },
});
