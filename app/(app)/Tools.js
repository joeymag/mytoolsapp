import { View, Text } from 'react-native'
import React from 'react'
import Toolconponts from '../componts/Toolconponts'
import FloatingButtion from '../componts/FloatingButtion'

export default function Tools() {
  return (
    <View style={{flex:1}}>
      <Toolconponts />
      <FloatingButtion/>
      
    </View>
    )
}