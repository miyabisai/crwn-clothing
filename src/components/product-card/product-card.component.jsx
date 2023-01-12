
//=== cart redux ===
//=== cart item ===
// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
//====cart item ====
import {useDispatch,useSelector} from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

//=== cart redux ===

import Button from '../button/button.component';

import './product-card.styles.scss';


const ProudctCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    //=== cart redux ===
    //=== cart item ===
    // const { addItemToCart } = useContext(CartContext);
    // const addProductToCart = () => { addItemToCart(product) }
    //====cart item ====
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const addProductToCart = ()=> dispatch(addItemToCart(cartItems,product));
    //=== cart redux ===
    return (
        <div className='product-card-container' key={product.id}>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType="inverted"
                onClick={addProductToCart}
            >Add to cart</Button>
        </div>
    )

}

export default ProudctCard;
