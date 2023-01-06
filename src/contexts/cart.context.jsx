import { createContext, useState,useEffect } from 'react';

//===cart Items===
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};
//===cart Items===

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount:0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    //===cart Items===
    const[cartItems, setCartItems] = useState([]);
    //===cart count===
    const[cartCount, setCartCount] = useState(0);
    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    },[cartItems])
    //===cart count===
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    //===cart Items===
    //===v1===
    //const value = { isCartOpen, setIsCartOpen };
    //===v1===
    // const value = { isCartOpen, setIsCartOpen,cartItems,addItemToCart};
    //===cart count===
    const value = { isCartOpen, setIsCartOpen,cartItems,addItemToCart,cartCount};
    //===cart count===

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
