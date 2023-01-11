// import SHOP_DATA from '../../assets/shop-data.json';
// import { useContext,Fragment } from 'react';
import { Fragment } from 'react';
//=== categories redux ===
// import { CategoriesContext } from '../../contexts/categories.context.jsx';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector.js';
//=== categories redux ===
import CategoryPreview from '../../components/category-preview/category-preview.component';
// import './categories-preview.styles.scss';

const CategoriesPreview = () => {
    //=== categories redux ===
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    //=== categories redux ===
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }

        </Fragment>
    )
}

export default CategoriesPreview;