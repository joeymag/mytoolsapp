
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';



const firebaseConfig = {

  apiKey: "AIzaSyAbgqxSlU_IXxycPRn-cxXNJdbKrfV__yk",

  authDomain: "my-tool-vault.firebaseapp.com",

  projectId: "my-tool-vault",

  storageBucket: "my-tool-vault.appspot.com",

  messagingSenderId: "105337748363",

  appId: "1:105337748363:web:4b189a10189be9bc660d8e",

  measurementId: "G-62BSNCP8KB"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
    });

    export const db = getFirestore(app);

    export const userRef = collection(db, 'users');
    export const addtoolref = collection(db, 'mytools');
    export const ChatroomsRef = collection(db, 'Chatrooms');
    
