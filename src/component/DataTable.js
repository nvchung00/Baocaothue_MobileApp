import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


export default DataTable = (data) => {

    const data_1 = {
        tableHead: ['STT', 'Tên đối tượng', ''],
        tableData: [
          ['1', 'CÔNG TY CỔ PHẦN CẢI TIẾN XANH', 'Chi tiết'],
        ]
      }
    
      const data_2 = {
        tableHead: ['STT', 'Mã vt', 'Tên vật tư', ''],
        tableData: [
          ['1', '1NC_FPT','Chữ ký số cloud FPT 1 năm', 'Chi tiết'],
        ]
      }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 1 }}>
                <Row data={data_1.tableHead} flexArr={[1, 2, 1]} style={styles.head} textStyle={styles.text}/>
                    <TableWrapper style={styles.wrapper}>
                        <Col data={data_1.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                        <Rows data={data_1.tableData} flexArr={[1, 2, 1]} style={styles.row} textStyle={styles.text} />
                    </TableWrapper>
                </Table>
            </View>
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 1 }}>
                <Row data={data_2.tableHead} flexArr={[1, 1, 2,1]} style={styles.head} textStyle={styles.text}/>
                    <TableWrapper style={styles.wrapper}>
                        <Col data={data_2.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                        <Rows data={data_2.tableData} flexArr={[1, 1, 2, 1]} style={styles.row} textStyle={styles.text} />
                    </TableWrapper>
                </Table>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 50  },
    text: { textAlign: 'center' }
  });