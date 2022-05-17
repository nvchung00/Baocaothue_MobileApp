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


const FormEditSale_Step3 = ({ navigation }) => {

    const data = [
        {
            "Ma_vt": 'A011',
            "Donvi_vt": "",
            "Soluong": 1,
            "Gia": 3000,
            "Tien": 3000,
            'Ten_vt': 'da'
        },
        {
            "Ma_vt": 'A011',
            "Donvi_vt": "",
            "Soluong": 1,
            "Gia": 3000,
            "Tien": 3000,
            'Ten_vt': 'da'
        },
        {
            "Ma_vt": 'A011',
            "Donvi_vt": "",
            "Soluong": 1,
            "Gia": 3000,
            "Tien": 3000,
            'Ten_vt': 'da'
        },
        {
            "Ma_vt": 'A011',
            "Donvi_vt": "",
            "Soluong": 1,
            "Gia": 3.000,
            "Tien": 3000,
            'Ten_vt': 'da'
        },
        {
            "Ma_vt": 'A011',
            "Donvi_vt": "",
            "Soluong": 1,
            "Gia": 3000,
            "Tien": 3000,
            'Ten_vt': 'da'
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>Chỉnh sửa xuất bán hàng</Text>
                <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 20 }}>Danh sách vật tư</Text>
            </View>
            <View style={{flex: 1}}>
                <View style={{ flex: 1, width: 50, marginLeft: 10, alignContent: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: '#4CAE4C', borderRadius: 100 }}>
                <TouchableOpacity
                >
                    <Icon name="plus" size={20} color="#ffff" />
                </TouchableOpacity>
                </View>
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
                                        <Text style={styles.heading}>
                                            Mã số: {ele.Ma_vt}
                                        </Text>
                                        <Text style={styles.heading}>
                                            Tên: {ele.Ten_vt}
                                        </Text>
                                    </View>
                                    <Text style={{ color: '#000', marginBottom: 10 }}>
                                        Số lượng: <Text style={{ color: "#999999" }}>{ele.Soluong}</Text>
                                    </Text>
                                    <Text style={{ color: '#000', marginBottom: 10 }}>
                                        Tiền: <Text style={{ color: "#999999" }}>{ele.Tien}</Text>
                                    </Text>
                                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
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
            <View style={{ flex: 1, marginTop: 20 }}>
               <TouchableOpacity
                 style={styles.button2}
                 onPress={() => navigation.navigate('form_step4')}
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
        marginTop: 10,
        flex: 2,
    },
    main: {
        marginTop: 10,
        flex: 11,
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 25,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
    button2: {
        alignItems: "center",
        backgroundColor: "#09AFDF",
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      button1: {
          
          alignItems: "center",
        backgroundColor: "#E54545",
        padding: 10,
        borderRadius: 10,
      }
});

export default FormEditSale_Step3;
