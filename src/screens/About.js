import React from 'react';
import { StyleSheet,View,Text,Image,Button} from 'react-native';
 import pic2 from '../../assets/pic2.jpg' 

function About(props){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <Image source={pic2} style={{ width: 350, height: 200 }} /> 
            <Text style={{fontSize:32, color:'blue'}}> About Us</Text>
            <Button onPress={()=>props.navigation.navigate("Contact")} title="Go to Contact"/>
        </View>
    )
}




export default About;