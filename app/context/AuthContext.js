import { createContext, useContext, useEffect, useState } from "react";
import { addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebassConfig";


export const AuthContext = createContext(undefined);

export const AuthcontextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user) {
                setIsAuthenticated(true);
                setUser(user);
                updateUserData(user.uid);
            }
            else {
                setIsAuthenticated(false);
                setUser(null);
            }
        });
        return unsub;
    }, []);

    const updateUserData = async (userId) => {
        const docRef = doc(db, "users", userId);
          const docSnap = await getDoc(docRef);
  
  
          if(docSnap.exists()) {
              let data = docSnap.data();
              setUser({...user, username: data.username, profileUrl: data.profileUrl, userId: data.userId});
          }
          else {
              console.log('No such document');
          }
      }

    const login = async(email, password) => {
        try {

        }catch(e){


        }
    }
  const logout = async() => {
        try {

        }catch(e){
            

        }
    }
    const register = async(email, password, userName, profileurl ) => {
        try {
            const responese = await createUserWithEmailAndPassword(auth, email, password);
            console.log('response.user', responese?.user);
            
            await setDoc(doc(db, "users", responese?.user?.uid), {
                email,
                userName,
                profileurl,
                userId: responese?.user?.uid
        });
        return {success: true, data: responese?.user }
    
    
        } catch (error) {
            return {success: false, msg: error.message};
            
        }
    }
    return (
        <AuthContext.Provider value={{user, isAuthenticated,  login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const value = useContext(AuthContext);
    if (value === undefined) {
        throw new Error('useAuth must be used within AuthContext');
    }
    return value;
}