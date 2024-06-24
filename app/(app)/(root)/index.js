import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, DevToolsSettingsManager } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Image } from 'expo-image'
import DropDownPicker from '../../componts/DropDownPicker'
import { AntDesign } from "@expo/vector-icons";
import Brands from '../../../assets/Brands';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebassConfig';
import { Button } from 'react-native-paper';
import { CameraView, useCameraPermissions } from 'expo-camera';


//add a new tool

export default function index({ accessCamera}) {
  const { user } = useAuth()
  const [serail, setSerail] = useState('')
  const [type, setType] = useState('')

  let camera =useRef()
  const [hasPermission, requestPermission] = useState()
  const [hasmediaPermission, requestmediaPermission] = useState()

 useEffect(() => {
  (async () => {
   const cameraPermission = await accessCamera()
    requestPermission(cameraPermission)
    
  })()
   

 }, [])

  const addtools = async () => {
    try {
      const newDoc = await addDoc(collection(db, 'mytools'), {
        serail: serail,
        type: type,
      });
      console.log(newDoc.id)

    } catch (e) {
      console.log(e)
    }
  }




  return (
    <View style={styles.container}>
      <Text>creat a tool</Text>
       <ScrollView horizontal={true} >

       <CameraView style={styles.camera} facing={""}>
        <TouchableOpacity onPress={""}>
          <Image source={require('../../../assets/images/icon.png')} style={{ width: 300, height: 200 }} />
        </TouchableOpacity>
        </CameraView>

      </ScrollView>

        <Text>serail number:</Text>
        <TextInput
          onChangeText={serail}
          placeholder="Enter your name"
          style={styles.textinputs} />

        <Text>too type</Text>
        <TextInput
          onChangeText={type}
          placeholder="eg a dril " style={styles.textinputs} />

      <DropDownPicker
        data={Brands}
        onChange={console.log}
        placeholder="tool brand"
        style={{ width: 200, height: 60, flex: 1,     padding: 20,
        }}
      />

     <Button style={styles.buttion} onPress={addtools}>add tool</Button>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1,
    gap: 10,
  

  },

  buttion: {
    backgroundColor: 'blue',
    color: 'white',
    
   
  },
  textinputs: {
    fontSize:14,
    padding:20,
    backgroundColor:'f1f4ff',
    borderRadius:10,
    marginVertical:10,
    borderColor:'#c2c2c2',
    borderWidth:3,
  },
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
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
})