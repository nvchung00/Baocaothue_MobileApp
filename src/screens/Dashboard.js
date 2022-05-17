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
 import SelectedDate from '../component/SelectDate';
 import { Dropdown } from 'react-native-element-dropdown';
 import AntDesign from 'react-native-vector-icons/AntDesign';
 
 
 const Dashboard = ({ navigation }) => {
 
   const data_1 = [
    { label: 'Chưa kí', value: '1' },
    { label: 'Đã kí', value: '2' },
    { label: 'Đang gửi', value: '3' },
    { label: 'Chuyển đổi', value: '4' },
    { label: 'Đã cấp mã', value: '5' },
    { label: 'Chờ thay thế', value: '6' },
    { label: 'Đã thay thế', value: '7' },
    { label: 'Chờ điểu chỉnh', value: '8' },
  ];
  const data_2 = [
    { label: '1 - C22TYY - 1', value: '1' },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
 
   return (
     <SafeAreaView style={styles.container}>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
       >
         <View style={styles.header}>
           <Text style={{ fontSize: 30, marginTop: 20, fontWeight: 'bold' }}>Xuất bán hàng</Text>
           <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 20 }}>Công ty cổ phần Viễn thông New Telecom</Text>
         </View>
         <View style={styles.main}>
           <View style={styles.pickerDate}>
             <SelectedDate />
           </View>
           <View style={styles.select_1}>
           <Dropdown
             style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
             placeholderStyle={styles.placeholderStyle}
             selectedTextStyle={styles.selectedTextStyle}
             inputSearchStyle={styles.inputSearchStyle}
             iconStyle={styles.iconStyle}
             data={data_1}
             maxHeight={data_1.length * 50}
             labelField="label"
             valueField="value"
             placeholder={!isFocus ? 'Tất cả' : '...'}
             searchPlaceholder="Tim kiếm..."
             value={value}
             onFocus={() => setIsFocus(true)}
             onBlur={() => setIsFocus(false)}
             onChange={item => {
               setValue(item.value);
               setIsFocus(false);
             }}
             renderLeftIcon={() => (
               <AntDesign
                 style={styles.icon}
                 color={isFocus ? 'blue' : 'black'}
                 name="Safety"
                 size={20}
               />
             )}
           />
           </View>
           <View style={styles.select_2}>
           <Text>Hóa đơn</Text>
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
           <View style={{marginTop: 20}}>
             <View style={{ flex: 1, marginLeft: 10, marginTop: 20 }}>
               <TouchableOpacity
                 style={styles.button}
                 onPress={() => navigation.navigate('list_receipt')}
               >
                 <Text style={{ color: "#ffff" }}>Tìm kiếm</Text>
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
     borderWidth: 0.5,
     borderRadius: 10,
     backgroundColor: "#ffffff"
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
   },
   dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#ffffff"
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
 
 export default Dashboard;
 