import {Routes,Route} from 'react-router-dom';
//=== redux ====
import {useEffect} from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from './utils/firebase/firebase.utils';
//=== redux ===
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
//=== v1 ===
// import SignIn from './routes/sign-in/sign-in.component';
//======
import Authentication from './routes/authentication/authentication.component';

//=== redux ===
import {setCurrentUser} from './store/user/user.action';
import {useDispatch} from 'react-redux';
//=== redux ===

//===Shop component ====
// const Shop = ()=>{
//   return <h1>I am the shop page</h1>
// }
//========
const App = ()=>{
//===redux ===
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((user)=>{
        //=== authentication listener ===
        // console.log(user);
        if(user){
           createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
        //============
    });
    return unsubscribe;
},[]);  
//=== redux ===
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
      {/*<Route path='/home' element={<Home/>}/>*/}
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        {/*
          ===v1===
        <Route path='sign-in' element={<SignIn/>}/>
          ======
      */}
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;