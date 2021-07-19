
import React from'react'
import { createStackNavigator } from "@react-navigation/stack";
import {Text} from 'react-native'
import Home from './Home'
import Condition from './condition'
import Inputform from './inputform'
import Sentotp from './sentotp'
import Bioscan from './bioscan'
import Fingerscan from './fingerscan'
import {PhoneAuthScreen} from '../otprequest/otprequest'
// import Otprequest from '../otprequest/otprequest'
const Stack = createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "blue",opacity:0.5
    },
    headerTintColor: "blue",
    headerBackTitle:"blue"

  };
const Stackscreen = ({navigation})=>
{
    return(
        <Stack.Navigator 
         screenOptionStyle={{screenOptionStyle}}
            screenOptions={()=> <Text>This is the home screen</Text>
            }          
            > 
            

            <Stack.Screen  options={{headerShown: false}} name="Home" component={Home}  
            
            />
            <Stack.Screen  options={{headerShown: false}} name="condition" component={Condition}  
          
            />
            <Stack.Screen  options={{headerShown: false}} name="inputform" component={Inputform}  
          
          />
             <Stack.Screen  options={{headerShown: false}} name="sentotp" component={Sentotp}  
          
          />
             <Stack.Screen name="PhoneAuthScreen" component={PhoneAuthScreen}  
          
          />
           <Stack.Screen name="bioscan" component={Bioscan}  
          
          />
                <Stack.Screen name="fingerscan" component={Fingerscan}  
                            
                            />
           </Stack.Navigator>
    )

}
export default Stackscreen
// // import React,{useState} from 'react';
// // import { createStackNavigator } from "@react-navigation/stack";
// // // import {Stackscreen}  from'./screen/stackscreen'
// // import { screensEnabled } from 'react-native-screens';


// // const Stack = createStackNavigator(); 
// // const screenOptionStyle = {
// //     headerStyle: {
// //       backgroundColor: "blue",opacity:0.5
// //     },
// //     headerTintColor: "white",
// //     headerBackTitle:"back"

// //   };
// // const MainStackNavigator = ({navigation}) => {
// //   return (
// //     <Stack.Navigator screenOptionStyle={{screenOptionStyle}}
// //     screenOptions={()=> <Text>This is the home screen</Text>}
// //     > 
// //     <Stack.Screen name="home" component={Home}  

// //     />
// //    </Stack.Navigator>
// //   )
// //   }
// // export { MainStackNavigator}