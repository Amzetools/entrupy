import React from 'react'
import { Text, View,SafeAreaView , TouchableOpacity , Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logo from "../assets/images/logo.png"
import arrow from "../assets/images/arrow.png"
import { SafeAreaView as CustomAndroidSafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={{backgroundColor: "#387C7D",height:"100%"}}>

   <SafeAreaView>

    <CustomAndroidSafeAreaView>
      <View style={{
        display: "flex",
  
        flexDirection: "column",
        justifyContent:'space-between',
        
      }}>

    <View style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    }}>
    <Image source={logo} />
    <Text style={{
      fontSize:35,
      marginTop:10,
      color:"white",
      letterSpacing:1,
    }}>Authenticate.me</Text>
    <Text 
    style={{
      fontSize:28,
      textAlign:"center",
      color:"#085855",
      letterSpacing:1,
    }}
    >
      World AI Based Brand Authentication System
    </Text>
    </View>
    </View>
    <View
     style={{
      backgroundColor:"#085855",
      height:"100%",
      marginTop:100,
      display:"flex",
      alignItems:"center"

     }}
    > 
   
   <TouchableOpacity 
    style={{
      marginTop:10,
      backgroundColor:"#000",
      height:65,
      width:65,
      backgroundColor:"#fff",
      borderRadius:50,
      display:"flex",
      justifyContent:"center",
      alignItems: "center",
      borderColor: "#387C7D",
      borderWidth:4,
    }}
    onPress={() => navigator.navigate("SignUp")}
   >
    <Image 
    source={arrow}
    style={{
      width:35,
      height:20,
    }}
    />
   </TouchableOpacity>
   <Text 
   style={{
    marginTop:10,
    color:"#fff",
    letterSpacing:2,
    textTransform: "uppercase",
   }}
   >Start</Text>  
     <View style={{padding:5,backgroundColor:"#387C7D",marginTop:50,width:"100%"}}></View>
     <View>
      <Text style={{
        textTransform:"uppercase",
         color:"#fff",
         letterSpacing:2,
         marginTop:10,
      }}>don't have an account ? Sign up</Text>
     </View>
     </View>


    </CustomAndroidSafeAreaView>
    </SafeAreaView>
    </View>


  )
}

export default HomeScreen