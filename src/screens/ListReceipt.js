/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   View,
   TouchableOpacity
 } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
 
 
 const ListReceipt = ({navigation}) => {
 
   const data = [
     {
       "So_ct": 105,
       "Ngay_ct": "11/05/2022",
       "Tong_tien": 75.599,
       "Truoc_thue": 69.999,
       "Thue": 5.600,
       'ma_dtgtgt': '00000000',
       'ten_dtgtgt': 'Khach le'
     },
     {
       "So_ct": 105,
       "Ngay_ct": "11/05/2022",
       "Tong_tien": 75.599,
       "Truoc_thue": 69.999,
       "Thue": 5.600,
       'ma_dtgtgt': '00000000',
       'ten_dtgtgt': 'Khach le'
     },
     {
       "So_ct": 105,
       "Ngay_ct": "11/05/2022",
       "Tong_tien": 75.599,
       "Truoc_thue": 69.999,
       "Thue": 5.600,
       'ma_dtgtgt': '00000000',
       'ten_dtgtgt': 'Khach le'
     },
     {
       "So_ct": 105,
       "Ngay_ct": "11/05/2022",
       "Tong_tien": 75.599,
       "Truoc_thue": 69.999,
       "Thue": 5.600,
       'ma_dtgtgt': '00000000',
       'ten_dtgtgt': 'Khach le'
     }
   ]
   const shadowOpt = {
     width: 160,
     height: 170,
     color: "#000",
     border: 2,
     radius: 3,
     opacity: 0.2,
     x: 0,
     y: 3,
     style: { marginVertical: 5 }
   }
 
   return (
     <View style={styles.container}>
       <View style={styles.header}>
         <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>Kết quả tìm kiếm</Text>
         <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 20 }}>Hóa đơn</Text>
       </View>
       <View style={styles.main}>
         <ScrollView
         showsVerticalScrollIndicator={false} 
         >
           {
             data.map((ele, index) => {
               return (
                 // wherever your return statement is
                 <View style={[styles.card, styles.elevation]} key={index}>
                   <View>
                     <Text style={{color: "#999999", marginBottom: 13}}>
                       {ele.Ngay_ct}    -    <Text style={{color: "#000"}}>Số: {ele.So_ct}</Text>
                     </Text>
                     <Text style={styles.heading}>
                       Mã số: {ele.ma_dtgtgt}
                     </Text>
                     <Text style={styles.heading}>
                       Tên: {ele.ten_dtgtgt} 
                     </Text>
                   </View>
                   <Text style={{color: '#000', marginBottom: 13}}>
                      Số tiền: <Text style={{color: "#999999"}}>{ele.Tong_tien}</Text>
                    </Text>
                   <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
                     <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: '#09AFDF', borderRadius: 10 }}>
                       <TouchableOpacity
                        onPress={() => navigation.navigate('form_step1')}
                       >
                         <Text style={{ color: '#ffff' }}><Icon name="edit" size={30} color="#ffff" />  Sửa</Text>
                       </TouchableOpacity>
                     </View>
                     <View style={{ flex: 1, marginLeft: 10, alignContent: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E54545', borderRadius: 10 }}>
                       <TouchableOpacity
                       >
                         <Text style={{ color: '#ffff' }}><Icon name="trash" size={30} color="#ffff" />   Xóa</Text>
                       </TouchableOpacity>
                     </View>
                   </View>
                 </View>
 
               )
             })
           }
         </ScrollView>
       </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     marginLeft: 5,
     paddingHorizontal: 24,
     flex: 1,
     backgroundColor: "#F8F8F8"
   },
   header: {
     marginTop: 20,
     flex: 1,
   },
   main: {
     flex: 4,
   },
   heading: {
     fontSize: 18,
     fontWeight: '600',
     marginBottom: 13,
   },
   card: {
     backgroundColor: 'white',
     borderRadius: 8,
     paddingVertical: 30,
     paddingHorizontal: 25,
     width: '100%',
     marginVertical: 10,
   },
   elevation: {
     elevation: 20,
     shadowColor: '#52006A',
   },
 });
 
 export default ListReceipt;
 