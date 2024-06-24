import { View, Text, StyleSheet, Modal, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { router } from 'expo-router';

export default function PopUp() {

    const [isviable, setIsviable] = useState(false);

    const report = () => {
        router.push('/Toolreport')
    }



    return (
        <View style={styles.Modalcontainers}>
            <TouchableOpacity onPress={() => setIsviable(true)} style={styles.Button}>
                <Text style={styles.butions}>Open Modal</Text>
            </TouchableOpacity>
            <Modal visible={isviable} animationType='slide' transparent={true} >
                <View style={styles.con}>

                    <Text>you're about to report your tools as stolen one this is done the serial numbers and pic will be available to the public
                        and police if they search your serial number are
                        Are you sure you want to continue? </Text>



                    <View style={styles.cons}>
                        <Text onPress={report} style={styles.buttion}   >Yes</Text>
                        <Text onPress={() => setIsviable(false)} style={styles.buttion2}  >No</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    Modalcontainers: {
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
       




    },
    con: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "lightgrey",
        maxWidth: 300,
        maxHeight: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        position: 'absolute',    
        flex: 1,
        bottom: "40%",
        right: "15%",
        



    },
    cons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,


    },
    buttion: {
        backgroundColor: 'green',
        padding: 5,
        width: 100,
        color: 'white',
        borderRadius: 5,
        margin: 10,
        textAlign: 'center',


    },
    buttion2: {
        backgroundColor: 'red',
        padding: 5,
        width: 100,
        color: 'white',
        borderRadius: 5,
        margin: 10,
        textAlign: 'center',
    },
    butions: {
        backgroundColor: 'blue',
        padding: 10,
        width: 350,
        height: 50,
        borderRadius: 25,
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },

})
