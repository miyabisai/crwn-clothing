import { 
    createContext,
    useState,
    //=== collection===
    useEffect
    //=== collection ===
} from 'react';

//===v1===
//import PRODUCTS from '../../src/assets/shop-data.json';
//========
//=== collection====
// import SHOP_DATA from '../assets/shop-data';
import {
    addCollectionAndDocuments,
    getCategoriesAndDocuments
} from '../utils/firebase/firebase.utils';
//=== collection ====

export const ProductsContext = createContext({
    products:[]
});

export const ProductsProvider = ({children})=>{
    //===v1===
    //const [products,setProducts] = useState(PRODUCTS);
    //===v1===
    const [products,setProducts] = useState([]);
    //=== collection ====
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',products);
    // },[])
    useEffect(()=>{
        const getCategoriesMap = async()=>{
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }
        getCategoriesMap();
    },[]);

    //=== collection ===
    const value = {products};
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}
