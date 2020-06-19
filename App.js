import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const [imageUrl, setImageUrl] = useState("https://reactnative.dev/docs/assets/p_cat2.png");
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image 
      source={{uri: imageUrl}}
      style={styles.image}
      />
      <Button
        onPress={()=>{

        }}
        title = "Power"
        />
      <Button
        onPress={()=>{

        }}
        title = "Temp +"
        />
      <Button
        onPress={()=>{

        }}
        title = "Temp -"
        />
      <Button
        onPress={()=>{

        }}
        title = "Mode"
        />
      <Button
        onPress={()=>{

        }}
        title = "Airflow"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  }
});
