/**
 * Created by januslo on 2018/12/27.
 */

 import React, {Component} from 'react';
 import {ActivityIndicator,
     Platform,
     StyleSheet,
     Text,
     View,
     Button,
     ScrollView,
     DeviceEventEmitter,
     NativeEventEmitter,
     Switch,
     TouchableOpacity,
     Dimensions,
     ToastAndroid} from 'react-native';
 import {BluetoothEscposPrinter, BluetoothManager, BluetoothTscPrinter} from "react-native-bluetooth-escpos-printer";
//  import EscPos from "./escpos";
//  import Tsc from "./tsc";
 const base64Jpg =  "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";
 var {height, width} = Dimensions.get('window');
 export default class Home extends Component {
 
 
     _listeners = [];
 
     constructor() {
         super();
         this.state = {
             devices: null,
             pairedDs:[],
             foundDs: [],
             bleOpend: false,
             loading: true,
             boundAddress: '',
             debugMsg: ''
         }
     }
 
     componentDidMount() {//alert(BluetoothManager)
         BluetoothManager.isBluetoothEnabled().then((enabled)=> {
             this.setState({
                 bleOpend: Boolean(enabled),
                 loading: false
             })
         }, (err)=> {
             err
         });
 
         if (Platform.OS === 'ios') {
             let bluetoothManagerEmitter = new NativeEventEmitter(BluetoothManager);
             this._listeners.push(bluetoothManagerEmitter.addListener(BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED,
                 (rsp)=> {
                     this._deviceAlreadPaired(rsp)
                 }));
             this._listeners.push(bluetoothManagerEmitter.addListener(BluetoothManager.EVENT_DEVICE_FOUND, (rsp)=> {
                 this._deviceFoundEvent(rsp)
             }));
             this._listeners.push(bluetoothManagerEmitter.addListener(BluetoothManager.EVENT_CONNECTION_LOST, ()=> {
                 this.setState({
                     name: '',
                     boundAddress: ''
                 });
             }));
         } else if (Platform.OS === 'android') {
             this._listeners.push(DeviceEventEmitter.addListener(
                 BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED, (rsp)=> {
                     this._deviceAlreadPaired(rsp)
                 }));
             this._listeners.push(DeviceEventEmitter.addListener(
                 BluetoothManager.EVENT_DEVICE_FOUND, (rsp)=> {
                     this._deviceFoundEvent(rsp)
                 }));
             this._listeners.push(DeviceEventEmitter.addListener(
                 BluetoothManager.EVENT_CONNECTION_LOST, ()=> {
                     this.setState({
                         name: '',
                         boundAddress: ''
                     });
                 }
             ));
             this._listeners.push(DeviceEventEmitter.addListener(
                 BluetoothManager.EVENT_BLUETOOTH_NOT_SUPPORT, ()=> {
                     ToastAndroid.show("Device Not Support Bluetooth !", ToastAndroid.LONG);
                 }
             ))
         }
     }
 
     componentWillUnmount() {
         //for (let ls in this._listeners) {
         //    this._listeners[ls].remove();
         //}
     }
 
     _deviceAlreadPaired(rsp) {
         var ds = null;
         if (typeof(rsp.devices) == 'object') {
             ds = rsp.devices;
         } else {
             try {
                 ds = JSON.parse(rsp.devices);
             } catch (e) {
             }
         }
         if(ds && ds.length) {
             let pared = this.state.pairedDs;
             pared = pared.concat(ds||[]);
             this.setState({
                 pairedDs:pared
             });
         }
     }
 
     _deviceFoundEvent(rsp) {//alert(JSON.stringify(rsp))
         var r = null;
         try {
             if (typeof(rsp.device) == "object") {
                 r = rsp.device;
             } else {
                 r = JSON.parse(rsp.device);
             }
         } catch (e) {//alert(e.message);
             //ignore
         }
         //alert('f')
         if (r) {
             let found = this.state.foundDs || [];
             if(found.findIndex) {
                 let duplicated = found.findIndex(function (x) {
                     return x.address == r.address
                 });
                 //CHECK DEPLICATED HERE...
                 if (duplicated == -1) {
                     found.push(r);
                     this.setState({
                         foundDs: found
                     });
                 }
             }
         }
     }
 
     _renderRow(rows){
         let items = [];
         for(let i in rows){
             let row = rows[i];
             if(row.address) {
                 items.push(
                     <TouchableOpacity key={new Date().getTime()+i} style={styles.wtf} onPress={()=>{
                     this.setState({
                         loading:true
                     });
                     BluetoothManager.connect(row.address)
                         .then((s)=>{
                             this.setState({
                                 loading:false,
                                 boundAddress:row.address,
                                 name:row.name || "UNKNOWN"
                             })
                         },(e)=>{
                             this.setState({
                                 loading:false
                             })
                             alert(e);
                         })
 
                 }}><Text style={styles.name}>{row.name || "UNKNOWN"}</Text><Text
                         style={styles.address}>{row.address}</Text></TouchableOpacity>
                 );
             }
         }
         return items;
     }
 
     render() {
         return (
             <ScrollView style={styles.container}>
                 <Text>{this.state.debugMsg}</Text>
                 <Text style={styles.title}>Blutooth Opended:{this.state.bleOpend?"true":"false"} <Text>Open BLE Before Scanning</Text> </Text>
                 <View>
                 <Switch value={this.state.bleOpend} onValueChange={(v)=>{
                 this.setState({
                     loading:true
                 })
                 if(!v){
                     BluetoothManager.disableBluetooth().then(()=>{
                         this.setState({
                             bleOpend:false,
                             loading:false,
                             foundDs:[],
                             pairedDs:[]
                         });
                     },(err)=>{alert(err)});
 
                 }else{
                     BluetoothManager.enableBluetooth().then((r)=>{
                         var paired = [];
                         if(r && r.length>0){
                             for(var i=0;i<r.length;i++){
                                 try{
                                     paired.push(JSON.parse(r[i]));
                                 }catch(e){
                                     //ignore
                                 }
                             }
                         }
                         this.setState({
                             bleOpend:true,
                             loading:false,
                             pairedDs:paired
                         })
                     },(err)=>{
                         this.setState({
                             loading:false
                         })
                         alert(err)
                     });
                 }
             }}/>
                     <Button disabled={this.state.loading || !this.state.bleOpend} onPress={()=>{
                         this._scan();
                     }} title="Scan"/>
                 </View>
                 <Text  style={styles.title}>Connected:<Text style={{color:"blue"}}>{!this.state.name ? 'No Devices' : this.state.name}</Text></Text>
                 <Text  style={styles.title}>Found(tap to connect):</Text>
                 {this.state.loading ? (<ActivityIndicator animating={true}/>) : null}
                 <View style={{flex:1,flexDirection:"column"}}>
                 {
                     this._renderRow(this.state.foundDs)
                 }
                 </View>
                 <Text  style={styles.title}>Paired:</Text>
                 {this.state.loading ? (<ActivityIndicator animating={true}/>) : null}
                 <View style={{flex:1,flexDirection:"column"}}>
                 {
                     this._renderRow(this.state.pairedDs)
                 }
                   <Button onPress={async () => {
                    await BluetoothEscposPrinter.printBarCode("123456789012", BluetoothEscposPrinter.BARCODETYPE.JAN13, 3, 120, 0, 2);
                    await  BluetoothEscposPrinter.printText("\r\n\r\n\r\n", {});
                }} title="Print BarCode"/>

            <Button 
                        title="Print Image" onPress={async () => {
                    try {
                        await BluetoothEscposPrinter.printPic(base64Jpg, {width: 2000, left: -10});
                        await  BluetoothEscposPrinter.printText("\r\n\r\n\r\n", {});
                    } catch (e) {
                        alert(e.message || "ERROR")
                    }
                }}/>

                 </View>

             </ScrollView>
         );
     }
 
     _selfTest() {
         this.setState({
             loading: true
         }, ()=> {
             BluetoothEscposPrinter.selfTest(()=> {
             });
 
             this.setState({
                 loading: false
             })
         })
     }
 
     _scan() {
         this.setState({
             loading: true
         })
         BluetoothManager.scanDevices()
             .then((s)=> {
                 var ss = s;
                 var found = ss.found;
                 try {
                     found = JSON.parse(found);//@FIX_it: the parse action too weired..
                 } catch (e) {
                     //ignore
                 }
                 var fds =  this.state.foundDs;
                 if(found && found.length){
                     fds = found;
                 }
                 this.setState({
                     foundDs:fds,
                     loading: false
                 });
             }, (er)=> {
                 this.setState({
                     loading: false
                 })
                 alert('error' + JSON.stringify(er));
             });
     }
 
 
 }
 
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#F5FCFF',
     },
 
     title:{
         width:width,
         backgroundColor:"#eee",
         color:"#232323",
         paddingLeft:8,
         paddingVertical:4,
         textAlign:"left"
     },
     wtf:{
         flex:1,
         flexDirection:"row",
         justifyContent:"space-between",
         alignItems:"center"
     },
     name:{
         flex:1,
         textAlign:"left"
     },
     address:{
         flex:1,
         textAlign:"right"
     }
 });