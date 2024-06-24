
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function FloatingButtion() {

    const handlePress = () => {
        router.push('(root)/');
    }



  return (
    <View style={{flex:1}}>
     <TouchableOpacity onPress={handlePress} style={styles.fab}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#1f41bb',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 20,
    bottom: 20,
    elevation: 8,
  },
})