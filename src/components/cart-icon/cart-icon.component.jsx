import { useContext } from 'react';
//=== cart redux ===
import { CartContext } from '../../contexts/cart.context';
import {useDispatch,useSelector} from 'react-redux';
import { selectCartCount,selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen} from '../../store/cart/cart.action';
//=== cart redux ===

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
    //=== v1 ===
    // const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    //=== v1 ===
    // === cart redux === 
    //const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    const toggleIsCartOpen = ()=>dispatch(setIsCartOpen(!isCartOpen));
    // === cart redux === 
    return (
        <div className='cart-icon-container'
        onClick = {toggleIsCartOpen}
            //onClick={() => setIsCartOpen(!isCartOpen)}
        >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;