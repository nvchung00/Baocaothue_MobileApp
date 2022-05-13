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
 
 const App = () => {
 
   return (
     <SafeAreaView style={styles.container}>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
       >
         <View style={styles.header}>
           <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 'bold' }}>Chi tiết báo cáo thuế</Text>
           <Text style={{ fontSize: 10, marginTop: 20, marginBottom: 20 }}>CÔNG TY CỔ PHẦN CẢI TIẾN XANH</Text>
         </View>
         <View style={styles.main}>
           <View>
             <Text>Ngày: </Text>
             <View style={styles.date}>
               <Text style={{ marginLeft: 20 }}>09/02/22</Text>
             </View>
           </View>
           <View>
             <Text>Số: </Text>
             <View style={styles.date}>
               <Text style={{ marginLeft: 20 }}>104</Text>
             </View>
           </View>
           <View>
             <Text>Tổng tiền: </Text>
             <View style={styles.date}>
               <Text style={{ marginLeft: 20 }}>3,240</Text>
             </View>
           </View>
           <View>
             <Text>Trước thuế: </Text>
             <View style={styles.date}>
               <Text style={{ marginLeft: 20 }}>3,000</Text>
             </View>
           </View>
           <View>
             <Text>Thuế: </Text>
             <View style={styles.date}>
               <Text style={{ marginLeft: 20 }}>240</Text>
             </View>
           </View>
           <View>
             <Text>Hóa đơn: </Text>
             <View style={styles.date}>
               <Text style={{ marginLeft: 20 }}>1 C22TYY</Text>
             </View>
           </View>
           <View>
             <Text>Xuất HĐĐT: </Text>
             <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', }}>
               <View style={{ flex: 1, marginLeft: 10, marginTop: 20 }}>
                 <TouchableOpacity
                   style={styles.button}
                 >
                   <Text style={{ color: "#ffff" }}>PDF</Text>
                 </TouchableOpacity>
               </View>
               <View style={{ flex: 1, marginLeft: 10, marginTop: 20 }}>
                 <TouchableOpacity
                   style={styles.button}
                 >
                   <Text style={{ color: "#ffff" }}>Ký</Text>
                 </TouchableOpacity>
               </View>
             </View>
           </View>
           <View>
             <Text>Chỉnh sửa: </Text>
             <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
               <View style={{ flex: 1, marginTop: 20, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                 <TouchableOpacity
                 >
                   <Text style={{ color: '#09AFDF', textDecorationLine: "underline" }}>Sửa</Text>
                 </TouchableOpacity>
               </View>
               <View style={{ flex: 1, marginTop: 20, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                 <TouchableOpacity
                 >
                   <Text style={{ color: '#09AFDF', textDecorationLine: "underline" }}>Xóa</Text>
                 </TouchableOpacity>
               </View>
             </View>
           </View>
           <View style={{ flex: 1 }}>
                 <TouchableOpacity
                   style={styles.printBtn}
                 >
                   <Text style={{ color: "#ffff" }}>In</Text>
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
     height: 30,
     alignContent: 'center',
     justifyContent: 'center',
   },
   button: {
     alignItems: "center",
     backgroundColor: "#4CAE4C",
     padding: 10,
     borderRadius: 10
   },
   printBtn: {
     alignItems: "center",
     backgroundColor: "#FFA500",
     padding: 10,
     borderRadius: 10
   }
 
 });
 
 export default App;
 