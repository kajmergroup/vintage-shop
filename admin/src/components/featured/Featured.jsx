import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Link} from "react-router-dom"

const Featured = ({ data }) => {
  const products = data.sort((a,b)=> {return a.quantity - b.quantity})
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Less Leftover Products</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="bottom-header">
          <span className="bottom-header-item">ProductId</span>
          <span className="bottom-header-item">Product</span>
          <span className="bottom-header-item">Quantity</span>
          <span className="bottom-header-itemx"></span>
        </div>

        {products.map((product) => (
          <div className="bottom-content">
            <span className="bottom-content-item">{product._id}</span>
            <span className="bottom-content-item">{product.title}</span>
            <span className="bottom-content-item">{product.quantity}</span>
            <Link to={`/products/${product._id}`}>
            <button className="bottom-content-button">view</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
