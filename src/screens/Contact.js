import React from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';
import contact from '../../assets/contact.png'
function Contact(){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                           <Image source={contact} style={{ width: 300, height: 280 }} /> 
            <Text style={{fontSize:32, color:'purple'}}>Contact Me</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Contact;