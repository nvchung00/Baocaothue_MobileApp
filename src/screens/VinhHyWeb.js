import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
// import { IconContext } from 'react-icons';
import { WebView } from 'react-native-webview';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
function VinhHyWeb() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
     <WebView source={{ uri: 'https://baocaothue.com/' }} />
    </>
  );
}



export default VinhHyWeb;