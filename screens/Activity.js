import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Activity = () => {
  return (
    <View style={{ backgroundColor: "#388A8D", height: "100%" }}>
      {/* Cards  */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          marginTop: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#AAAAAA",
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
        ></View>
        <View>
          <Text style={{ textAlign: "left", color: "white" }}>
            Tonnie Marshal Followed You.
          </Text>
          <Text style={{ color: "#ccc" }}>14m Ago</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ccc",
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
        >
          <View
            style={{
              backgroundColor: "#E9F1F1",
              height: 45,
              width: 45,
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="adduser" size={24} color="black" />
          </View>
        </View>
      </View>
      <View
        style={{
          borderWidth: 2,
          borderBottomColor: "#AAAAAA",
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          borderLeftColor: "transparent",
          padding: 10,
          marginRight: 20,
          marginLeft: 20,
        }}
      ></View>
       <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          marginTop: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#AAAAAA",
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
        ></View>
        <View>
          <Text style={{ textAlign: "left", color: "white" }}>
            Tonnie Marshal Followed You.
          </Text>
          <Text style={{ color: "#ccc" }}>14m Ago</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ccc",
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
        >
          <View
            style={{
              backgroundColor: "#E9F1F1",
              height: 45,
              width: 45,
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="adduser" size={24} color="black" />
          </View>
        </View>
      </View>
      <View
        style={{
          borderWidth: 2,
          borderBottomColor: "#AAAAAA",
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          borderLeftColor: "transparent",
          padding: 10,
          marginRight: 20,
          marginLeft: 20,
        }}
      ></View>
      
    </View>
  );
};

export default Activity;
