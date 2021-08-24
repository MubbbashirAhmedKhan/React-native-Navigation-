import React from 'react';
import { StyleSheet,View,Image,Text,Button } from 'react-native';
import pic from '../../assets/pic.png'

function Home(props){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={pic} style={{ width: 305, height: 200 }} /> 
            <Text style={{fontSize:32, color:'green'}}>Home </Text>
        <Button onPress={()=>props.navigation.navigate("About")} title="Go to About"/>
        </View>
    )
}

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor:"#F08080",
//         alignItems:"center",
//         justifyContent:'center'
//     }
// })

export default Home;