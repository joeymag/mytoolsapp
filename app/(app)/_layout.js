import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';


export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color }) =>   <AntDesign name="home" size={24} color="black" />,
      }}/>
      <Tabs.Screen name="Tools" options={{
        title: 'tools',
        tabBarIcon: ({ color }) =>   <Entypo name="tools" size={24} color="black" />,
      }}/>
      <Tabs.Screen name="Search" options={{
        title: 'Search',
        tabBarIcon: ({ color }) =>   <AntDesign name="search1" size={24} color="black" />,
      
      }}/>
     
    </Tabs>
  )
}