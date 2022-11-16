import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";
import React from 'react'
export default function backButton(props) {
    const navigator = useNavigation();

    return (
        <TouchableOpacity
style={{
  marginTop:10,
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
onPress={() => navigator.navigate(props.backScreen) }
>
  <Image source={BackArrow}  
   style={{
    width:20,
    height:20,
}}/>
</TouchableOpacity>
    )
}