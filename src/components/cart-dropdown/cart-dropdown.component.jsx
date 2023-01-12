
//===cart Items===
import {useContext} from 'react';
//=== v1 ===
import { CartContext } from '../../contexts/cart.context';
// === v1 ===
//===cart Items===
//===check out===
import { useNavigate } from 'react-router-dom';
//===check out===
//=== Cart redux ===
import {useSelector} from 'react-redux';
import {selectCartItems} from '../../store/cart/cart.selector';
import {selectIsCartOpen} from '../../store/cart/cart.selector';
import {selectCurrentUser} from '../../store/cart/cart.selector';
//=== Cart redux ===


import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';


import './cart-dropdown.styles.scss';

const CartDropdown = ()=>{
  
    //=== Cart redux ===
  //const {cartItems} = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    //=== Cart redux ===
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


