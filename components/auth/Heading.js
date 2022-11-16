import {View , Text} from "react-native"

export default function Heading ({headingTitle}) {
    return (
  <View style={{
    marginTop:20,
    boxShadow:"10px 10px 10px #000000",
    margin:20,
  }}>
      <Text style={{
        color:"#F9FCF6",
        fontSize:30,
        fontWeight:"bold",
        textShadowColor:"red"
      }}>{headingTitle}</Text>
      <View style={{
        padding:2,
        backgroundColor:"#8EB5BA",
        width:30,
        marginTop:10,
      }}></View>
  </View>

    )
}