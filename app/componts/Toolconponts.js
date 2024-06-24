import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image';
import { Checkbox } from 'react-native-paper';


export default function Toolconponts() {
    const [checked, setChecked] = useState(false);

  const handlePress = () => {
    console.log('pressed')
  }



  return (
    <Pressable onPress={handlePress}>
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