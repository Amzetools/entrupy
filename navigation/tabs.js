import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Wallet from "../screens/Wallet";
import Membership from "../screens/Membership";
import Activity from "../screens/Activity";
import Cameras from "../screens/Camera";
import Search from "../screens/Search";
import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [tabStyles],
        headerStyle: {
          backgroundColor: "#389DA0",
        },
          headerLeft: () => (
          <View
            style={{
              marginLeft: 20,
            }}
          >
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={28} color="white" />
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Tab.Screen
        name="Membership"
        component={Membership}
        options={{
          tabBarBadge:"3",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={30}
              color={focused ? "#fff" : "#666666"}
            />
          ),
          headerTitle: () => (
            <View>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
                letterSpacing: 1,
              }}
            >
              Membership
            </Text>
            <Text
              style={{
                color: "#fff",
                letterSpacing: 1,
              }}
            >
              Choose The Best Deal
            </Text>
          </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="search1"
              size={30}
              color={focused ? "#fff" : "#666666"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Cameras}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 100,
                bottom: 2,
                width: 100,
                backgroundColor: "#222222",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 120,
              }}
              
            >
              <View
                style={{
                  backgroundColor: "#379A9D",
                  padding: 5,
                  borderRadius: 100,
                }}
              >
                <View
                  style={{
                    backgroundColor: "transparent",
                    padding: 10,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: "#fff",
                  }}
                >
                  <Ionicons
                    name="cloud-upload-outline"
                    size={30}
                    color={focused ? "#fff" : "#fff"}
                  />
                </View>
              </View>
            </View>
          ),

        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="navigate-circle-outline"
              size={30}
              color={focused ? "#fff" : "#666666"}
            />
          ),
          headerTitle: () => (
             <View>
              <Text style={{
                color:"white",
                fontSize:20,
              }}>Wallet Empty</Text>
             </View>
  )
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="menufold"
              size={29}
              color={focused ? "#fff" : "#666666"}
            />
          ),
          headerStyle: {
            backgroundColor:"#388A8D"
          },
          headerShadowVisible:false,
          headerTintColor:"#fff"
        }}
      />
    </Tab.Navigator>
  );
};

const tabStyles = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  elevation: 0,
  backgroundColor: "#222222",
  height: 70,
};
export default Tabs;
