// import {useEffect} from 'react';
import {getRedirectResult} from 'firebase/auth';

import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils';

import SingUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = ()=>{
    //===v2===
    // useEffect(()=>{
    //    async function fetchDate(){
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if(!!response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //    }
    //    fetchDate();
    // },[]);
    //====
    const logGoogleUser = async()=>{
       const {user} = await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user);
    }
    //===v1===
    // const logGoogleRedirectUser = async()=>{
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});
    //  }
    //======
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            {/*<button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>*/}
            <SingUpForm/>
        </div>
    )
}

export default SignIn;