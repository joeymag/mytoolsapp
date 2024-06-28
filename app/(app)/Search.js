import { View, Text, Button, FlatList, StyleSheet, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../../firebassConfig';
import { useAuth } from '../context/AuthContext';



export default function Search() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { user } = useAuth();

    useEffect(() => {

        const fetchProducts = async () => {
    
          try {
    
            const q = query(collection(db, 'mytools'));
    
            const querySnapshot = await getDocs(q);
    
            const productData = querySnapshot.docs.map((doc) => ({
    
              id: doc.id,
    
              ...doc.data(),
    
            }));
    
            setProducts(productData);
    
          } catch (error) {
    
            console.error('Error fetching products:', error);
    
          }
    
        };
    
    
        fetchProducts();
    
      }, []);
    
    
      const handleSearch = async (text) => {
    
        setSearchTerm(text);
    
    
        try {
    
          const q = query(
    
            collection(db, 'mytools'),
    
            where('serial', '>=', text), // Search by name (case-insensitive)
    
            where('serial', '<=', text + '\uf8ff') // Case-insensitive search
    
          );
    
          const querySnapshot = await getDocs(q);
    
          const productData = querySnapshot.docs.map((doc) => ({
    
            id: doc.id,
    
            ...doc.data(),
    
          }));
    
          setProducts(productData);
    
        } catch (error) {
    
          console.error('Error searching products:', error);
    
        }
    
      };
    
    
    
    

    return (
        <View style={styles.container}>

            <TextInput

                style={styles.searchInput}

                placeholder="Search products..."

                onChangeText={handleSearch}

                value={searchTerm}

            />

<FlatList

data={products}

keyExtractor={(item) => item.id}

renderItem={({ item }) => (

  <View style={styles.productItem}>

    <Text style={styles.productName}>{item.brand}</Text>

    <Text style={styles.productDescription}>{item.serial}</Text>

  </View>


    
                    )}

            />

        </View>


    );

};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,

    },

    searchInput: {

        borderWidth: 1,

        borderColor: '#ccc',

        padding: 10,

        marginBottom: 10,

    },

    productItem: {
        flex: 1,

        padding: 10,

        borderBottomWidth: 1,

        borderBottomColor: '#ccc',

    },

    productName: {

        fontWeight: 'bold',


    },

    productDescription: {

        fontSize: 14,
        color: 'gray',

    },

});




