import { Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
const Wallet = () => {
  return (
    <View style={{display:"flex",justifyContent:"space-between"}}>
      <View style={{display:"flex",
       justifyContent:"center",
       alignItems: "center",
       top:20,
    }}>
        <Text style={{color:"#686F8D",fontSize:20,letterSpacing:1,}}>Your Wallet Is Empty</Text>
        <Text style={{marginTop:3,}}>$ 0.00</Text>
      </View>
     <View style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
     }}>
      <View  style={{display:"flex",
       justifyContent:"center",
       alignItems: "center",
       top:100,
    }}>
        <Entypo name="wallet" size={100} color="#388A8D" />
        <Text style={{color:"#388A8D",fontSize:20,}}>Transactions Not Found</Text>
        <Text>Your transacation will appear here</Text>
      </View>

     </View>

    </View>
  )
}

export default Wallet