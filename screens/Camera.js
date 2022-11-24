import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
const Cameras = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
 <View style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
 <TouchableOpacity onPress={requestPermission} style={{backgroundColor:"#389DA0",width:200,padding:10,borderRadius:10,marginTop:10,display:"flex",justifyContent:"center"}}>
        <View><Text style={{textAlign:"center",fontWeight:'600',color:"white"}}>Grant Permission</Text></View>
       </TouchableOpacity>
 </View>
        {/* <Button onPress={requestPermission} title="grant permission" /> */}
      </View>
    );
  }
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  return (
    <View style={styles.container}>
    <Camera style={styles.camera} type={type}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor:"red"
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default Cameras