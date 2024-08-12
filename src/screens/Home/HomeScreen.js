import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import ButtonComponent from '../../component/ButtonComponent'
import InputText from '../../component/InputText';
import TextComponent from '../../component/TextComponent';
import { colors } from '../../theme/Colors';
import { FONTS } from '../../theme/GlobalStyle';
import PickerDate from '../../component/PickerDate';
import PickerTime from '../../component/PickerTime';
import CheckBox from '../../component/CheckBox';
import RadioButton from '../../component/ReadioButton';
import DropDown from '../../component/DropDown';

const HomeScreen = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isEmpty, setIsEmpty] = useState(null);
  const [licenseDate, setLicenseDate] = useState('');
  const [reportTime, setReportTime] = useState(null);
  const [selectedTime,setSelectedTime]=useState(null)
  const [isAgree, setIsAgree] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [reportState, setReportState] = useState('');



  const handleSignIn = () => {
    // Add Logic here
  };

  let ChooseBall = [
    { label: 'Football', value: 'football' },
    { label: 'Baseball', value: 'baseball' },
    { label: 'Hockey', value: 'hockey' },
  ]


  return (
    <ScrollView contentContainerStyle ={styles.container}>




   



    {/* Radio Button */}
    <View style={styles.RadioButtonContainer}>
      <RadioButton
        isLeft={false}
        text="On Site User"
        selected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
        buttonSize={28}  // Custom button size
        selectedColor={"#FF5733"}  // Custom selected color
        unselectedColor={"#CCCCCC"}  // Custom unselected color
        textStyle={{ fontSize: 16, color: "black" }}  // Custom text style
        containerStyle={{ marginVertical: 10 }}  // Custom container style
      />
    </View>



    {/* CheckBox component */}
    <View style={styles.checkboxContainer}>
      <CheckBox
        isAgree={isAgree}
        onClick={() => {
          setIsAgree(!isAgree);
        }}
        text="I Agree to the terms and conditions"
        iconSize={32}  // Custom icon size
        iconColorChecked="green"  // Custom color when checked
        iconColorUnchecked="grey"  // Custom color when unchecked
        containerStyle={{ marginVertical: 10,  }}  // Custom container style
        textStyle={{ fontSize: 16, color: "black" }}  // Custom text style
      />  
    </View>

      


    {/* Time Picker */}
    <View style={styles.TimeContainer}>
      <PickerTime
        reportTime={reportTime}
        selectedTime={selectedTime}
        isEditable={true}
        mode={'time'}
        onTimeSelect={(time) => {
          setSelectedTime(time);
          setReportTime(time);
        }}
        borderColor="#CCCCCC"  // Custom border color
        placeholderText="Select a Time"  // Custom placeholder text
        placeholderColor="#888888"  // Custom placeholder text color
        textColor="#000000"  // Custom text color
        fontSize={16}  // Custom font size
        icon={require('../../assets/images/Time.png')}  // Custom icon
        iconStyle={{ tintColor: '#555' }}  // Custom icon style
        containerStyle={{ backgroundColor: '#F0F0F0' }}  // Custom container style
        textContainerStyle={{ paddingLeft: 5 }}  // Custom text container style
        iconContainerStyle={{ marginRight: 10 }}  // Custom icon container style
      />
    </View>




    {/* Date picker */}
    <View style={styles.DateContainer}>
      <PickerDate
        selectedDate={isEmpty}
        isEditable={true}
        reportDate={licenseDate}
        placeholderText="Select Date"
        placeholderColor="#A6A6A6"
        textColor="#333333"
        fontSize={18}
        textStyle={{ fontWeight: '400' }} // Additional text style
        containerStyle={{ borderColor: '#cccccc' }} // Additional container style
        textContainerStyle={{ paddingLeft: 0 }} // Additional text container style
        iconContainerStyle={{ marginRight: 10 }} // Additional icon container style
        iconSource={require('../../assets/images/Date.png')} // Custom icon
        iconStyle={{ tintColor: 'gray' }} // Custom icon style
        datePickerStyle={{ backgroundColor: '#f0f0f0' }} // Custom DatePicker style
        onDateSelect={(date) => {
          setLicenseDate(date);
          setIsEmpty(date);
        }}
      />
    </View>
      


    {/* Text Component  */}
   <View style={styles.TextContainer}>
     <TextComponent
      text="ReuseableComponent"
      textStyle={StyleSheet.flatten([
        FONTS.h16,
        {color: colors.buttonColor},
      ])}
     />

    <TextComponent
        text="Reuseable component"
        textStyle={StyleSheet.flatten([
          FONTS.h28,
          {color: colors.greenColor},
        ])}
      />
   </View> 
   


    {/* TextInput Component with Email & userName */}
    <View style={styles.inputContainer}>
      <InputText
        val={userName}
        edit={true}
        returnKeyType="next"
        keyboardType="email-address"
        bgStyle={{ marginHorizontal: 2 }}
        placeholder="Please enter your email address"
        placeholderTextColor="#888888" // Custom placeholder text color
        fontSize={16} // Custom font size
        fontFamily="Poppins-Bold" // Custom font family
        textColor="#333333" // Custom text color
        onChangeText={txt => setUserName(txt)}
        blurOnSubmit={false}
        onSubmitEditing={() =>
          passwordInputRef.current && passwordInputRef.current.focus()
        }
      />
    </View>



    {/* TextInput Component with password */}
    <View style={styles.inputContainer}>
    <InputText
        val={password}
        edit={true}
        secureText={true} // Pass secureText prop
        returnKeyType="next"
        keyboardType="default"
        bgStyle={{ marginHorizontal: 2 }}
        placeholder="Please enter your password"
        placeholderTextColor="#888888" // Custom placeholder text color
        fontSize={16} // Custom font size
        fontFamily="Poppins-Bold" // Custom font family
        textColor="#333333" // Custom text color
        RightIcon={require('../../assets/images/passIcon.png')} // Add the right icon here
        rightIconStyle={{tintColor: '#888'}} // Custom right icon style
        onChangeText={txt => setPassword(txt)}
        blurOnSubmit={false}
        onSubmitEditing={() =>
          passwordInputRef.current && passwordInputRef.current.focus()
        }
      />
    </View>



    {/* Button component */}
    <View style={styles.buttonContainer}>
        <ButtonComponent 
          title="Sign In" 
          onPress={handleSignIn}
          backgroundColor="gray" // Custom background color
          fontSize={18} // Custom font size
          fontWeight="700" // Custom font weight
          textColor="#fff" // Custom text color
          borderRadius={10} // Custom border radius
          height={56} // Custom height
          width="100%" // Custom width
        />
    </View>


    {/* DropDown */}
    <View style={styles.dropDownContainer}>
      <DropDown
        value={reportState}
        data={ChooseBall}
        onHandleSelected={(value) => setReportState(value)}
      />
    </View>


    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonContainer:{
      paddingHorizontal:20,
      width:'100%',
  },
  inputContainer:{
    width:"100%",
    paddingHorizontal:20,
  },
  TextContainer:{
   paddingVertical:10   
  },
  DateContainer:{
    width:"100%",
    paddingHorizontal:20,
  },
  TimeContainer:{
    width:"100%",
    paddingHorizontal:20,
  },
  checkboxContainer:{
    width:"100%",
    paddingHorizontal:20,
  },
  RadioButtonContainer:{
    width:"100%",
    paddingHorizontal:20,
  },
  dropDownContainer:{
    width:"100%",
    paddingHorizontal:20,
    justifyContent: 'center',
    paddingVertical:10
  }

    

})