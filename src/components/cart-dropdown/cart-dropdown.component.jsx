
//===cart Items===
import {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';
//===cart Items===

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';


import './cart-dropdown.styles.scss';

const CartDropdown = ()=>{
    const {cartItems} = useContext(CartContext);
    //console.log(cartItems);
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {cartItems.map((item,idx)=>(<CartItem key={idx} cartItem={item}/>))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )

}

export default CartDropdown;


