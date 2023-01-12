import { Link } from "react-router-dom";
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, id } = category;
  return (

    <div className='direcotry-item-container' key={id}>

      <div className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <Link to={`shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>

    </div>
  )
}

export default DirectoryItem;