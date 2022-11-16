import { ScrollView, View } from 'react-native'
import Searchbar  from "../components/commons/Searchbar"
import Card from '../components/packages/Card';
import PackageTabs from '../components/packages/PackageTabs';

const Membership = () => {
  return (
    <View>
      <Searchbar />
      <PackageTabs />
    
      <Card />

       </View>
  )
}

export default Membership