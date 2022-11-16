import { Text, TextInput, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
const Searchbar = () => {
  return (
    <View style={{ marginTop: 10, }}>
      <View
       style={{
        backgroundColor: "transparent",
        borderWidth:1,
        borderColor:"#ccc",
        padding:10,
        display:"flex",
        flexDirection:"row",
        
      }}
      >
      <AntDesign name="search1" size={24} color="#C7C7C7"
      style={{
        marginLeft:10,

      }}
      />
        <TextInput
          placeholder="Search For More Packages"
          style={{
            marginLeft:10,
          }}
        />
      </View>
    </View>
  );
};

export default Searchbar;
