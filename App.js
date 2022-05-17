import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListReceipt from './src/screens/ListReceipt';
import Dashboard from './src/screens/Dashboard';
import FormEditSale_Step1 from './src/screens/FormEditSale_Step1';
import FormEditSale_Step2 from './src/screens/FormEditSale_Step2';
import FormEditSale_Step3 from './src/screens/FormEditSale_Step3';
import FormEditSale_Step4 from './src/screens/FormEditSale_Step4';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="list_receipt" component={ListReceipt} />
        <Stack.Screen name="form_step1" component={FormEditSale_Step1} />
        <Stack.Screen name="form_step2" component={FormEditSale_Step2} />
        <Stack.Screen name="form_step3" component={FormEditSale_Step3} />
        <Stack.Screen name="form_step4" component={FormEditSale_Step4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;