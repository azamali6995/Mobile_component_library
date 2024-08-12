import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const InputText = (props) => {
  const [secureText, setSecureText] = useState(true);

  function handleOnTextChange(txt) {
    props.onChangeText(txt);
  }

  return (
    <View style={[styles.inputContainer, props.bgStyle]}>
      <View style={[styles.leftIconContainer, props.leftIconStyle]}>
        {/* Add any left icon or component here if needed */}
      </View>
      <TextInput
        style={[
          styles.textInput,
          {
            fontSize: props.fontSize || 15,
            fontFamily: props.fontFamily || 'Poppins-Regular',
            color: props.textColor || '#000',
            paddingLeft: 10,
          },
        ]}
        secureTextEntry={props.RightIcon && secureText}
        value={props.val}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor || '#A6A6A6'}
        editable={props.edit}
        keyboardType={props.keyboardType}
        autoCapitalize={props.autoCapitalize}
        autoCorrect={false}
        returnKeyType={props.returnKeyType}
        ref={props.ref}
        onChangeText={(txt) => handleOnTextChange(txt)}
      />
      {props.RightIcon && (
        <TouchableOpacity
          style={[styles.rightIconContainer, props.rightIconStyle]}
          onPress={() => setSecureText(!secureText)}
        >
          <Image source={props.RightIcon} style={styles.rightIconImage} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#CDCDCD',
    borderWidth: 1,
  },
  textInput: {
    flex: 1,
  },
  leftIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIconContainer: {
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
  rightIconImage: {
    height: 9,
    width: 18,
  },
});
