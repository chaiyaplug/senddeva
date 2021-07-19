
import React,{useState,useEffect} from 'react';
import {Text,View,Dimensions,TouchableOpacity,StyleSheet} from 'react-native'
import * as Font from'expo-font'
import AppLoading from 'expo-app-loading'
import {AppButton,FetchFont,styles,windowWidth,windowHeight,AppButtoncancel} from './font'
import  Feather from 'react-native-vector-icons/Feather'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';


const Bฺioscan =({navigation})=>
{           

    const [firstrepin,setFirstrepin]=useState(['','','','','',''])
    const [firstcheckrepin,setFirstcheckrepin]=useState(false)
    const [seconedpin,setSecondpin]=useState(['','','','','',''])
    const [checkpin,setCheckpin]=useState(0)
    const [pincode,setPincode]=useState(['','','','','',''])
    const [recheckpincode,setRecheckpincode]=useState(['','','','','',''])
    const [checknamerepin,setChecknamerepin]=useState(false)
    const checktemp=()=>{
        var tempnum=[...pincode]
        for(var k=0;k<tempnum.length;k++)
        {console.log(pincode)
            if(tempnum[k]!==''){
           setCheckpin(checkpin+1) 

           break
          
            }
        }
        if(checkpin===4)
        { 
            if(firstcheckrepin===false){
            var temprepin=['','','','','','']
                setFirstrepin(pincode)
                setPincode(temprepin)
                setChecknamerepin(true)
                setFirstcheckrepin(true)
                setCheckpin(0)
            }
            else
            {
                var temprepin=['','','','','','']
                setSecondpin(pincode)
                navigation.navigate('fingerscan')
            }

        }
    }

    const Changepin=(num)=>
    {  var tempnum=[...pincode]
        var check=false
        for(var a=0 ;a<pincode.length;a++)
        {
                    if(pincode[a]==='')
                    {  
                        tempnum[a]=num
                        setPincode(tempnum)
                        
                   
                       
                        break
                    }   
                    
                }
                // tempnum=pincode
               
                checktemp()
    }  
    const Minuspin=()=>
    {  
         var tempnum=[...pincode]
        var check=false

        for(var a=5 ;pincode.length>a;a--)
        {
                    if(pincode[a]!=='')
                    {   
                        tempnum[a]=''
                        setPincode(tempnum);
                        break
                    }   
                    
                }
    }          
   return(
        <View style={{flex:1,justifyContent:"space-between", alignContent:"center"}}>
            
                <View style={{flex:0.1,alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
                {/* <MaterialCommunityIcons color="green" name="newspaper-variant-outline" size={40}  />   */}
              {!checknamerepin?<Text style={styles.txt,{fontSize:20}}>ตั้งรหัส PIN CODE</Text>:<Text style={styles.txt,{fontSize:20}}>ยืนยันรหัส PIN CODE</Text>}
              </View>
            
                                    <View     style={{flex:0.1 ,flexDirection:"row",justifyContent:"space-evenly",alignItems:"flex-start"}}>
                                        {/* {pincode.map(pin)=> <View key={pin}  style={pincode[0]==="" ?  stylespin.pinblank  :stylespin.pinfull}></View> */}
                                               
                                        
                                                                        <View  style={pincode[0]==="" ?  stylespin.pinblank  :stylespin.pinfull}></View>
                                                                        <View style={pincode[1]==="" ?  stylespin.pinblank  :stylespin.pinfull}></View>
                                                                        <View style={pincode[2]==="" ?  stylespin.pinblank  :stylespin.pinfull}></View>
                                                                        <View style={pincode[3]==="" ?  stylespin.pinblank  :stylespin.pinfull}></View>
                                                                        <View style={pincode[4]==="" ?  stylespin.pinblank  :stylespin.pinfull}></View>
                                                                        <View style={pincode[5]==="" ?  stylespin.pinblank  :stylespin.pinfull}></View>
                                            </View>
                                            <View     style={{flex:0.8 ,flexDirection:"row",justifyContent:"flex-end",alignItems:"center",flexWrap:"wrap",right:15}}>
                                                                       
                                                                        <View style={{margin:10,width:100,height:100,borderWidth:2,borderRadius:100,opacity:0.3,justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:40}} onPress={()=>Changepin(1)} >1</Text></View>
                                                                        <View style={{margin:10,width:100,height:100,borderWidth:2,borderRadius:100,opacity:0.3,justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:40}}onPress={()=>Changepin(2)}  >2</Text></View>
                                                                        <View style={{margin:10,width:100,height:100,borderWidth:2,borderRadius:100,opacity:0.3,justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:40}}onPress={()=>Changepin(3)} >3</Text></View>
                                                                        <View style={{margin:10,width:100,height:100,borderWidth:2,borderRadius:100,opacity:0.3,justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:40}}onPress={()=>Changepin(4)} >4</Text></View>
                                                                        <View style={{margin:10,width:100,height:100,borderWidth:2,borderRadius:100,opacity:0.3,justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:40}} onPress={()=>Changepin(5)}>5</Text></View>
                                                                        <View style={{margin:10,width:100,height:100,borderWidth:2,borderRadius:100,opacity:0.3,justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:40}}onPress={()=>Changepin(6)} >6</Text></View>
                                                                        <View style={{margin:10,width:100,height:100,borderWidth:2,borderRadius:100,opacity:0.3,justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:40}}onPress={()=>Changepin(7)} >7</Text></View>
                                                                        <View style={{margin:10,width:100,height:100,borderWidth:2,borderRadius:100,opacity:0.3,justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:40}} onPress={()=>Changepin(8)}>8</Text></View>
                                                                        <View style={{margin:10,width:100,height:100,borderWidth:2,borderRadius:100,opacity:0.3,justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:40}}onPress={()=>Changepin(9)} >9</Text></View>
                                                                        <View style={{margin:10,width:100,height:100,borderWidth:2,borderRadius:100,opacity:0.3,justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:40}} onPress={()=>Changepin(10)}>0</Text></View>
                                                                        <View style={{margin:10,width:100,height:100,borderRadius:100,opacity:0.3,justifyContent:"center",}}>
                                                                             <Feather style={{alignSelf:"center",opacity:0.6}}color="black" name="delete" size={80}  onPress={()=>Minuspin()} /> 
                                                                            {/* <Text style={{alignSelf:"center",fontSize:40}} onPress={Changepin(10)}></Text> */}
                                                                            </View>

                                      
                                         
                                            </View>
      </View>     
    
   )
}
export default Bฺioscan
const stylespin=StyleSheet.create({
    pinblank :{
        width:15,
        height:15,
        borderWidth:2,
        borderRadius:15},
    pinfull :{width:15,height:15,borderWidth:2,borderRadius:15,backgroundColor:"black"}
})