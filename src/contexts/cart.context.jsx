import { createContext, useState, useEffect } from 'react';

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
//=== checkout ===
const removeCartItem = (cartItems, cartItemToRmove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRmove.id
    );
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRmove.id)
    }
    return cartItems.map(cartItem => cartItem.id === cartItemToRmove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}
//=== checkout ===
//=== clear item ===
const claerCartItem = (cartItems,cartItemToClear)=>{
   return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}
//=== clear item ===

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart:()=>{},
    cartCount: 0,
    cartTotal:0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
//===cart Items===
    const [cartItems, setCartItems] = useState([]);
    //===cart count===
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])
    //===cart count===
     //===calc total===
     const [cartTotal, setCartTotal] = useState(0);
     useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => 
            total + cartItem.quantity * cartItem.price,0);
                           
        setCartTotal(newCartTotal);
    }, [cartItems])

     //===calc total===


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    //=== check out ====
    const removeItemFromCart = (cartItemToRmove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRmove));
    } 
    //=== check out ====
    //=== clear item ===
    const clearItemFromCart = (cartItemToClear)=>{
        setCartItems(claerCartItem(cartItems, cartItemToClear));
    }

    //=== clear item ===
//===cart Items===
    //===v1===
    //const value = { isCartOpen, setIsCartOpen };
    //===v1===
    // const value = { isCartOpen, setIsCartOpen,cartItems,addItemToCart};
    //===cart count===
    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        //=== check out ====
        removeItemFromCart,
        //=== check out ====
        //===clear cart item===
        clearItemFromCart,
        //===clear cart item===
        cartCount,
        //===calc total===
        cartTotal
        //===calc total===
    };
    //===cart count===

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
