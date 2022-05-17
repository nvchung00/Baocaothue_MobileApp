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
 import { Dropdown } from 'react-native-element-dropdown';
 import AntDesign from 'react-native-vector-icons/AntDesign';
 import { showMessage, hideMessage } from "react-native-flash-message";
 import FlashMessage from "react-native-flash-message";
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import { Root, Popup } from 'react-native-popup-confirm-toast'
 
 
 const FormEditSale_Step4 = ({ navigation }) => {
 
  const data_2 = [
    { label: '10', value: '1' },
    { label: '-10', value: '2' },
    { label: '5', value: '3' },
    { label: '-5', value: '4' },
    { label: '8', value: '5' },
    { label: '-8', value: '6' },
    { label: '0', value: '7' },
    { label: '10 (70%)', value: '8' },
    { label: '5 (70%)', value: '9'},
    { label: 'K', value: '10'}
  ];

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
 
   return (
    <Root>
     <SafeAreaView style={styles.container}>
       <FlashMessage position="top" />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
       >
         <View style={styles.header}>
         <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>Chỉnh sửa xuất bán hàng</Text>
         </View>
         <View style={styles.main}>
           <View style={styles.reconizer}>
             <Text style={{fontWeight: 'bold'}}>Tiền: </Text>
             <TextInput editable={false} style={styles.input}>3000</TextInput>
           </View>
           <View style={styles.mail}>
           <Text style={{fontWeight: 'bold'}}>Chiếu khấu:</Text>
            <TextInput style={styles.input}></TextInput>
           </View>
           <View style={{flex: 1, marginTop: 10}}>
           <Text style={{fontWeight: 'bold'}}>VAT:</Text>
           <Dropdown
             style={[styles.dropdown, isFocus1 && { borderColor: 'blue' }]}
             placeholderStyle={styles.placeholderStyle}
             selectedTextStyle={styles.selectedTextStyle}
             inputSearchStyle={styles.inputSearchStyle}
             iconStyle={styles.iconStyle}
             data={data_2}
             maxHeight={data_2.length * 50}
             labelField="label"
             valueField="value"
             placeholder={!isFocus ? '' : '...'}
             searchPlaceholder="Search..."
             value={value}
             onFocus={() => setIsFocus1(true)}
             onBlur={() => setIsFocus1(false)}
             onChange={item => {
               setValue(item.value);
               setIsFocus1(false);
             }}
             renderLeftIcon={() => (
               <AntDesign
                 style={styles.icon}
                 color={isFocus1 ? 'blue' : 'black'}
                 name="Safety"
                 size={20}
               />
             )}
           />
           </View>
           <View style={{flex: 1, marginTop: 10}}>
              <Text style={{fontWeight: 'bold'}}>Tổng tiền:</Text>
              <TextInput editable={false} style={styles.input}>3000</TextInput>
           </View>

           <View style={{ flex: 1, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
                 <View style={{flex: 1, marginRight: 5}}>
                 <TouchableOpacity
                 style={styles.button1}
                 onPress={() => {
                  Popup.show({
                    type: 'confirm',
                    title: 'Xác nhận hủy!',
                    textBody: 'Bạn có muốn hủy cập nhật? ',
                    buttonText: 'Có',
                    confirmText: 'Không',
                    callback: () => {
                        Popup.hide();
                        navigation.navigate('dashboard')
                    },
                    cancelCallback: () => {
                        Popup.hide();
                    },
                })
                  }}
               >
                  <Text style={{ color: "#ffff" }}>Hủy</Text>
               </TouchableOpacity>
                 </View>
                 <View style={{flex: 1,  marginLeft: 5}}>
                 <TouchableOpacity
                 style={styles.button2}
                 onPress={async () => {
                  showMessage({
                    message: "Cập nhật thành công",
                    type: "success",
                  });
                  await sleep(2 * 1000);
                   navigation.navigate('dashboard')
                 }}
               >
                  <Text style={{ color: "#ffff" }}>Cập nhật</Text>
               </TouchableOpacity>
                 </View>
             </View>
         </View>
       </ScrollView>
     </SafeAreaView>
     </Root>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     marginLeft: 5,
     paddingHorizontal: 24,
   },
   header: {
     marginTop: 10
   },
   main: {
     marginTop: 50
   },
   input: {
     height: 50,
     width: '100%',
     borderWidth: 0.5,
     borderRadius: 8,
     borderColor: 'gray',
     backgroundColor: "#ffffff"
   },
   pickerDate: {
      width: '100%',
   },
   button2: {
    alignItems: "center",
    backgroundColor: "#0053E6",
    padding: 10,
    borderRadius: 10,
  },
  button1: {
      
      alignItems: "center",
    backgroundColor: "#E54545",
    padding: 10,
    borderRadius: 10,
  },
   reconizer: {
     flex: 1,
     marginTop: 10,
   },
   mail: {
     flex: 1,
     marginTop: 10,
   },
   account_number: {
    flex: 1,
    marginTop: 10,
   },
   dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#ffffff",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
 });
 
 export default FormEditSale_Step4;
 