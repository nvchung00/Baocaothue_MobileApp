/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity
 } from 'react-native';
 import SelectDropdown from 'react-native-select-dropdown'
 import SelectedDate from './src/component/SelectDate';
 
 
 const App = () => {
 
   const countries = ["Egypt", "Canada", "Australia", "Ireland"]
 
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
             <SelectedDate />
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
               >
                 <Text style={{ color: "#ffff" }}>Refresh</Text>
               </TouchableOpacity>
             </View>
             <View style={{ flex: 1, marginLeft: 10, marginTop: 20 }}>
               <TouchableOpacity
                 style={styles.button}
                 onPress={() => alert('Error: Bạn chờ chút thử lại')}
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
     width: '100%',
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
 