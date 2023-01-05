import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//====Provider====
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';
//================
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//===v1===
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
///======
root.render(
  <React.StrictMode>
    {/*===set router===*/}
    <BrowserRouter>
      {/*===set provider====*/}
      <UserProvider>
        <ProductsProvider>´
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
      {/*===set provider====*/}
    </BrowserRouter>
    {/*===set router===*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
