//===v1===
// import {useEffect} from 'react';
// import {getRedirectResult} from 'firebase/auth';

// import {
//     auth,
//     signInWithGooglePopup,
//     createUserDocumentFromAuth,
//     signInWithGoogleRedirect
// } from '../../utils/firebase/firebase.utils';
//======
import SingUpForm from '../../components/sign-up-form/sign-up-form.component';
import SingInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

const Authentication = ()=>{
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
    //======
    //===v3===
    // const logGoogleUser = async()=>{
    //    const {user} = await signInWithGooglePopup();
    //    const userDocRef = await createUserDocumentFromAuth(user);
    // }
    //======
    //===v1===
    // const logGoogleRedirectUser = async()=>{
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});
    //  }
    //======
    return(
        <div className='authentication-container'>
            {/*<h1>Sign In Page</h1>*}
            {/*<button onClick={logGoogleUser}>Sign in with Google Popup</button>*/}
            {/*<button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>*/}
            <SingInForm/>
           <SingUpForm/>
        </div>
    )
}

export default Authentication;