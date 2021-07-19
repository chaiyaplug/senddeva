import React from 'react'
import { StyleSheet, Text, View,Button,TouchableOpacity,Dimensions } from 'react-native';
import * as Font from'expo-font'
import AppLoading from 'expo-app-loading'

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
// const Stack = createStackNavigator();
export const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  

export const AppButtoncancel = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainercancel}>
      <Text style={styles.appButtonTextcancel}>{title}</Text>
    </TouchableOpacity>
  );  
  export const AppButtonregister = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainerregisternew}>
      <Text style={styles.appButtonTextregister}>{title}</Text>
    </TouchableOpacity>
  ); 
  export const AppButtonotp = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainerregisternew}>
      <Text style={styles.appButtonTextotp}>{title}</Text>
    </TouchableOpacity>
  ); 
  export const FetchFont=()=>
{

  return Font.loadAsync
  ({
    'FCHpe2-script':require('.././assets/fonts/FCHYpe2.ttf'),
  })
}
  
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:"space-evenly",
    },
    txt:{
      fontFamily:"FCHpe2-script",
      fontSize:25
    },
    number:{
        fontFamily:"FCHpe2-script",
        fontSize:25,
        color:"#009688"
      },
    txtopacity:{
      fontFamily:"FCHpe2-script",
      fontSize:15,
      opacity:0.5
    },
    appButtonContainercancel: {
        elevation: 5,
        backgroundColor: "white",
        height:windowHeight*0.05,
        width:windowWidth*0.4,
        margin:10,
        borderColor:"green", 
         
      //   alignContent:"center"
        borderRadius: 10,
        borderWidth:1,
        padding:5
        // paddingVertical: 10,
        // paddingHorizontal: 12
      },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      height:windowHeight*0.05,
      width:windowWidth*0.4,
      margin:10,
    //   alignContent:"center"
      borderRadius: 10,
      padding:5
      // paddingVertical: 10,
      // paddingHorizontal: 12
    },
    appButtonContainerregisternew: {
        elevation: 8,
        backgroundColor: "#009688",
        height:windowHeight*0.07,
        width:"90%",
        margin:10,
      //   alignContent:"center"
        borderRadius: 10,
        padding:5
        // paddingVertical: 10,
        // paddingHorizontal: 12
      },
      appButtonContainerregister2: {
        elevation: 8,
        backgroundColor: "#009688",
        height:windowHeight*0.05,
        width:windowWidth*0.5,
        margin:10,
      //   alignContent:"center"
        borderRadius: 10,
        padding:5
        // paddingVertical: 10,
        // paddingHorizontal: 12
      },
    appButtonText: {
      fontFamily:"FCHpe2-script",
      fontSize:15,
      // fontSize: 18,
      color: "#fff",
      // fontWeight: "bold",
      alignSelf: "center",
      justifyContent:"center"
      // // textTransform: "uppercase",
      // fontFamily:"FCHpe2-script",
    },
    appButtonTextcancel: {
        fontFamily:"FCHpe2-script",
        fontSize:15,
        // fontSize: 18,
        color: "#009688",
        // fontWeight: "bold",
        alignSelf: "center",
        justifyContent:"center"
        // // textTransform: "uppercase",
        // fontFamily:"FCHpe2-script",
      },
      appButtonTextregister: {
        fontFamily:"FCHpe2-script",
        fontSize:15,
        paddingTop:10,
        textAlign:"center",
        // fontSize: 18,
        color: "white",
        // fontWeight: "bold",
        alignSelf: "center",
        justifyContent:"center"
        // // textTransform: "uppercase",
        // fontFamily:"FCHpe2-script",
      },
      appButtonTextotp: {
        fontFamily:"FCHpe2-script",
        fontSize:15,
        paddingTop:10,
        textAlign:"center",
        // fontSize: 18,
        color: "white",
        // fontWeight: "bold",
        alignSelf: "center",
        justifyContent:"center"
        // // textTransform: "uppercase",
        // fontFamily:"FCHpe2-script",
      },
  });