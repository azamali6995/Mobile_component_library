import { Text } from 'react-native';
import React from 'react';

const TextComponent = ({ text, textStyle }) => {
  return <Text style={textStyle}>{text}</Text>;
};

export default TextComponent;
