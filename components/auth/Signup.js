import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Switch, Text, StyleSheet, TextInput,Alert, Button, TouchableOpacity } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
export default function SignUp({ placeHolderText }) {
    const navigation =  useNavigation();
    const learnMore = () => navigation.navigate("Tabs")
    const [isOn,setIsOn] = useState();
    const [border,setBorder] = useState(false);
    const [borderSecond,setBorderSecond] = useState(false)
    const borderWhite = () => {
     setBorder(true)
    }
    const borderWhiteSecond = () => {
        setBorderSecond(true)
    }
    const changeToggle = () => {
       setIsOn(true)
    }
  return (
    <View>
      <View
        style={{
          marginTop: 50,
          borderWidth: 2,
          margin: 30,
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          borderLeftColor: "transparent",
          borderBottomColor: border ? "#fff" :"#8EB5BA",
        }}
      >
        <TextInput
      onChange={borderWhite} 
          placeholder="User name"
          placeholderTextColor="#8EB5BA"
        />
      </View>
      <View
        style={{
          marginTop: 10,
          borderWidth: 2,
          margin: 30,
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          borderLeftColor: "transparent",
          borderBottomColor: border ? "#fff" :"#8EB5BA",
        }}
      >
        <TextInput onChange={borderWhiteSecond}  placeholder="Password" placeholderTextColor="#8EB5BA" />
      </View>
      <View
        style={{
          marginTop: 10,
          borderWidth: 2,
          margin: 30,
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          borderLeftColor: "transparent",
          borderBottomColor: border ? "#fff" :"#8EB5BA",
        }}
      >
        <TextInput onChange={borderWhiteSecond}  placeholder="Repeat Password" placeholderTextColor="#8EB5BA" />
      </View>
      <View
        style={{
          marginTop: 10,
          borderWidth: 2,
          margin: 30,
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          borderLeftColor: "transparent",
          borderBottomColor: border ? "#fff" :"#8EB5BA",
        }}
      >
        <TextInput onChange={borderWhiteSecond}  placeholder="Email" placeholderTextColor="#8EB5BA" />
      </View>
      <View>
        <View style={{ marginLeft: 30, display: "flex", flexDirection: "row" }}>
          <ToggleSwitch offColor="#5D8587" onToggle={changeToggle} onColor="red" />

          <Text
            style={{
              marginLeft: 20,
              color: "#FFFFFF",
              letterSpacing: 2,
            }}
          >
            Remember me
          </Text>
        </View>

      </View>
      <View style={{margin:30,padding:7,backgroundColor:"#C2365F",borderRadius:10}}>
        <TouchableOpacity 
        onPress={learnMore}
        style={{borderColor:"#8EB5BA",borderWidth:1,padding:10,borderRadius:8}} 
        >
            <Text style={{textAlign:"center",color:"#fff",letterSpacing:1,}}>Sign up</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "red",
    marginTop: 40,
  },
});
