import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) => (
    { type: CART_ACTION_TYPES.SET_CART_OPEN, payload: boolean }
);

export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    // updateCartItemReducer(newCartItems);
    return  { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems }
}
export const removeItemFromCart = (cartItems,cartItemToRmove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRmove);
    //updateCartItemReducer(newCartItems);
    return  { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems }
}
export const clearItemFromCart = (cartItems,cartItemToClear) => {
    const newCartItems = claerCartItem(cartItems, cartItemToClear);
    //updateCartItemReducer(newCartItems);
    return  { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems }
}

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

const claerCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

