import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import  { useRef } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router'
import CustomKeybordviwe from '../componts/CustomKeybordviwe';
import { useAuth } from '../context/AuthContext';

export default function Signup() {

    const {register} = useAuth();
    const router = useRouter();


   const emailref = useRef("");
    const passwordref = useRef("");
    const confirmpasswordref = useRef("");
    const usernameref = useRef("");




    const HandleRegister = async () => {
        if(!emailref.current || !passwordref.current || !confirmpasswordref.current || !usernameref.current){
          alert('Please fill in all fields')
          return;
        }
         let responese = await register(emailref.current, passwordref.current, confirmpasswordref.current, usernameref.current,);
          if(responese.success){
            Alert.alert('Success', responese.msg);
          }
    
    
    
      }
    




  return (
      <View style={{padding:20}}>
          <View style={{alignItems:'center'}}>
             
                <Text style={{fontSize:30, color:'#1f41bb', marginVertical:30, fontWeight:'bold'}}>
                     Create Account
                </Text>
                <Text style={{fontSize:20, maxWidth:'80%', textAlign:'center', fontWeight:'600'}}>
                 Create an account so you can explore all the Social platform
                </Text>
          </View>
          <View style={{marginVertical:30}}>
              <TextInput 
              style={styles.textinputs} 
             placeholder='username'
             onChangeText={value => usernameref.current = value}

             
             />
              <TextInput
               style={styles.textinputs}
                placeholder='Email' 
                onChangeText={value => emailref.current = value}
                
                />
              <TextInput
               style={styles.textinputs} 
               placeholder='Password' 
                onChangeText={value => passwordref.current = value}
               
               />
              <TextInput 
              style={styles.textinputs} 
              placeholder='Confirm Password' 
                onChangeText={value => confirmpasswordref.current = value}
              
              />
          </View>
          <TouchableOpacity onPress={HandleRegister} style={{
              padding:20,
              marginVertical:10,
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
                    Sign up
                  </Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
                router.push('/')
                
            }} style={{
              padding:10}}>

              <Text style={{
                color:'#000',
                textAlign:'center',
                fontSize:14
              }}>
                Already have an account
              </Text>

          </TouchableOpacity>

         
      </View>   
  )
}

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