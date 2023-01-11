import {
    createContext,
//=== v1 state-->reducer ===
    useState,
//=== v1 ===
//===state changer observer===
    useEffect,
//============================
//=== reducer ====
    useReducer
//=== reducer ===
} from 'react';
//===state changer observer===
// import { onAuthStateChangedListener} from "../utils/firebase/firebase.utils";
//============================
//=== authentication listener ===
import { onAuthStateChangedListener,createUserDocumentFromAuth, signInWithGoogleRedirect} from "../utils/firebase/firebase.utils";
//=============

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null
}); 
//=== reducer ===
//=== redux ===
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER:'SET_CURRENT_USER'
}

const userReducer = (state,action)=>{
    const {type,payload} = action;
   switch(type){
       case USER_ACTION_TYPES.SET_CURRENT_USER:
           return{
               ...state,
               currentUser:payload
           }
        case 'increment':
            return{
                value:state.value+1
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer.`);
   }

}
const INITIAL_STATE = {
    currentUser:null
}
//=== redux ===

//=== reducer ===


export const UserProvider = ({children})=>{
//=== reducer ===
    // const [currentUser,setCurrentUser] = useState(null);
    const [{currentUser},dispatch] = useReducer(userReducer,INITIAL_STATE);
    
    console.log(currentUser);
    const setCurrentUser = user=>{
        dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER,payload:user});
    }
//=== reducer ===
    const value = {currentUser,setCurrentUser};
    //===state changer observer===
    //=== redux ===
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            //=== authentication listener ===
            // console.log(user);
            if(user){
               createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            //============
        });
        return unsubscribe;
    },[]);
    //=== redux === 
    //============================
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}