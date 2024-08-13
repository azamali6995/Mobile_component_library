The HomeScreen component is a React Native screen that demonstrates the usage of various reusable components. The components are imported from a shared component library, which enhances the modularity, reusability, and maintainability of the codebase. This screen includes text inputs, buttons, pickers, sliders, modals, checkboxes, radio buttons, progress bars, dropdowns, and floating label inputs, all customized to meet specific design requirements.

Table of Contents
Installation
Components
Props
Usage
Customization
Contributing
License
Installation
To use this component in your project, you need to have a React Native environment set up. Clone the repository and install the necessary dependencies:

bash
Copy code
git clone <repository-url>
cd <repository-folder>
npm install
Ensure you have the necessary dependencies installed in your project:

bash
Copy code
npm install react-native react-native-mobile-component-library
Components
The following reusable components are used in the HomeScreen:



ButtonComponent: A customizable button component.
   InputText: A text input field with customizable properties.
   TextComponent: A simple text component with flexible styling.
   PickerDate: A date picker component for selecting dates.
   PickerTime: A time picker component for selecting times.
   CheckBox: A checkbox component for selections.
   RadioButton: A radio button component for single selections.
   DropDown: A dropdown component for selecting items from a list.
   FloatingLabelTextInput: A text input with a floating label.
   DynamicSlider: A slider component for selecting numeric values.
   ModalComponent: A modal component for displaying pop-up content.
   DynamicProgressBar: A progress bar component for showing progress.
   Props

Each component accepts various props for customization. The following props are demonstrated in the HomeScreen component:

ButtonComponent
title: The text to display on the button.
onPress: The function to call when the button is pressed.
backgroundColor: Background color of the button.
fontSize: Font size of the button text.
fontWeight: Font weight of the button text.
textColor: Color of the button text.
borderRadius: Border radius of the button.
height: Height of the button.
width: Width of the button.

InputText
val: The value of the input field.
edit: Boolean to control editability.
returnKeyType: Type of return key on the keyboard.
keyboardType: Type of keyboard to display.
bgStyle: Style for the background of the input.
placeholder: Placeholder text for the input.
placeholderTextColor: Color of the placeholder text.
fontSize: Font size of the input text.
fontFamily: Font family of the input text.
textColor: Color of the input text.
onChangeText: Function to call when text changes.
blurOnSubmit: Boolean to control whether the input should lose focus on submit.
RightIcon: Icon to display on the right side of the input.
rightIconStyle: Style for the right icon.

DynamicProgressBar
progress: Current progress value (0 to 1).
width: Width of the progress bar.
color: Color of the filled portion of the progress bar.
unfilledColor: Color of the unfilled portion of the progress bar.
borderWidth: Border width of the progress bar.
borderRadius: Border radius of the progress bar.
height: Height of the progress bar.
animationType: Type of animation (e.g., "timing").
style: Additional styles for the progress bar.

ModalComponent
isModalVisible: Boolean to control modal visibility.
toggleModal: Function to toggle the modal's visibility.
modalStyle: Style for the modal.
contentStyle: Style for the modal content.

DynamicSlider
style: Additional styles for the slider.
minimumValue: Minimum value of the slider.
maximumValue: Maximum value of the slider.
value: Current value of the slider.
onValueChange: Function to call when the slider value changes.
minimumTrackTintColor: Color of the track to the left of the thumb.
maximumTrackTintColor: Color of the track to the right of the thumb.
thumbTintColor: Color of the thumb.
step: Step value for the slider.


PickerDate
selectedDate: The currently selected date.
isEditable: A boolean that determines if the date picker is editable.
reportDate: The date to be reported or displayed.
placeholderText: Placeholder text shown in the date picker.
placeholderColor: The color of the placeholder text.
textColor: Color of the selected date text.
fontSize: Font size for the selected date text.
textStyle: Additional text style for the selected date text.
containerStyle: Custom style for the date picker container.
textContainerStyle: Style for the text container within the date picker.
iconContainerStyle: Style for the icon container within the date picker.
iconSource: The source of the icon to display in the date picker.
iconStyle: Additional styles for the icon.
datePickerStyle: Custom style for the date picker itself.
onDateSelect: Function to call when a date is selected.


PickerTime
reportTime: The time to be reported or displayed.
selectedTime: The currently selected time.
isEditable: A boolean that determines if the time picker is editable.
mode: Mode of the time picker, e.g., 'time'.
onTimeSelect: Function to call when a time is selected.
borderColor: Color of the border of the time picker.
placeholderText: Placeholder text shown in the time picker.
placeholderColor: Color of the placeholder text.
textColor: Color of the selected time text.
fontSize: Font size for the selected time text.
icon: The source of the icon to display in the time picker.
iconStyle: Additional styles for the icon.
containerStyle: Custom style for the time picker container.
textContainerStyle: Style for the text container within the time picker.
iconContainerStyle: Style for the icon container within the time picker.


CheckBox
isAgree: Boolean indicating whether the checkbox is checked or not.
onClick: Function to call when the checkbox is clicked.
text: Text to display next to the checkbox.
iconSize: Size of the checkbox icon.
iconColorChecked: Color of the checkbox icon when checked.
iconColorUnchecked: Color of the checkbox icon when unchecked.
containerStyle: Custom style for the checkbox container.
textStyle: Custom text style for the checkbox label.


RadioButton
isLeft: Boolean indicating the position of the radio button, left or right of the label.
text: Text to display next to the radio button.
selected: Boolean indicating whether the radio button is selected or not.
onClick: Function to call when the radio button is clicked.
buttonSize: Size of the radio button.
selectedColor: Color of the radio button when selected.
unselectedColor: Color of the radio button when not selected.
textStyle: Custom text style for the radio button label.
containerStyle: Custom style for the radio button container.


DropDown
value: The currently selected value from the dropdown.
data: Array of items to display in the dropdown, each item should have a label and value.
onHandleSelected: Function to call when a value is selected from the dropdown.
placeholder: Placeholder text shown in the dropdown.
dropdownStyle: Custom style for the dropdown container.
itemStyle: Custom style for each item in the dropdown.
labelStyle: Custom text style for the label of each item in the dropdown.
iconStyle: Additional styles for the dropdown icon.
Additional Components
Other components like PickerDate, PickerTime, CheckBox, RadioButton, DropDown, and FloatingLabelTextInput have their respective props, providing extensive customization options.

Usage
To use the HomeScreen component in your application, simply import it into your desired screen or component:

javascript
Copy code
Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.
