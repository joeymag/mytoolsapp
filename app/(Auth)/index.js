import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import CustomKeybordviwe from '../componts/CustomKeybordviwe';


export default function Signin() {
  return (
    <View style={{padding:20}}>
        <View style={{alignItems:'center'}}>
              <Image
              style={{height: 100}}
              resizeMode="contain"
              source={require('../../assets/images/icon.png')} />
              <Text style={{fontSize:30, color:'#1f41bb', marginVertical:30, fontWeight:'bold'}}>
                    Login Here
              </Text>
              <Text style={{fontSize:24, maxWidth:'60%', textAlign:'center', fontWeight:'600'}}>
                Welcome back you've been missed!
              </Text>
        </View>
        <View style={{marginVertical:30}}>
            <TextInput style={styles.textinputs}  placeholder='Email' />
            <TextInput style={styles.textinputs}  placeholder='Password' />
        </View>

        <View>
            <Text style={{
              fontSize:14,
              color:'#1f41bb',
              alignSelf:'flex-end'
            }}>
              Forgot your password ?
            </Text>
        </View>
        <TouchableOpacity style={{
            padding:20,
            marginVertical:30,
            backgroundColor: '#1F41BB',
            borderRadius: 10,
            shadowColor: '#1f41bb',
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 0.3,
            shadowRadius: 10}}>

                <Text style={{
                  color:'#fff',
                  textAlign:'center',
                  fontSize:20
                }}>
                  Sign in
                </Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            router.push('Signup')
            }} style={{
            padding:10}}>

                <Text style={{
                  color:'#000',
                  textAlign:'center',
                  fontSize:14
                }}>
                 Create new account
                </Text>

        </TouchableOpacity>

       
    </View>   
);
};

const styles = StyleSheet.create({
   textinputs: {
        fontSize:14,
        padding:20,
        backgroundColor:'f1f4ff',
        borderRadius:10,
        marginVertical:10,
        borderColor:'#c2c2c2',
        borderWidth:3,
      },
})
