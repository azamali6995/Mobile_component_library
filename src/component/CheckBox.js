import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextComponent from './TextComponent';

const CheckBox = ({ 
  isAgree, 
  onClick, 
  text, 
  iconSize = 28, 
  iconColorChecked, 
  iconColorUnchecked, 
  containerStyle, 
  textStyle 
}) => {
  const [isChecked, setIsChecked] = useState(isAgree);

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => {
          const newCheckStatus = !isChecked;
          setIsChecked(newCheckStatus);
          onClick(newCheckStatus);
        }}
      >
        <Icon
          name={isChecked ? "checkbox-marked" : "checkbox-blank-outline"}
          size={iconSize}
          color={isChecked ? iconColorChecked : iconColorUnchecked}
        />
      </TouchableOpacity>
      <TextComponent 
        text={text}
        textStyle={[styles.text, textStyle]}
      />
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    marginLeft: 5,
  },
});
