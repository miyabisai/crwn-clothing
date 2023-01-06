//=== cart item ===
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
//====cart item ====

import Button from '../button/button.component';

import './product-card.styles.scss';


const ProudctCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    //=== cart item ===
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => { addItemToCart(product) }
    //====cart item ====

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
