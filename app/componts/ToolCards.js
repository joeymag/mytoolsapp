import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import toolslist from '../../assets/toolslist'

export default function ToolCards({
  toolitem
}) {
  return (
    <View style={Styles.main}>
        <Image source={toolitem.imag} style={{width: 150, height: 150}}/>
        <Text>location: borehamwood</Text>
        <Text>date: 20/20/2024 </Text>
        <Text>toolvalue:{toolitem.toolvalue}</Text>
        

     
    </View>
  )
}

const Styles = StyleSheet.create({ 
    
        main: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            gap: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            margin: 10,
            shadowColor: "#000",
            backgroundColor: 'lightgrey',
            

            
        },

    
        
})