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

//=== categories ===
// export const ProductsContext = createContext({
//     products:[]
// });
export const CategoriesContext = createContext({
    categoriesMap:[]
});

//=== categories ===
//===v1===
//export const ProductsProvider = ({children})=>{
//===v1===
export const CategoriesProvider = ({children})=>{
    //===v1===
    //const [products,setProducts] = useState(PRODUCTS);
    //===v1===
 //=== categories ===
    //===v2===
    // const [products,setProducts] = useState([]);
    //===v2===
    const [categoriesMap,setCategoriesMap] = useState({});
//=== categories ===
    //=== collection ====
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',products);
    // },[])
    useEffect(()=>{
        const getCategoriesMap = async()=>{
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();    
    },[]);

    //=== collection ===
    //=== categories ===
    //const value = {products};
    const value = {categoriesMap};

    //=== categories ===
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
        //<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}
