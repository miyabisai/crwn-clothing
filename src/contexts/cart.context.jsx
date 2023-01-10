import { createContext, useState, useEffect,useReducer } from 'react';

import { initializeApp } from "firebase/app";

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
const claerCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}
//=== clear item ===

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    cartTotal: 0
});

//===reducer===
//reducer only contain readable value.
const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const CART_ACTION_TYPES = {
    SET_CART_ITEMS:'SET_CART_ITEMS',
    SET_CART_OPEN:'SET_CART_OPEN'
}
const cartReducer = (state, action) => {
//const cartReducer = ({cartItems,isCartOpen,cartCount,cartTotal}, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_CART_OPEN:
            return{
                ...state,
                isCartOpen:payload
            }  
        default:
            throw new Error(`unhandled type of ${type} in cartReducer.`);
    }

}

//===reducer===
export const CartProvider = ({ children }) => {
    /* === v1 -->reducer ===
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
    === v1 -->reducer ===*/
    // === reducer ===
    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) =>
            total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) =>
            total + cartItem.quantity * cartItem.price, 0);

        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: {
                cartItems: newCartItems,
                cartTotal: newCartTotal,
                cartCount: newCartCount
            }
        });
    }
    const setIsCartOpen = (bool)=>{
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_OPEN,
            payload: bool
        });
    }
    // === reducer ===
    // const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const [{cartItems,isCartOpen,cartCount,cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const addItemToCart = (productToAdd) => {
        // setCartItems(addCartItem(cartItems, productToAdd));
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemReducer(newCartItems);
    }
    //=== check out ====
    const removeItemFromCart = (cartItemToRmove) => {
        // setCartItems(removeCartItem(cartItems, cartItemToRmove));
        const newCartItems = removeCartItem(cartItems, cartItemToRmove);
        updateCartItemReducer(newCartItems);
    }
    //=== check out ====
    //=== clear item ===
    const clearItemFromCart = (cartItemToClear) => {
        //setCartItems(claerCartItem(cartItems, cartItemToClear));
        const newCartItems = claerCartItem(cartItems, cartItemToClear);
        updateCartItemReducer(newCartItems);
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
        //setIsCartOpen,
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
