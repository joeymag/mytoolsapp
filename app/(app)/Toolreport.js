import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import Toolconponts from '../componts/Toolconponts';
import Listoftools from '../../assets/Listoftools';
import * as Location from 'expo-location';
import { db } from '../../firebassConfig';
import { collection, collectionGroup, getDocs, query, where } from 'firebase/firestore'; // Import collection from 'firebase/firestore'
import { useAuth } from '../context/AuthContext';

export default function Toolreport() {


  const [location, setLocation] = useState(null);
  const [isslected, setIsslected] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [toolList, setToolList] = useState([]);
  const { user } = useAuth()
  const mycurruser = user;



  useEffect(() => {
    if(user?.uid) 
      {
    fetchProduct();
      }
    
  }, []);

  console.log()

    const fetchProduct = async () => {
      try {
        const userToolsRef = collection(db, `users/${user.uid}/usertools`)
         const querySnap = await getDocs(userToolsRef);
        const items = [];
        querySnap.forEach((doc) => {
          console.log("path is:", userToolsRef.path);
          items.push(doc.data());
        });
        console.log("path is:", userToolsRef.path);
        setToolList(items);

  }
  catch (error) {
    console.log(error)
  }
}

    




  // get user geo location

  // submit tool list of tools and user location to the database then be shown on the map

 const getuserlocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  const submit = async () => {
    try {
      await addDoc(collection(firebasse_DB, "business"), {
        addresss,
        bussinesname,
        phone,
       
      });
        const location = await Location.getCurrentPositionAsync({});
        setaddresss(location);
    }
    catch (error) {
      console.log(error)
    }
  }




  return (
    <View>
    <Button title="Submit" onPress={submit} />


    </View>
  )
}