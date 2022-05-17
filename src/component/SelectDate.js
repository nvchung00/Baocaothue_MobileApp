/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import MonthPicker from 'react-native-month-picker';

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderRadius: 5,
    width: '100%',
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 16,
    fontWeight: '500',
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 70,
  },
  confirmButton: {
    borderWidth: 0.5,
    padding: 15,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const SelectedDate = () => {
  const [isOpen, toggleOpen] = useState(false);
  const [value, onChange] = useState(null);
  const [open, setOpen] = useState(false)
  var locale = 'he'

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}>Thời gian: </Text>
      <TouchableOpacity onPress={() => toggleOpen(true)} style={styles.input}>
        <Text style={styles.inputText}>
          {value ? moment(value).format('MM/YYYY') : "04/2022"}
        </Text>
      </TouchableOpacity>

{/*       <Modal
        transparent
        animationType="fade"
        visible={open}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <DataTable />
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                setOpen(false)
              }}>
              <Text>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}

      <Modal
        transparent
        animationType="fade"
        visible={isOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <MonthPicker
              selectedDate={value || new Date()}
              onMonthChange={onChange}
              localeLanguage=  'vn'
            />
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                toggleOpen(false)
                setOpen(true)
              }}>
              <Text>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SelectedDate;
