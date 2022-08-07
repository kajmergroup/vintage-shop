import "../../css/UserLastViews.css";

const UserLastViews = ({product}) => {
  return (
    <div className="last-view-product d-flex flex-column">
      <img
        className="last-view-product-img"
        alt=""
        src={product.img}
      />
      <span className="last-view-product-title">
        {product.name}
      </span>
      <label>Sepet Fiyatı</label>
      <span className="last-view-product-title">TL {product.price}</span>
      <div className="d-flex  align-items-center mt-2">
        <select className="last-view-product-select">
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <button className="last-view-product-button">Sepete Ekle</button>
      </div>
    </div>
  );
};

export default UserLastViews;
