// import SHOP_DATA from '../../assets/shop-data.json';
import { useContext } from 'react';
import {ProductsContext} from '../../contexts/products.context';
import ProudctCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop = ()=>{
    const {products} = useContext(ProductsContext);
    return(
        <div className='products-container'>
          {
            //===use json file===
            // SHOP_DATA.map(({id,name})=>(
            //  <div key={id}>
            //     {name}
            //  </div>
            // ))
            //=================
            //===use context===
            products.map((product)=>(
                <ProudctCard key={product.id} product={product}></ProudctCard>
                //=====v1=====
                //  <div key={id}>
                //     {name}
                //  </div>
                //===========
            ))
            //=================
        }
        
        </div>
    )
}

export default Shop;