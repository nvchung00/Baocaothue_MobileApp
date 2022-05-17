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
 
 
 const FormEditSale_Step2 = ({ navigation }) => {
 
  const data_2 = [
    { label: 'TM/CK', value: '1' },
    { label: 'TM', value: '2' },
    { label: 'CK', value: '3' },
    { label: 'Tiền mặt', value: '4' },
    { label: 'Chuyển khoản', value: '5' },
    { label: 'Cấu trừ công nợ', value: '6' },
    { label: 'Trả hàng', value: '7' },
    { label: 'CK/Cấn trừ công nợ', value: '8' },
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
         <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>Chỉnh sửa xuất bán hàng</Text>
         </View>
         <View style={styles.main}>
           <View style={styles.reconizer}>
             <Text style={{fontWeight: 'bold'}}>Địa chỉ:</Text>
             <TextInput style={styles.input}>415 Tân Kỳ Tân Quý, Phường Tân Quý, Quận Tân Phú, Thành phố Hồ Chí Minh, Việt Nam</TextInput>
           </View>
           <View style={styles.mail}>
           <Text style={{fontWeight: 'bold'}}>Email:</Text>
            <TextInput style={styles.input}></TextInput>
           </View>
           <View style={styles.account_number}>
           <Text style={{fontWeight: 'bold'}}>Số tài khoản:</Text>
            <TextInput style={styles.input}></TextInput>
           </View>
           <View style={{flex: 1, marginTop: 10}}>
              <Text style={{fontWeight: 'bold'}}>Người mua hàng:</Text>
              <TextInput style={styles.input}></TextInput>
           </View>
           <View style={{flex: 1, marginTop: 10}}>
           <Text style={{fontWeight: 'bold'}}>Hình thức thanh toán:</Text>
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
             placeholder={!isFocus1 ? '' : '...'}
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
             <View style={{ flex: 1, marginTop: 20 }}>
               <TouchableOpacity
                 style={styles.button}
                 onPress={() => navigation.navigate('form_step3')}
               >
                 <View style={{flex: 1, alignItems: 'flex-start'}}>
                  <Text style={{ color: "#ffff" }}>Tiếp</Text>
                 </View>
                 <View> 
                  <Icon name="angle-double-right" size={30} color="#ffff" />
                 </View>
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
   button: {
     alignItems: "center",
     backgroundColor: "#09AFDF",
     padding: 10,
     borderRadius: 10,
     flexDirection: 'row',
     flexWrap: 'wrap',
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
 
 export default FormEditSale_Step2;
 