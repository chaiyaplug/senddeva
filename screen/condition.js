
import React,{useState} from 'react';
import {Text,View,Dimensions,TouchableOpacity} from 'react-native'
import * as Font from'expo-font'
import AppLoading from 'expo-app-loading'
import {AppButton,FetchFont,styles,windowWidth,windowHeight,AppButtoncancel} from './font'
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import { render } from 'react-dom';


const Condition =({navigation})=>
{       
    // FetchFont()
   return(
        <View style={{flex:1,justifyContent:"space-between", alignContent:"center"}}>
                <View style={{flex:0.5,alignItems:"center",left:10,flexDirection:"row"}}>
                <MaterialCommunityIcons color="green" name="newspaper-variant-outline" size={40}  />  
              <Text style={styles.txt}>เงื่อนไขการใช้บริการ</Text>
              {/* <Text style={styles.txtopacity}>กรุณาเลือกภาษา</Text> */}
              </View>

                     <View style={{flex:0.3,flexDirection:"row",justifyContent:"center"}}>
                                    
                                    {/* <View stlye={{flex:0.4}}> */}
                                        <AppButtoncancel title="ปฏิเสธ" onPress={() => navigation.navigate("Home")}/>
                                        {/* </View> */}

                                        {/* <View style={{flex:0.4}}> */}
                                                    <AppButton title="ยอมรับ" onPress={() => navigation.navigate("inputform")}/>          
                                                    {/* ton title="ปฏิเสธ" onPress={() => navigation.navigate("Home")}/> */}
                                                    </View>
                                             {/* </View> */}
                        </View>
    
   )
}
export default Condition