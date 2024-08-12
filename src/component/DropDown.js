import { Platform, StyleProp, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';
import { colors } from '../theme/Colors';

const DropDown = ({ 
  value, 
  placeHolderText, 
  colorValue,  
  data, 
  onHandleSelected, 
  isEditable, 
  dropDownStyple, 
  isUpdate = false, 
  updateData 
}) => {
    const [userType, setUserType] = useState('');
    const [label, setLabel] = useState('');
    
    const pickerStyle = {
        inputIOS: {
            paddingLeft: 5,
            borderRadius: 10,
            height: 45,
            width: '90%',
            fontSize: 14,
            fontWeight: '400',
            fontFamily: 'Poppins-Italic',
            color: '#080402',
        },
        placeholder: {
            fontSize: 16,
            fontWeight: '400',
            color: colors.LightGray
        },
        inputAndroid: {
            fontSize: 14,
            color: '#080402',
            borderRadius: 10,
            width: '100%'
        },
        iconContainer: {
            top: 18,
            right: 6,
        },
    };
    
    return (
        <View
            style={[{
                height: 52,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: colors.BorderColor,
                paddingHorizontal: Platform.OS === 'ios' ? 10 : 0,
                justifyContent: 'center',
                marginBottom: 10,
            }, dropDownStyple]}>
            {Platform.OS === 'ios' ? (
                <RNPickerSelect
                    style={pickerStyle}
                    placeholder={{ label: "Dropdown" }}
                    value={value}
                    disabled={isEditable}
                    onValueChange={(value) => {
                        let selectedLabel = data.find(item => item?.value === value);
                        setLabel(selectedLabel?.label);
                        setUserType(value);
                        onHandleSelected(value);
                    }}
                    items={data}
                    Icon={() => {
                        return <Chevron size={1.2} color="lightgray" style={{}} />;
                    }}
                />
            ) : (
                <RNPickerSelect
                    placeholder={{ label: "Dropdown" }}
                    style={pickerStyle}
                    value={value}
                    disabled={isEditable}
                    onValueChange={(value) => {
                        let selectedLabel = data.find(item => item.value === value);
                        setLabel(selectedLabel);
                        setUserType(value);
                        onHandleSelected(value);
                    }}
                    items={data}
                />
            )}
        </View>
    );
};

export default DropDown;

const styles = StyleSheet.create({});
