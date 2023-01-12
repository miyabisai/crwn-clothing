// import { useContext, useState, useEffect, Fragment } from 'react';
import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProudctCard from '../../components/product-card/product-card.component';
//=== categories reudx ====
// import { CategoriesContext } from '../../contexts/categories.context';
import { useSelector} from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
//==== categories redux ===
import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    //=== categories redux ===
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    //=== categories redux ===

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {
                    products && products.map(product => <ProudctCard key={product.id} product={product} />)
                }
            </div>
        </Fragment>
    )

}

export default Category;
