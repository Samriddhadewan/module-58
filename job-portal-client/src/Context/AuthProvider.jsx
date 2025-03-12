import { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from '../firebase/firebase.init';


const AuthProvider = ( {children} ) => {
  
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user);
            console.log("state captured", user)
            setLoading(false)
        })

        return () => {
            unSubscribe();
        }
    },[])



    const authInfo = {
        setLoading,
        user,
        createUser
    }
  
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider