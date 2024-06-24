import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebassConfig';

export default function Search() {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        HandleSearch("dewalt");
    }
    , []);
    
  
    
     const HandleSearch = async (brand) => {
            const q = query(collection(db, "mytools"), where("brand", "==", brand));
            const querySnapshot = await getDocs(q);
    
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
        }
    
        
         return (
                <><View>
                                 <Searchbar
                                     placeholder="Search"
                                     onChangeText={(text) => HandleSearch(text)}
                                     value={""} />
                
                
                
                             </View>
                             <View style={{}}>
                                     <FlatList
                                         data={searchResults}
                                         renderItem={({ item }) => (
                                             <View>
                                                 <Text>{item.brand}</Text>
                                                 <Text>{item.serail}</Text>
                                             </View>
                                         )} />
                                 </View></>
            )
    
    
     
    }