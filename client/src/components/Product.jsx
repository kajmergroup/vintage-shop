import { Link } from "react-router-dom";
import "../css/Product.css";


const Product = ({ item }) => {



  return (
    <div className="col-3 mt-3">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        className="link"
        to={`/product/${item._id}`}
      >
        <img className="img-fluid" src={item.img} alt="" />
      </Link>
      <div className="d-flex justify-content-between">
        
        <Link
          to={`/product/${item._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="h6 font-weight-bold mt-3">{item.title}</div>
        </Link>

        <i class="fa-regular fa-heart mt-3"></i>
        
      </div>

      <span>₺ {item.price}</span>
    </div>
  );
};

export default Product;
