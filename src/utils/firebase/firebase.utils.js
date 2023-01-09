
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
//===observer===
    onAuthStateChanged
//=============
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    //===collection===
    collection,
    writeBatch,
    getDocs,
    query
    //===collection===
}from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBymQ6JPXV36mfcPczoS5bGBevDlwFbbxc",
  authDomain: "crwn-clothing-db-1054d.firebaseapp.com",
  projectId: "crwn-clothing-db-1054d",
  storageBucket: "crwn-clothing-db-1054d.appspot.com",
  messagingSenderId: "1030099182158",
  appId: "1:1030099182158:web:9e32ce609284538d55d91f"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth,provider);
export const db = getFirestore();
//===v1===
//export const createUserDocumentFromAuth = async (userAuth)=>{
//======
export const createUserDocumentFromAuth = async (userAuth,addionalInfo={})=>{
    if(!userAuth) return;
    // console.log(userAuth);
    const userDocRef = await doc(db,'users',userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createAt = new Date();

        try {
            //===v1===
            // await setDoc(userDocRef,{
            //     displayName,
            //     email,
            //     createAt
            // });
            //======
            await setDoc(userDocRef,{
                displayName,
                email,
                createAt,
                ...addionalInfo
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    return userDocRef;
}

//===collection===
export const addCollectionAndDocuments = async(collectionKey,objectsToAdd)=>{
    
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);
    
    objectsToAdd.forEach(object=>{
        // console.log(object.title.toLowerCase());
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    })
    try{
        await batch.commit();
        console.log('Batch is done');
    }catch(error){
        console.log(error);
    }
   
}
//===collection===

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email||!password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
}

export const singInAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email||!password) return;
    return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async()=> await signOut(auth);
//===state changer observer===
export const onAuthStateChangedListener = (callback)=>{
    onAuthStateChanged(auth,callback)
};
//============================


//===collection===
export const addCollectionAndDocuments = async(collectionKey,objectsToAdd)=>{
    
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);
    
    objectsToAdd.forEach(object=>{
        // console.log(object.title.toLowerCase());
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    })
    try{
        await batch.commit();
        console.log('Batch is done');
    }catch(error){
        console.log(error);
    }
   
}

export const getCategoriesAndDocuments = async()=>{
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef);

    const querySnapShot = await getDocs(q);
    const categoryMap = querySnapShot.docs.reduce((acc,snapShot)=>{
        const {title,items} = snapShot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    },{});

    return categoryMap;
}
//===collection===