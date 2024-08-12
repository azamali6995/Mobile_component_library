import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';

const RadioButton = ({
  isLeft = false,
  text = "Option",
  selected = false,
  onClick = () => {},
  buttonSize = 24,
  borderRadius = 15,
  borderWidth = 2,
  selectedColor = "blue",
  unselectedColor = "gray",
  textStyle = {},
  containerStyle = {}
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.container,
        { marginLeft: isLeft ? 20 : 0 },
        containerStyle,
      ]}
    >
      <View
        style={[
          styles.radio,
          {
            height: buttonSize,
            width: buttonSize,
            borderRadius: borderRadius,
            borderWidth: borderWidth,
            borderColor: selected ? selectedColor : unselectedColor,
          },
        ]}
      >
        {selected ? (
          <View
            style={[
              styles.innerCircle,
              {
                height: buttonSize / 2,
                width: buttonSize / 2,
                borderRadius: borderRadius / 2,
                backgroundColor: selectedColor,
              },
            ]}
          />
        ) : (
          <View
            style={[
              styles.innerCircle,
              {
                height: buttonSize / 2,
                width: buttonSize / 2,
                borderRadius: borderRadius / 2,
                backgroundColor: unselectedColor,
              },
            ]}
          />
        )}
      </View>
      <TextComponent
        text={text}
        textStyle={StyleSheet.flatten([textStyle, styles.text])}
      />
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radio: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {},
  text: {
    marginLeft: 6,
  },
});
