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
 import Icon from 'react-native-vector-icons/FontAwesome';
 
 const App = () => {
 
   const data = [
     { label: 'Item 1', value: '1' },
     { label: 'Item 2', value: '2' },
     { label: 'Item 3', value: '3' },
     { label: 'Item 4', value: '4' },
     { label: 'Item 5', value: '5' },
     { label: 'Item 6', value: '6' },
     { label: 'Item 7', value: '7' },
     { label: 'Item 8', value: '8' },
   ];
 
   const [value, setValue] = useState(null);
   const [isFocus, setIsFocus] = useState(false);
 
   return (
     <SafeAreaView style={styles.container}>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
       >
         <View style={styles.header}>
           <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 'bold' }}>Sửa xuất bán hàng</Text>
           <Text style={{ fontSize: 10, marginTop: 20, marginBottom: 20 }}>CÔNG TY CỔ PHẦN CẢI TIẾN XANH</Text>
         </View>
         <View style={styles.main}>
           <View>
             <Text>Email: </Text>
             <View style={styles.date}>
               <TextInput showSoftInputOnFocus={false} style={{ marginLeft: 20 }}></TextInput>
             </View>
           </View>
           <View>
             <Text>Số điện thoại: </Text>
             <View style={styles.date}>
               <TextInput style={{ marginLeft: 20 }}></TextInput>
             </View>
           </View>
           <View>
             <Text>Số tài khoản: </Text>
             <View style={styles.date}>
               <TextInput style={{ marginLeft: 20 }}></TextInput>
             </View>
           </View>
           <View>
             <Text>Người mua hàng: </Text>
             <View style={styles.date}>
               <TextInput style={{ marginLeft: 20 }}></TextInput>
             </View>
           </View>
           <View>
             <Text>Hình thức thanh toán: </Text>
             <Dropdown
             style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
             placeholderStyle={styles.placeholderStyle}
             selectedTextStyle={styles.selectedTextStyle}
             inputSearchStyle={styles.inputSearchStyle}
             iconStyle={styles.iconStyle}
             data={data}
             search
             maxHeight={300}
             labelField="label"
             valueField="value"
             placeholder={!isFocus ? '1' : '...'}
             searchPlaceholder="Search..."
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
           <View style={{ flex: 1}}>
             <TouchableOpacity
               style={styles.printBtn}
             >
               <View style={{flex: 1}}>
                 <Text style={{ color: "#ffff", textAlign: 'left' }}>Tiếp</Text>
               </View>
               <View style={{flex: 1}}>
                 <Icon name="arrow-right" size={30} color="#900" style={{textAlign: 'right'}}/>
               </View>
             </TouchableOpacity>
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
     marginTop: 20,
     width: '100%'
   },
   date: {
     borderColor: '#000',
     borderWidth: 1,
     borderRadius: 10,
     alignContent: 'center',
     justifyContent: 'center',
   },
   printBtn: {
     alignItems: "center",
     backgroundColor: "#4CAE4C",
     padding: 10,
     borderRadius: 10,
     marginTop: 10,
     flexDirection: 'row', flexWrap: 'wrap'
   },
   dropdown: {
     height: 50,
     borderColor: 'gray',
     borderWidth: 0.5,
     borderRadius: 8,
     paddingHorizontal: 8,
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
 
 export default App;
 