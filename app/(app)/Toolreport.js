import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import Toolconponts from '../componts/Toolconponts';
import Listoftools from '../../assets/Listoftools';
import * as Location from 'expo-location';
import { db } from '../../firebassConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

export default function Toolreport({}) {


  const [location, setLocation] = useState(null);
  const [isslected, setIsslected] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const { user } = useAuth()

  // user location
  useEffect(() => {
    getusertools()
      
    }, []);

  

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location

    );
  }

  



  // list of user tools
  const getusertools = async () => {
    const q = query(collection(db, "users"), where("user", "==", user.user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
     
  
    }







  return (
    <View>
      {isslected ? <Text>selected</Text> : <Text>not selected</Text>}
      <FlatList
        data={Listoftools}
        renderItem={({ item }) => <Toolconponts {...item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}