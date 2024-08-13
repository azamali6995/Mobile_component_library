import { ScrollView, StyleSheet, Text, Button, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import { colors } from '../../theme/Colors';
import { FONTS } from '../../theme/GlobalStyle';
import ButtonComponent from '../../component/ButtonComponent'
import InputText from '../../component/InputText';
import TextComponent from '../../component/TextComponent';
import PickerDate from '../../component/PickerDate';
import PickerTime from '../../component/PickerTime';
import CheckBox from '../../component/CheckBox';
import RadioButton from '../../component/ReadioButton';
import DropDown from '../../component/DropDown';
import FloatingLabelTextInput from '../../component/FloatingLabelTextInput';
import DynamicSlider from '../../component/DynamicSlider';
import ModalComponent from '../../component/ModalComponent';
import DynamicProgressBar from '../../component/DynamicProgressBar';


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
  const [email, setEmail] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [sliderValue, setSliderValue] = useState(0.5);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleSignIn = () => {
    // Add Logic here
  };

  

  let ChooseBall = [
    { label: 'Football', value: 'football' },
    { label: 'Baseball', value: 'baseball' },
    { label: 'Hockey', value: 'hockey' },
  ]

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  



  return (
    <ScrollView contentContainerStyle ={styles.container}>
      <TextComponent
      text="Mobile Reuseable Component"
      textStyle={StyleSheet.flatten([
        FONTS.h20, 
        {color: colors.buttonColor, marginBottom : 10},
      ])}
     />

      {/* Text Component  */}
   <View style={styles.TextContainer}>
   <TextComponent
      text="Text Component"
      textStyle={StyleSheet.flatten([
        FONTS.h16, 
        {color: colors.black, marginBottom : 10},
      ])}
     />
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

    {/* ProgressBar component */}
    <View style={styles.progressjContainer}>
    <TextComponent
      text="Progress Bar for show progress"
      textStyle={StyleSheet.flatten([
        FONTS.h16, 
        {color: colors.black, marginBottom : 10},
      ])}
     />
      <DynamicProgressBar
        progress={0.2}
        width={350}
        color="green"
        unfilledColor="#dcdcdc"
        borderWidth={2}
        borderRadius={10}
        height={10}
        animationType="timing"
        style={styles.progressBarStyle}
      />
    </View>



    {/* Modal component */}
    <View style={styles.ModalContainer}>
    <TextComponent
      text="Modal Component"
      textStyle={StyleSheet.flatten([
        FONTS.h16, 
        {color: colors.black, marginBottom : 10},
      ])}
     />  
      <View style={styles.buttonContainer}>
        <ButtonComponent 
          title="open Modal" 
          onPress={toggleModal}
          backgroundColor="gray" // Custom background color
          fontSize={18} // Custom font size
          fontWeight="700" // Custom font weight
          textColor="#fff" // Custom text color
          borderRadius={10} // Custom border radius
          height={50} // Custom height
          width="50%" // Custom width
        />
    </View>
    
      <ModalComponent
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        modalStyle={styles.modalStyle}
        contentStyle={styles.contentStyle}
      >
        <Text style={styles.modalText}>This is a dynamic modal!</Text>
        <ButtonComponent 
          title="Close Modal" 
          onPress={toggleModal}
          backgroundColor="gray" // Custom background color
          fontSize={18} // Custom font size
          fontWeight="700" // Custom font weight
          textColor="#fff" // Custom text color
          borderRadius={10} // Custom border radius
          height={50} // Custom height
          width="50%" // Custom width
        /> 

      </ModalComponent>
    </View>




    {/* slider component */}
    <View style={styles.SliderContainer}>
    <TextComponent
      text="Progress Bar for show progress"
      textStyle={StyleSheet.flatten([
        FONTS.h16, 
        {color: colors.black, marginBottom : 10},
      ])}
     />
      <Text>Value: {sliderValue}</Text>
      <DynamicSlider
        style={styles.sliderStyle}
        minimumValue={0}
        maximumValue={100}
        value={sliderValue}
        onValueChange={setSliderValue}
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="#0000FF"
        thumbTintColor="#00FF00"
        step={1}
      />
    </View>


    

   

    {/* Radio Button */}
    <View style={styles.RadioButtonContainer}>
    <TextComponent
      text="Radio Button"
      textStyle={StyleSheet.flatten([
        FONTS.h16, 
        {color: colors.black, marginBottom : 10},
      ])}
     />
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
    <TextComponent
      text="CheckBox"
      textStyle={StyleSheet.flatten([
        FONTS.h16, 
        {color: colors.black, marginBottom : 10},
      ])}
     />

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
    <TextComponent
      text="Time Picker"
      textStyle={StyleSheet.flatten([
        FONTS.h16, 
        {color: colors.black, marginBottom : 10},
      ])}
     />
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
    <TextComponent
      text="Date picker"
      textStyle={StyleSheet.flatten([
        FONTS.h16, 
        {color: colors.black, marginBottom : 10},
      ])}
     />
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
      



  {/* Floting Input for Email */}
  <View style={styles.floatingContainer}>
  <TextComponent
      text="Floating Input for Email"
      textStyle={StyleSheet.flatten([
        FONTS.h16, 
        {color: colors.black, marginBottom : 10},
      ])}
     />
      <FloatingLabelTextInput
        label="Enter Email"
        value={email}
        onChangeText={setEmail}
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        labelStyle={styles.label}
      />
  </View> 


    {/* Floting Input for Password */}
    <View style={styles.floatingContainer}>
    <TextComponent
      text="Floating Input for Passwod"
      textStyle={StyleSheet.flatten([
        FONTS.h16, 
        {color: colors.black, marginBottom : 10},
      ])}
     />
      <FloatingLabelTextInput
        label="Enter Password"
        value={inputValue}
        onChangeText={setInputValue}
        isPassword
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        labelStyle={styles.label}
      />
    </View> 



    {/* TextInput Component with Email & userName */}
    <View style={styles.inputContainer}>
    <TextComponent
      text="Input for email"
      textStyle={StyleSheet.flatten([
        FONTS.h16, 
        {color: colors.black, marginBottom : 10},
      ])}
     />
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
    <TextComponent
      text="Input for password"
      textStyle={StyleSheet.flatten([
        FONTS.h16, 
        {color: colors.black, marginBottom : 10},
      ])}
     />
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

    
    {/* DropDown */}
    <View style={styles.dropDownContainer}>
    <TextComponent
      text="DropDown"
      textStyle={StyleSheet.flatten([
        FONTS.h16, 
        {color: colors.black, marginBottom : 10},
      ])}
     />
      <DropDown
        value={reportState}
        data={ChooseBall}
        onHandleSelected={(value) => setReportState(value)}
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




    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    paddingVertical:30,
    paddingHorizontal:10,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonContainer:{
      width:'100%',
      paddingVertical:10
  },
  TextContainer:{
    width:"100%",
   paddingVertical:10   
  },
  DateContainer:{
    width:"100%",
  },
  TimeContainer:{
    width:"100%",
  },
  checkboxContainer:{
    width:"100%",
  },
  RadioButtonContainer:{
    width:"100%",
  },
  dropDownContainer:{
    width:"100%",
    justifyContent: 'center',
    paddingVertical:10
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
     
  SliderContainer:{
   width:"100%",  
  },
  ModalContainer :{
   width:"100%",  
  },
  modalText:{
    paddingVertical:10
  },
  progressjContainer:{
    width:"100%",
  },
  Carouselcontainer:{
    width:"100%",
  },
  carouselContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  carouselText: {
    textAlign: 'center',
    fontSize: 30,
  },
  CarouselViewcontainer:{
    width:"100%",
  },
  floatingContainer:{
    width:"100%",
    paddingVertical:10
  },
  inputContainer:{
    width:"100%",
  },
  input: {
    fontSize: 18,
    width:"100%",
  },
  label: {
    color: 'grey',
  }, 

})