// import {useState} from 'react';
//===Use Context===
import { useState,useContext } from 'react';
//=================
import { 
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
 //=== authentication listener ===
//import { UserContext } from '../../contexts/user.context';
//================================

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SingUpForm = ()=>{
    const [formFields,setFormFields] = useState(defaultFormFields);
    const  {displayName,email,password,confirmPassword} = formFields;

    //=== Use Context===
    //=== authentication listener ===
    // const {setCurrentUser} = useContext(UserContext);
    //========
    //==================

    const handleChange = (event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    }
    // console.log(formFields);

    const restFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
             //=== Use Context===
             //=== authentication listener ===
            // setCurrentUser(user);
            //=== authentication listener ===
            //==================
            await createUserDocumentFromAuth(user,{displayName});
            restFormFields();
        }catch(error){
            if(error.code ==="auth/email-already-in-use"){
                alert("Cannot create user,email already in use.");
            }
            console.log(error.message);
            throw error;
        }
        
    }
    return(
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />      
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
                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />        
                {/*<button type="submit">Sign Up</button>*/}
                <Button buttonType="default" type="submit">Sign Up</Button>
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

export default SingUpForm;