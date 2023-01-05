import {Routes,Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
//=== v1 ===
// import SignIn from './routes/sign-in/sign-in.component';
//======
import Authentication from './routes/authentication/authentication.component';

//===Shop component ====
// const Shop = ()=>{
//   return <h1>I am the shop page</h1>
// }
//========
const App = ()=>{
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
      {/*<Route path='/home' element={<Home/>}/>*/}
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        {/*
          ===v1===
        <Route path='sign-in' element={<SignIn/>}/>
          ======
      */}
        <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  )
}

export default App;