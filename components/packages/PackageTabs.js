import { View, Text, TouchableOpacity } from "react-native";

export default function PackageTabs() {
  const Menus = ["All", "Best", "New", "Latest"];
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        backgroundColor: "transparent",
        padding: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        marginTop: 10,
      }}
    >
      {Menus.map((item, index) => (
        <TouchableOpacity key={index + item} 
        >
          <Text style={{color:"#9E9E9E",fontWeight:"bold",fontSize:15,}}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
