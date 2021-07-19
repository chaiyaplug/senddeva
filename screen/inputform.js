
import React,{useState} from 'react';
import {StyleSheet,CheckBox,Text,View,Dimensions,TouchableOpacity,TextInput, Button} from 'react-native'
import * as Font from'expo-font'
import AppLoading from 'expo-app-loading'
import {AppButton,FetchFont,styles,windowWidth,windowHeight,AppButtoncancel,AppButtonregister} from './font'
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import { render } from 'react-dom';


const Inputform =({navigation})=>
    {
       const [check,setCheck]=useState(false) 
        
    // FetchFont()
   return(
        <View style={{flex:1,justifyContent:"center", alignContent:"center"}}>

                <View style={{flex:0.3}}>

                </View>
                    <View style={{flex:0.7}} >
                       
                    <TextInput placeholder="ชื่อผู้ใช้งาน" style={styletext.txtinput}/>
                    <TextInput placeholder="รหัสผ่าน" style={styletext.txtinput}/>
                   
                  
                                <View style={{flexDirection:"row" ,justifyContent:"space-around",alignItems:"center"}}>
                                <CheckBox value={check} onValueChange={()=>setCheck(!check)}/>
                                <Text  style={styletext.text}>บันทึกการเข้าสู่ระบบ</Text>
                                <Text style={styletext.text} >ลืมรหัสผ่าน?</Text>
                                     </View>
                      

                                    <View style={{flexDirection:"column",alignItems:"center" ,marginVertical:50}}>
                                
                                    <AppButtonregister title="เข้าสู่ระบบ" onPress={() => navigation.navigate("sentotp")}/> 
                                    <View style={{flexDirection:"row"}}>
                                     <Text style={{textDecorationLine:"line-through", opacity:0.2}}>----------------------------</Text>   
                                     <Text style={{opacity:0.2}} >ไม่มีบัญชีผู้ใช้</Text>
                                     <Text style={{textDecorationLine:"line-through", opacity:0.2}}>----------------------------</Text>
                                     </View>  
                                        <AppButtonregister title="เปิดบัญชีเพื่อลงทะเบียนผู้ใช้" onPress={() => navigation.navigate("bioscan")}/>  
                                            </View>
                        </View>
        </View>
    
   )
}
export default Inputform

export const styletext=StyleSheet.create({
    txtinput:
    {
        fontFamily:"FCHpe2-script",
    alignContent:"center",
    fontSize:15,
    margin:25,
    borderBottomWidth:2,
    borderColor: 'rgba(158, 150, 150, .5)',
    // opacity:0.2
    },
    text:
    {
        fontFamily:"FCHpe2-script",
    alignContent:"center",
    fontSize:15,
    color:  'rgba(158, 150, 150, .5)',
    margin:10,
    // opacity:0.2
    }
})