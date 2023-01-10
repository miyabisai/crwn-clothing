// import SHOP_DATA from '../../assets/shop-data.json';
import { useContext,Fragment } from 'react';
// import {ProductsContext} from '../../contexts/products.context';
import { CategoriesContext } from '../../contexts/products.context.jsx';
import ProudctCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';
import { enhanceManualRouteObjects } from 'react-router/dist/lib/components';

const Shop = ()=>{
    //=== categories===
    // const {products} = useContext(ProductsContext);
    const {categoriesMap} = useContext(CategoriesContext);
    //=== categories===
    return(
    <Fragment>
    {
        {
            Object.keys(categoriesMap).map(title=>{
                <Fragment>
                    <h2>{title}</h2>
                </Fragment>
            })
        }
    }
    
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
            //=== categoreis ===
           // products.map((product)=>(
                //<ProudctCard key={product.id} product={product}></ProudctCard>
                //=====v1=====
                //  <div key={id}>
                //     {name}
                //  </div>
                //===========
            //))
            //=== categories ===
            //=================
        }
        
        </div>
        </Fragment>
    )
}

export default Shop;