// === v2 ===
// // import SHOP_DATA from '../../assets/shop-data.json';
// import { useContext, Fragment } from 'react';
// // import {ProductsContext} from '../../contexts/products.context';
// import { CategoriesContext } from '../../contexts/categories.context.jsx';

// import ProudctCard from '../../components/product-card/product-card.component';
// import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';
//=== v2 ===
import {Routes,Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.components';
import Category from '../category/category.component';
import './shop.styles.scss';
//=== categories redux ===
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/category.action';

//=== categories redux ===

const Shop = () => {
    //=== categories===
    // const {products} = useContext(ProductsContext);
    //===v2===
    // const { categoriesMap } = useContext(CategoriesContext);
    // console.log("categoriesMap");
    //console.log(categoriesMap);
    //===v2===
    //=== categories===
    //=== categories redux ====
    const dispatch = useDispatch();
    useEffect(()=>{
        const getCategoriesMap = async()=>{
            const categoryMap = await getCategoriesAndDocuments();
            const categoryMapPayload = setCategoriesMap(categoryMap);
            // console.log(categoryMapPayload);
            dispatch(categoryMapPayload);
        }
        getCategoriesMap();    
    },[]);

    //=== categories redux ===
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}></Route>
            <Route path= ":category" element={<Category/>}></Route>
        </Routes>
// === v2 ===
    //    <div className='shop-container'>
    //    {
    //     Object.keys(categoriesMap).map(title=>{
    //         const products = categoriesMap[title];
    //         return <CategoryPreview key={title} title={title} products={products}/>

    //     })
//=== v1 ===
        // Object.keys(categoriesMap).map(title=>(
        //     <Fragment key={title}>
        //         <h2>{title}</h2>
        //         <div className='products-container'>
        //             {categoriesMap[title].map(product=>(
        //                 <ProudctCard key={product.id} product={product}>
        //                     <ProudctCard key={product.id} product={product}/>
        //                 </ProudctCard>
        //             ))}
        //         </div>
        //     </Fragment>

        // ))
//=== v1 ===
    //    }
       
    //    </div>
// === v2 ===
    )
}

export default Shop;