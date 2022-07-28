import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/favoriteRedux";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addFavorite({item}))
  }
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
        <FavoriteBorderIcon onClick={handleClick} />
      </div>

      <span>₺ {item.price}</span>
    </div>
  );
};

export default Product;
