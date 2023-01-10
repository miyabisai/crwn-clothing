import ProudctCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

const CategoryPreview = ({title,products})=>{
    return(
        <div className='category-preview-container'>
            <h2>
                <span className='title'>{title.toUpperCase()}</span>
            </h2>
            <div>
                <div className='preview'>
                    {
                        products.filter((_,idx)=>(idx<4))
                        .map(product=>(
                            <ProudctCard 
                                key={product.id} 
                                product={product}
                            />
                        ))              
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryPreview;