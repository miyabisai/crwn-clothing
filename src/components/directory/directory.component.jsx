// import CategoryItem from '../category-item/category-item.component';

import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = ({categories})=>{
    return(
        <div className='categories-container'>
        {
          categories.map((category)=>(
            // <CategoryItem key={category.id} category={category}/>
            <DirectoryItem key={category.id} category={category}/>
          ))
        }
        </div>

    )
}


export default Directory;