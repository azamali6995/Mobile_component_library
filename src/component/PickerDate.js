import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';

const PickerDate = (props) => {
  const [date, setDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  return (
    <>
      <View
        style={[
          styles.dateContainer,
          props.containerStyle, // Dynamic container style
        ]}
      >
        <View style={[styles.textContainer, props.textContainerStyle]}>
          <Text
            style={[
              {
                color: props.selectedDate == null ? props.placeholderColor : props.textColor,
                fontSize: props.fontSize || 15,
              },
              props.textStyle, // Dynamic text style
            ]}
          >
            {props.selectedDate == null ? props.placeholderText : props.reportDate}
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.iconContainer, props.iconContainerStyle]} // Dynamic icon container style
          onPress={() => {
            props.isEditable && setIsDatePickerOpen(!isDatePickerOpen);
          }}
        >
          <Image
            resizeMode="contain"
            source={props.iconSource || require('../assets/images/Date.png')} // Dynamic icon source
            style={[styles.iconStyle, props.iconStyle]} // Dynamic icon style
          />
        </TouchableOpacity>
      </View>

      <DatePicker
        style={props.datePickerStyle} // Dynamic DatePicker style
        modal
        open={isDatePickerOpen}
        date={date}
        mode="date"
        onConfirm={(selectedDate) => {
          setIsDatePickerOpen(false);
          setDate(selectedDate);
          props.onDateSelect(selectedDate.toString().substring(4, 15));
        }}
        onCancel={() => {
          setIsDatePickerOpen(false);
        }}
      />
    </>
  );
};

export default PickerDate;

const styles = StyleSheet.create({
  dateContainer: {
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 13,
    marginBottom: 10,
  },
  textContainer: {
    height: 52,
    flex: 0.85,
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 0.15,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    height: 16.25,
    width: 16.25,
  },
});
