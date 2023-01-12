//=== v1 ====
// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
//=== v1 ===
//=== cart redux ===
import {useSelector,useDispatch} from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart,clearItemFromCart,removeItemFromCart} from '../../store/cart/cart.action';
//=== cart redux ===

import './checkout-item.styles.scss';



const CheckOutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
  
//=== cart redux ===
    // const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const clearItemHandler = ()=>dispatch(clearItemFromCart(cartItems,cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems,cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem));
    //=== cart redux ===
    //=== v1 ===
    // const addItemHandler = () => addItemToCart(cartItem);
    // const removeItemHandler = () => removeItemFromCart(cartItem);
    //=== v1 ===

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
          <div className='remove-button' 
            onClick={clearItemHandler}
            // onClick={() => {
            //     clearItemFromCart(cartItem);}}
            >&#10005;</div>
        </div>
    )
}

export default CheckOutItem;