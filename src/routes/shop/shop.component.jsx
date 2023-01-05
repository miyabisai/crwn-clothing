// import SHOP_DATA from '../../assets/shop-data.json';
import { useContext } from 'react';
import {ProductsContext} from '../../contexts/products.context';

const Shop = ()=>{
    const {products} = useContext(ProductsContext);
    return(
        <div>
          {
            //===use json file===
            // SHOP_DATA.map(({id,name})=>(
            //  <div key={id}>
            //     {name}
            //  </div>
            // ))
            //=================
            //===use context===
            products.map(({id,name})=>(
                 <div key={id}>
                    {name}
                 </div>
            ))
            //=================
        }
        
        </div>
    )
}

export default Shop;