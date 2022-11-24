import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Search = () => {
  return (
    <>
         
        <View
        style={{
          height: "100%",
          backgroundColor: "#389DA0",
        }}
      >
        <ScrollView>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 80,
              borderWidth: 4,
              borderColor: "#6DB0B1",
              width: 80,
              marginTop:20,
              borderRadius: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              zIndex: 1000,
            }}
          >
            <SimpleLineIcons name="user-follow" size={29} color="#388A8D" />
          </View>
          <View>
            <Text 
            style={{
             fontSize:30,
             color:"#fff",
             letterSpacing:1,
             marginTop:2,
             fontWeight:"600"

            }}
            >Danielle Rose</Text>
          </View>
          <View>
            <Text style={{color:"#fff",letterSpacing:1,fontWeight:"600",}}>@DANIELLEROSE</Text>
          </View>
          <View style={{marginTop:10,}}>
            <Text style={{color:"#fff",fontSize:15,textAlign:"center"}}>Food Lover From France, enthuasist</Text>
            <Text style={{color:"#fff",fontSize:15,textAlign:"center"}}>Traveller, and Cats Lover From France</Text>
            <Text style={{color:"#fff",fontSize:15,textAlign:"center"}}>Food Lover From France</Text>
          </View>
          <View
            style={{
              marginTop:20,
              height: 50,
              borderWidth: 4,
              borderColor: "#6DB0B1",
              width:50,
              borderRadius: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
            }}>
            <SimpleLineIcons name="user-follow" size={20} color="#388A8D" />

            </View>
            <View
            style={{
                    backgroundColor:"#348D90",
                    width:"100%",
                    height:80,
                    marginTop:20,
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                   }}
             >
                   <View style={{margin:20,textAlign:"center"}}>
                   <Text style={{textAlign:"center",fontSize:20,color:"white",fontWeight:"400"}}>10</Text>
                    <Text style={{textAlign:"center",color:"white"}}>VISITED</Text>
                   </View>
                   <View style={{margin:20,textAlign:"center"}}>
                   <Text style={{textAlign:"center",fontSize:20,color:"white",fontWeight:"400"}}>10</Text>
                    <Text style={{textAlign:"center",color:"white"}}>VISITED</Text>
                   </View>
                   <View style={{margin:20,textAlign:"center"}}>
                   <Text style={{textAlign:"center",fontSize:20,color:"white",fontWeight:"400"}}>10</Text>
                    <Text style={{textAlign:"center",color:"white"}}>VISITED</Text>
                   </View>
                   
            </View>
            
            <View style={{width:"100%",paddingTop:20,
            backgroundColor:"#eee"
            ,marginRight:20,marginLeft:20,display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
              <View><Text style={{fontSize:25,fontWeight:"700",marginTop:5,}}>VISITED</Text></View>
              <View style={{display:"flex",flexDirection:"row"}}>
                <TouchableOpacity style={{display:"flex",flexDirection:"row",
                borderWidth:2,borderColor:"#000",padding:10,borderRadius:50,
                justifyContent:"space-between"}}>
                  <View><TouchableOpacity><Text><AntDesign name="menuunfold" size={20} color="black" /></Text></TouchableOpacity></View>
                  <View><TouchableOpacity style={{marginLeft:20}}><MaterialCommunityIcons name="sort" size={20} color="black" /></TouchableOpacity></View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{
              height:300,
              width:"100%",
              backgroundColor:"#eee",
               display: "flex",
         
             alignItems: "center"
            }}>

              <View style={{width:"80%",marginTop:20,height:120,borderRadius:20,
              backgroundColor:"#fff",
              boxShadow:"5px 5px 6px 6px #ccc",
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-between",
            
              }}>

                <View style={{display:"flex",flexDirection:"row"}}>
                <Image source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.styleswardrobe.com%2Fwp-content%2Fuploads%2F2015%2F06%2FLouis-Vuitton-Bag-5.jpg&f=1&nofb=1&ipt=0a033b2883f946b818ea77100c561188c4fea02e4758fa999501ac9a9771ab63&ipo=images'}}
       style={{width: 100, height: 90,marginLeft:10,marginTop:15,borderRadius:10,}} />
                </View>
                <View style={{marginTop:15,}}>
                <Text style={{fontSize:16,marginRight:40,fontWeight:"300",color:"#389DA0"}}>PARADA</Text>
                  <Text style={{fontSize:20,marginRight:40,fontWeight:"800",color:"#000"}}>VERIFIED</Text>
                  <View style={{display:"flex",flexDirection:"row",marginTop:12,}}>
                  <Ionicons name="location-outline" size={17} color="#389DA0" />
                  <Text style={{color:"#389DA0",marginLeft:3,fontWeight:"400,"}}>London East , Uk</Text>
                  </View>
                  </View>
                <View style={{marginTop:20,marginRight:5,}}><Entypo name="dots-three-vertical" size={20} color="gray" /></View>
              </View>
            </View>
        
         
        </View>
        </ScrollView>
      </View>
     

    </>
  );
};

export default Search;
