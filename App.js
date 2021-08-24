import { StatusBar } from 'expo-status-bar';
import React from 'react';
 import { StyleSheet } from 'react-native';
import Navigation from './src/config/Navigation';

export default function App() {
  return (
    <Navigation/>
    // <View style={styles.container}>
    //   <Text style={styles.innerText}>hello!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',

   
//   },
//   innerText: {
//     color: 'red',
//   },
// });
