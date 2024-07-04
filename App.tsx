/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';




function App(): JSX.Element{
  const [randomBGColor, setRandomBGColor] = useState("#ffffff");
  const [statusColor, setStatusColor] = useState('#ffffff');
  const generateColor = () =>{
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    let color2 = "#";   

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random()*16)];
    
  }
  setRandomBGColor(color);
    for (let j = 0; j < 6; j++) {
      color2 += hexRange[Math.floor(Math.random()*16)]
  
    }
    setStatusColor(color2);
  // console.log(color);
 
  } 
  return (
    <><StatusBar backgroundColor={statusColor} />
    <View style={[styles.container, {backgroundColor:randomBGColor}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnText} >Press me</Text>
        </View>
      </TouchableOpacity>
    </View></>
  );

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  actionBtn:{
    borderRadius:10,
    backgroundColor: "#6A1B4D",
    paddingVertical:10,
    paddingHorizontal:40,
  
  },
  actionBtnText:{
    fontSize:24,
    color:'#FFFFFF',
    textTransform:'uppercase',
  }
});

export default App;
