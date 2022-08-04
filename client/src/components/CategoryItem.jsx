
import { Link } from "react-router-dom";
import "../css/CategoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="category-container">
      <Link to={`/products/${item.cat}`}>
        <img alt="" className="category-image" src={item.img} />
        <div className="d-flex flex-column position-absolute category-info align-items-center justify-content-center">
          <div className="h1 category-title">{item.title}</div>
          <button className="btn category-button">ALIŞVERİŞE BAŞLA</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
