import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';

const PickerTime = (props) => {
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(new Date());
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

  return (
    <>
      <View style={[
        styles.container,
        props.containerStyle,
        { borderColor: props.borderColor || '#000' }
      ]}>
        <View style={[styles.textContainer, props.textContainerStyle]}>
          <Text style={{
            color: props?.selectedTime == null ? props.placeholderColor || '#888' : props.textColor || '#000',
            fontSize: props.fontSize || 15,
            ...props.textStyle,
          }}>
            {props?.selectedTime == null ? props.placeholderText || 'Select Time' : props?.reportTime}
          </Text>
        </View>

        <TouchableOpacity 
          style={[styles.iconContainer, props.iconContainerStyle]} 
          onPress={() => {
            props?.isEditable && setIsTimePickerOpen(!isTimePickerOpen);
          }}
        >
          <Image
            resizeMode="contain"
            source={props.icon || require('../assets/images/Time.png')}
            style={[styles.icon, props.iconStyle]}
          />
        </TouchableOpacity>
      </View>

      <DatePicker
        open={isTimePickerOpen}
        value={time}
        modal
        date={date}
        mode={props.mode || 'time'}
        is24Hour={props.is24Hour || false}
        display={props.display || 'default'}
        onConfirm={(time) => {
          setTime(time);
          setIsTimePickerOpen(false);
          const sDate = new Date(time);
          const hours = sDate.getHours();
          const minutes = sDate.getMinutes();
          const ampm = hours >= 12 ? 'PM' : 'AM';
          const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
          const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
          const formattedTime = formattedHours + ':' + formattedMinutes + ' ' + ampm;
          props.onTimeSelect(formattedTime);
        }}
        onCancel={() => setIsTimePickerOpen(false)}
      />
    </>
  );
};

export default PickerTime;

const styles = StyleSheet.create({
  container: {
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
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
  icon: {
    height: 16.25,
    width: 16.25,
  },
});
