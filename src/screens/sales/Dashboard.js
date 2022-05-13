/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
 import React, { useState, useCallback } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   View,
   TextInput,
   Button,
   TouchableOpacity
 } from 'react-native';
 import SelectDropdown from 'react-native-select-dropdown'
 
 
 const App = () => {
 
   const [dateString, setDateString] = useState('2-2022')
   const countries = ["Egypt", "Canada", "Australia", "Ireland"]
 
   const onChange = (event, selectedDate) => {
     const currentDate = selectedDate;
     setDate(currentDate);
     var month = date.getUTCMonth() + 1; //months from 1-12
     var day = date.getUTCDate();
     var year = date.getUTCFullYear();
   };
 
   const showMode = (currentMode) => {
     DateTimePickerAndroid.open({
       value: date,
       onChange,
       mode: currentMode,
       is24Hour: true
     })
   };
 
   const showDatepicker = () => {
     showMode('date');
   };
 
   const showTimepicker = () => {
     showMode('time');
   };
 
   const [date, setDate] = useState(new Date());
 
   return (
     <SafeAreaView style={styles.container}>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
       >
         <View style={styles.header}>
           <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 'bold' }}>Xuất bán hàng</Text>
           <Text style={{ fontSize: 10, marginTop: 20, marginBottom: 20 }}>Công ty cổ phần Viễn thông New Telecom</Text>
         </View>
         <View style={styles.main}>
           <View style={styles.pickerDate}>
             <View style={{ flex: 5 }}>
               <TextInput
                 style={styles.input}
               />
             </View>
             <View style={{ flex: 2, marginLeft: 10 }}>
               <TouchableOpacity
                 style={styles.button}
                 
               >
                 <Text style={{ color: "#ffff" }}>Chọn ngày</Text>
               </TouchableOpacity>
             </View>
           </View>
           <View style={styles.add}>
             <View style={{ flex: 5 }}>
               <TextInput
                 style={styles.input}
               />
             </View>
             <View style={{ flex: 2, marginLeft: 10 }}>
               <TouchableOpacity
                 style={styles.button}
               >
                 <Text style={{ color: "#ffff" }}>Thêm</Text>
               </TouchableOpacity>
             </View>
           </View>
           <View style={styles.select_1}>
             <SelectDropdown
               data={countries}
               onSelect={(selectedItem, index) => {
                 console.log(selectedItem, index)
               }}
               defaultButtonText = "Chưa kí"
               buttonStyle = {{borderRadius: 10, width: "100%"}}
               dropdownBackgroundColor = "#ffff"
               dropdownIconPosition = "right"
               buttonTextAfterSelection={(selectedItem, index) => {
                 // text represented after item is selected
                 // if data array is an array of objects then return selectedItem.property to render after item is selected
                 return selectedItem
               }}
               rowTextForSelection={(item, index) => {
                 // text represented for each item in dropdown
                 // if data array is an array of objects then return item.property to represent item in dropdown
                 return item
               }}
             />
           </View>
           <View style={styles.select_2}>
             <SelectDropdown
               data={countries}
               onSelect={(selectedItem, index) => {
                 console.log(selectedItem, index)
               }}
               defaultButtonText = "1C22TYY"
               buttonStyle = {{borderRadius: 10, width: "100%"}}
               dropdownBackgroundColor = "#ffff"
               dropdownIconPosition = "right"
               buttonTextAfterSelection={(selectedItem, index) => {
                 // text represented after item is selected
                 // if data array is an array of objects then return selectedItem.property to render after item is selected
                 return selectedItem
               }}
               rowTextForSelection={(item, index) => {
                 // text represented for each item in dropdown
                 // if data array is an array of objects then return item.property to represent item in dropdown
                 return item
               }}
             />
           </View>
           <View style={{marginTop: 20}}>
             <View style={{ flex: 1, marginLeft: 10, marginTop: 20 }}>
               <TouchableOpacity
                 style={styles.button}
                 onPress={showDatepicker}
               >
                 <Text style={{ color: "#ffff" }}>Refresh</Text>
               </TouchableOpacity>
             </View>
             <View style={{ flex: 1, marginLeft: 10, marginTop: 20 }}>
               <TouchableOpacity
                 style={styles.button}
                 onPress={showDatepicker}
               >
                 <Text style={{ color: "#ffff" }}>Thông báo</Text>
               </TouchableOpacity>
             </View>
           </View>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     marginLeft: 5,
     paddingHorizontal: 24,
   },
   header: {
     marginTop: 20
   },
   main: {
     marginTop: 20
   },
   input: {
     height: 40,
     width: '100%',
     borderWidth: 1,
   },
   pickerDate: {
     flexDirection: 'row',
     width: '100%',
     flexWrap: 'wrap'
   },
   add: {
     flexDirection: 'row',
     flexWrap: 'wrap',
     marginTop: 20
   },
   button: {
     alignItems: "center",
     backgroundColor: "#4CAE4C",
     padding: 10,
     borderRadius: 10
   },
   select_1: {
     flex: 1,
     marginTop: 20,
   },
   select_2: {
     flex: 1,
     marginTop: 20,
   }
 });
 
 export default App;
 