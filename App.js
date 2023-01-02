import { View, TouchableOpacity, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js';
import SignupScreen from './screens/SignupScreen.js';
import BackArrow from "./assets/images/backarrow.png"
import OnBoardUser from './screens/OnBoardUser.js';
import Tabs from "./navigation/tabs"
import { useState } from 'react';
const Stack = createNativeStackNavigator();

export default function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true)


  return (
  
    <NavigationContainer>

      {/* First Page Navigator */}
   <Stack.Navigator
   
   >
        
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerStyle: {
            backgroundColor:"#387C7D",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color:"#fff"
          },
          headerShadowVisible: false,
        }}
        />

        {/* Second Sign up page Stack */}
        <Stack.Screen name="SignUp" component={SignupScreen}
         options={{
          headerStyle: {
            backgroundColor:"#387C7D",     
          },
          headerTitle:"Login",
          headerTitleStyle: {
            color:"#fff"
          },
          headerLeft: () => (
            <View>
            <TouchableOpacity
            style={{
              
              backgroundColor:"#000",
              height:45,
              width:45,
              backgroundColor:"#fff",
              borderRadius:50,
              display:"flex",
              justifyContent:"center",
              alignItems: "center",
              borderColor: "#085855",
              borderWidth:4,
            }}
            >
              <Image source={BackArrow}  
               style={{
                width:20,
                height:20,
    }}/>
            </TouchableOpacity>
            </View>
          ),
          headerTitleAlign:"center",
          headerShadowVisible: false,

        }}
        />
                <Stack.Screen name="Onboard" component={OnBoardUser}
         options={{
          headerStyle: {
            backgroundColor:"#387C7D",
  
          },
          headerTitle:"Sign up",
          headerTitleStyle: {
            color:"#fff"
          },
          headerLeft: () => (
            <View>
            <TouchableOpacity
            style={{
              backgroundColor:"#000",
              height:45,
              width:45,
              backgroundColor:"#fff",
              borderRadius:50,
              display:"flex",
              justifyContent:"center",
              alignItems: "center",
              borderColor: "#085855",
              borderWidth:4,
            }}
            >
              <Image source={BackArrow}  
               style={{
                width:20,
                height:20,
    }}/>
            </TouchableOpacity>
            </View>
          ),
          headerTitleAlign:"center",
          headerShadowVisible: false,

        }}
        />
          <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
   
    </NavigationContainer>
  );
}
