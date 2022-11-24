import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Packages } from "../db/PackagesData";

export default function Card() {
  return (
    <ScrollView>
      <View>
        <View>
          {Packages.map((packages, index) => (
            <View
              key={packages.key + index}
              style={{
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 4,
                marginTop: 10,
                height: 150,
                margin: 20,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ backgroundColor: "transparent", padding: 2,display:"flex",flexDirection:"row",justifyContent:"space-around" }}
              >
             
              <View
              style={{backgroundColor:"transparent",height:20,width:50,}}
              ></View>
                <View
              style={{backgroundColor:"#686F8D",height:50,width:50,}}
              >
              </View>
              </View>
              <View
                style={{
                  backgroundColor: "transparent",
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  display:"flex",
                  flexDirection: "row",
                  justifyContent:"space-between"
                }}
              >
              <View>
              <Text>{packages.PackageName}</Text>
                <Text>{packages.images}</Text>
              </View>
              <View>
                <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor:"#389DA0",
                borderRadius: 5,
                width:80,
              }}
              ><Text style={{textAlign:"center",color:"#fff",fontWeight:"bold"}}>ADD</Text></TouchableOpacity></View>
            
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
