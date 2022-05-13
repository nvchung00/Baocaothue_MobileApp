import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () =>  {

  const data = {
      data: [
        {id:1, title: "Product 1",  price:"3000"},
        {id:2, title: "Product 2",  price:"3000"} ,
        {id:3, title: "Product 3",  price:"3000"}, 
        {id:4, title: "Product 4",  price:"3000"}, 
        {id:5, title: "Product 5",  price:"3000"}, 
      ]
    };
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <View style={{flex: 1}}>
            <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 'bold' }}>Chi tiết báo cáo thuế</Text>
           <Text style={{ fontSize: 10, marginTop: 20, marginBottom: 20 }}>CÔNG TY CỔ PHẦN CẢI TIẾN XANH</Text>
            </View>

            <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>
            <TouchableOpacity
            style={styles.button}
          >
            <Text style={{ color: "#ffff" }}>Thêm vật tư</Text>
          </TouchableOpacity>
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
         <View style={{flex:2}}>
         <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={data.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price} VNĐ</Text>
                  </View>
                </View>
                
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart()}>
                        <Text style={[styles.socialBarLabel, styles.buyNow]}>Xóa</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
         </View>
          
      </View>
    );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  header: {
    marginLeft: 20,
    flex: 1
  },
  date: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    alignContent: 'center',
    justifyContent: 'center',
  },
  printBtn: {
    alignItems: "center",
    backgroundColor: "#4CAE4C",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row', 
    flexWrap: 'wrap',
    flex: 1,
    height: 50,
    marginLeft: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#4CAE4C",
    padding: 10,
    borderRadius: 10,
    marginTop: 40,
    flex: 0.5
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});  