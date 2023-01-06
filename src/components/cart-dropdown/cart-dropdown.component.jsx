
//===cart Items===
import {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';
//===cart Items===
//===check out===
import { useNavigate } from 'react-router-dom';
//===check out===

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';


import './cart-dropdown.styles.scss';

const CartDropdown = ()=>{
    const {cartItems} = useContext(CartContext);
    //console.log(cartItems);
    //===check out===
    const navigate = useNavigate();
    const goToCheckoutHandler = ()=>{
        navigate('/checkout');
    }
    //===check out===
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {cartItems.map((item,idx)=>(<CartItem key={idx} cartItem={item}/>))}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )

}

export default CartDropdown;


