import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Switch, Text, StyleSheet, TextInput,Alert, Button, TouchableOpacity } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
export default function Login({ placeHolderText }) {
    const navigation =  useNavigation();
    const isOn = () => {
        console.log("login")
    }
    const [border,setBorder] = useState(false)
    const [borderSecond,setBorderSecond] = useState(false)
    const borderWhite = () => {
     setBorder(true)
    }
    const borderWhiteSecond = () => {
        setBorderSecond(true)
    }
    const authenticateUser = () => {
        Alert.alert('Logged In', 'This Will Authenticate User', [
            { text: 'Log Me In', onPress: () => navigation.navigate("Onboard") },
          ]);
    }
    
  return (
    <View>
      <View
        style={{
          marginTop: 100,
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
          placeholder={placeHolderText}
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
      <View>
        <View style={{ marginLeft: 30, display: "flex", flexDirection: "row" }}>
          <ToggleSwitch offColor="#5D8587" onToggle={isOn} />
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
        <TouchableOpacity style={{borderColor:"#8EB5BA",borderWidth:1,padding:10,borderRadius:8}} 
        onPress={authenticateUser}
        >
            <Text style={{textAlign:"center",color:"#fff",letterSpacing:1,}}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={{margin:30,padding:7,backgroundColor:"#5264D4",borderRadius:10}}>
        <TouchableOpacity style={{borderColor:"#8EB5BA",borderWidth:1,padding:10,borderRadius:8}}
        onPress={authenticateUser}
        >
            <Text style={{textAlign:"center",color:"#fff",letterSpacing:1,}}>Login With Facebook</Text>
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
