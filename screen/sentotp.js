
import React,{useState,useRef} from 'react';
import {Text,View,Dimensions,TouchableOpacity, TextInput} from 'react-native'
import * as Font from'expo-font'
import AppLoading from 'expo-app-loading'
import {AppButton,FetchFont,styles,windowWidth,windowHeight,AppButtoncancel,AppButtonotp} from './font'
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Otprequest,{PhoneAuthScreen} from '../otprequest/otprequest'
// import { render } from 'react-dom';



const Sentotp =({navigation})=>
{      
    const [telephone,Settelephone]=useState('')
    console.log(telephone)
    //  const ref = useRef('rfesfsef')
// ref.current = "1234";
// alert(ref.current)
    // FetchFont()
   return(
        <View style={{flex:1,justifyContent:"space-between", alignContent:"center"}}>

                                        <View style={{flex:0.5,alignItems:"center",left:10,justifyContent:"flex-end"}}>
                                        <MaterialIcons color="green" name="phonelink-lock" size={80} style={{marginBottom:20}} />  
                                    <Text style={styles.txt}>OTP จะถูกส่งไปที่เบอร์โทรศัพท์</Text>
                                    {/* <Text style={styles.number}>062-XXX-6465</Text> */}
                                    <TextInput placeholder="ใส่เบอร์ปลายทาง" style={styles.number} onChangeText={text => Settelephone(text)}
        defaultValue={telephone}/>
                                    <Text style={styles.txt,{margin:20}}>ตัวอย่าง(+66624046465)</Text>
                                    </View>

                                <View style={{flex:0.3,flexDirection:"row",justifyContent:"center"}}>                      
                                            <AppButtonotp title="ขอรหัส OTP" onPress={()=> {
                                                navigation.navigate('PhoneAuthScreen',{
                                                    telephone:telephone}
                                                )
                                            }}/>
                                                        
                                            
                                        </View>
                                      
                        </View>
    
   )
}
export default Sentotp