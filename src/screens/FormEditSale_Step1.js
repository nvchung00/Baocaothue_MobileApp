/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, Fragment, useCallback, useMemo} from 'react';
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
 import CalendarScreen from '../component/Calendar';

 import {Calendar, CalendarProps, LocaleConfig} from 'react-native-calendars';

const testIDs =  {
    menu: {
      CONTAINER: 'menu',
      CALENDARS: 'calendars_btn',
      CALENDAR_LIST: 'calendar_list_btn',
      HORIZONTAL_LIST: 'horizontal_list_btn',
      AGENDA: 'agenda_btn',
      EXPANDABLE_CALENDAR: 'expandable_calendar_btn',
      WEEK_CALENDAR: 'week_calendar_btn',
      TIMELINE_CALENDAR: 'timeline_calendar_btn'
    },
    calendars: {
      CONTAINER: 'calendars',
      FIRST: 'first_calendar',
      LAST: 'last_calendar'
    },
    calendarList: {CONTAINER: 'calendarList'},
    horizontalList: {CONTAINER: 'horizontalList'},
    agenda: {
      CONTAINER: 'agenda',
      ITEM: 'item'
    },
    expandableCalendar: {CONTAINER: 'expandableCalendar'},
    weekCalendar: {CONTAINER: 'weekCalendar'}
  };

const INITIAL_DATE = '2022-02-02';
 
 
 const FormEditSale_Step1 = ({ navigation }) => {
 
   const data_1 = [
    { label: '1', value: '1' },
    { label: '01GTKT0/001', value: '2' },
  ];
  const data_2 = [
    { label: 'C22TYY', value: '1' },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [selected, setSelected] = useState(INITIAL_DATE);

  var onDayPress = useCallback(function (day) {
    setSelected(day.dateString);
   }, []);

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: 'orange',
        selectedTextColor: 'red'
      }
    };
  }, [selected]);

  console.log(selected)

  const renderCalendarWithSelectableDate = () => {
    return (
      <Fragment>
        <Calendar
          testID={testIDs.calendars.FIRST}
          enableSwipeMonths
          current={INITIAL_DATE}
          style={styles.calendar}
          onDayPress={onDayPress}
          markedDates={marked}
        />
      </Fragment>
    );
  };
 
   return (
     <SafeAreaView style={styles.container}>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
       >
         <View style={styles.header}>
         <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>Chỉnh sửa xuất bán hàng</Text>
         </View>
         <View style={styles.main}>
           <View style={styles.pickerDate}>
             <Text>Thời gian:</Text>
             <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap',}}>
               <View style={{flex: 4}}>
                  <TextInput style={styles.input}>{selected.toString()}</TextInput>
               </View>
               <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                 <TouchableOpacity
                  onPress={() => setShowCalendar(!showCalendar)}
                 >
                 <Icon name="calendar" size={30} color="#029FDE" />
                 </TouchableOpacity>
               </View>
             </View>
           </View>
           {
             showCalendar ? renderCalendarWithSelectableDate() : <></> 
           }
           <View style={styles.reconizer}>
             <Text style={{fontWeight: 'bold'}}>Kí hiệu:</Text>
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
             placeholder={!isFocus ? '' : '...'}
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
           <View style={styles.seri}>
           <Text style={{fontWeight: 'bold'}}>Số seri:</Text>
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
              <Text style={{fontWeight: 'bold'}}>Khách hàng:</Text>
              <View>
              <TextInput style={styles.input}>CÔNG TY CỔ PHẦN CẢI TIẾN XANH</TextInput>
              </View>
              
           </View>
           <View style={{flex: 1, marginTop: 10}}>
              <Text style={{fontWeight: 'bold'}}>Mã số thuế:</Text>
              <View>
              <TextInput style={styles.input}>0306131641</TextInput>
              </View>
              
           </View>
           <View style={{marginTop: 20}}>
             <View style={{ flex: 1, marginTop: 20 }}>
               <TouchableOpacity
                 style={styles.button}
                 onPress={() => navigation.navigate('form_step2')}
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
   seri: {
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
 
 export default FormEditSale_Step1;
 