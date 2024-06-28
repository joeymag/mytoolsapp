import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image';
import { Checkbox } from 'react-native-paper';
import { useAuth } from '../context/AuthContext';
import { collection, doc, getDoc, } from 'firebase/firestore';
import { db } from '../../firebassConfig';


export default function Toolconponts() {
    const [checked, setChecked] = useState(false);
    const user = useAuth()
    const userDocRef = doc(db, 'users', user.uid);
  

    
    

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const myToolsDocRef = doc(collection, 'usertools', user.uid);
                const docSnap = await getDoc(myToolsDocRef);
                if(docSnap.exists()) {
                    let data = docSnap.data();
                    console.log(data);
    
                }
                else {
                    console.log('No such document');
                }
    
            } catch (error) {
                console.error('Error fetching products:', error);
            }
    
        };
        fetchProducts();
    
    
    }, []);


    





  return (
    <Pressable onPress={""}>
    <View style={styles.maincontainer}>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
      <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/icon.png')}        
      />
      <View style={{flexDirection:"column", margin: 5,}}>
      <View style={styles.row}>
      <Text>make: dewolt</Text>
      <Text>type: drill</Text>
      <Text>serail: 1234</Text>
      </View>
      <View style={styles.col}>
        <Text>status: green</Text>
      </View>
      </View>
      </View>
      


      
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  maincontainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  col: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  }

})