import {useState} from 'react';
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    singInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email:'',
    password:'',
}

const SingInForm = ()=>{
    const [formFields,setFormFields] = useState(defaultFormFields);
    const  {email,password} = formFields;

    const handleChange = (event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    }
    const restFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const singInWithGoogle = async()=>{
       const {user} = await signInWithGooglePopup();
       await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
            const response = await singInAuthUserWithEmailAndPassword(email,password);
            console.log(response);
            restFormFields();
        }catch(error){
            if(error.code === "auth/user-not-found"){
                alert("User not found.");
            }
            if(error.code === "auth/wrong-password"){
                alert("incorrect password.");
            }
            console.log(error);
            throw error;
        }
        
    }
    return(
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />      
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />       
                {/*<button type="submit">Sign Up</button>*/}
                <div className='button-container'>
                    <Button  type="submit">Sign In</Button>
                    <Button buttonType="google" type="button" onClick={singInWithGoogle}>Google Sign In</Button>
                </div>
                    
            </form>
    {/* ===v1===
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email}/>
                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password}/>
                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <button type="submit">Sign Up</button>
            </form>
        ======
    */}
        </div>
    )
}

export default SingInForm;