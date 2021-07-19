import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Dimensions } from 'react-native';
import * as Font from'expo-font'
import AppLoading from 'expo-app-loading'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// const Stack = createStackNavigator();
const fetchFont=()=>
{

  return Font.loadAsync
  ({
    'FCHpe2-script':require('.././assets/fonts/FCHYpe2.ttf'),
  })
}
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
export default function Home({navigation}) {
  const [fontLoaded, setfontLoaded] = useState(false)
  if(!fontLoaded){
    
          return <AppLoading startAsync={fetchFont}
          onError={()=>console.log("error")}
            onFinish={()=>{
              setfontLoaded(true)              
            }}
            
           />
  }
  return (
    
    
    <View style={styles.container}>
       <StatusBar style="auto" />
              <View style={{flex:0.5,alignSelf:"flex-start",left:10,justifyContent:"center"}}>
              <Text style={styles.txt}>ยินดีต้อนรับ</Text>
              <Text style={styles.txtopacity}>กรุณาเลือกภาษา</Text>
              </View>

                    <View style={{flex:0.5 ,justifyContent:"center"}}>
                    <AppButton title="English" onPress={() => navigation.navigate("condition")}/>
                    <AppButton title="ไทย" onPress={() => navigation.navigate("condition")}/>          
                    </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  txtopacity:{
    fontFamily:"FCHpe2-script",
    fontSize:15,
    opacity:0.5
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    height:windowHeight*0.05,
    width:windowWidth*0.75,
    margin:10,
    borderRadius: 10,
    padding:5
    // paddingVertical: 10,
    // paddingHorizontal: 12
  },
  appButtonContainercancel: {
    elevation: 8,
    backgroundColor: "#009688",
    height:windowHeight*0.05,
    width:windowWidth*0.75,
    margin:10,
    borderRadius: 10,
    padding:5
    // paddingVertical: 10,
    // paddingHorizontal: 12
  }
  ,
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
  }
});
