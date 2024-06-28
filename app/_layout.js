import { Slot, Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { AuthcontextProvider, useAuth } from './context/AuthContext';



const MainLayout = () => {
  const {isAuthenticated} = useAuth();
  const segment = useSegments();
  const router = useRouter();
 


  useEffect(() => {
    if(typeof isAuthenticated === 'undefined') return;
    const inApp = segment[0] === '(app)';
    if(isAuthenticated && !inApp) {
      router.replace('/(app)')
      

    }else if(isAuthenticated==false) {

       router.replace('/(Auth)')


    }
    
  }, [isAuthenticated])

  return <Slot/>
}






export default function RootLayout() {
  return(
    <AuthcontextProvider>
      <MainLayout />
    </AuthcontextProvider>
  )
}




