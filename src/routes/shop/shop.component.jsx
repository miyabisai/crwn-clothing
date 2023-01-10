// import SHOP_DATA from '../../assets/shop-data.json';
import { useContext, Fragment } from 'react';
// import {ProductsContext} from '../../contexts/products.context';
import { CategoriesContext } from '../../contexts/categories.context.jsx';
import ProudctCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';

const Shop = () => {
    //=== categories===
    // const {products} = useContext(ProductsContext);
    const { categoriesMap } = useContext(CategoriesContext);
    // console.log("categoriesMap");
    console.log(categoriesMap);
    //=== categories===
    return (
       <Fragment>
       {
        Object.keys(categoriesMap).map(title=>(
            <Fragment key={title}>
                <h2>{title}</h2>
                <div className='products-container'>
                    {categoriesMap[title].map(product=>(
                        <ProudctCard key={product.id} product={product}>
                            <ProudctCard key={product.id} product={product}/>
                        </ProudctCard>
                    ))}
                </div>
            </Fragment>
        ))
       }
       
       </Fragment>
    )
}

export default Shop;