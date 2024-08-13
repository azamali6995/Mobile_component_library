
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';

const DynamicProgressBar = ({
  progress = 0.5,
  width = 200,
  color = '#3b5998',
  unfilledColor = '#f3f3f3',
  borderWidth = 1,
  borderRadius = 5,
  height = 10,
  animationType = 'spring',
  style = {},
}) => {
  return (
    <View style={[styles.container, style]}>
      <Progress.Bar
        progress={progress}
        width={width}
        color={color}
        unfilledColor={unfilledColor}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
        height={height}
        animationType={animationType}
      />
    </View>
  );
};

export default DynamicProgressBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
