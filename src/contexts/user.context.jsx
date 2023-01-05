import {
    createContext,
    useState,
//===state changer observer===
    useEffect
//============================
} from 'react';
//===state changer observer===
// import { onAuthStateChangedListener} from "../utils/firebase/firebase.utils";
//============================
//=== authentication listener ===
import { onAuthStateChangedListener,createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";
//=============

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null
}); 

export const UserProvider = ({children})=>{
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};

    //===state changer observer===
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            //=== authentication listener ===
            console.log(user);
            if(user){
               createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            //============
        });
        return unsubscribe;
    },[]);
    //============================
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}