import React from "react";
import { ScrollView, Text, View, SafeAreaView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView as CustomAndroidSafeAreaView } from "react-native-safe-area-context";
import Heading from "../components/auth/Heading";
import Login from "../components/auth/Login";

const SignupScreen = () => {
  const navigator = useNavigation();

  return (
    
    <View style={{ backgroundColor: "#387C7D", height: "100%" }}>
      <SafeAreaView>
        <CustomAndroidSafeAreaView>
          <View
            style={{
              padding: 0.5,
              backgroundColor: "#8EB5BA",
              marginLeft: 10,
              marginRight: 10,
            }}
          ></View>
          <Heading headingTitle="Reach And Verify Your Brand With Trust" />
          <Login placeHolderText="Username"/>
        </CustomAndroidSafeAreaView>
      </SafeAreaView>
    </View>
    
  );
};

export default SignupScreen;
