import { Add, Remove, Delete } from "@material-ui/icons";
import styled from "styled-components";
import { userRequest } from "../requestMethods";
import "../css/CartProduct.css";

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const CartProduct = ({ product, setProductQuantity, setTotal }) => {
  const id = product.productId;

  const deleteProduct = async () => {
    userRequest.delete("/carts/delete/" + id);
    setProductQuantity((product.quantity = 0));
  };

  const updateQuantity = async () => {
    const x = {
      x: "+",
    };
    try {
      await userRequest.put("/carts/" + id, x);
      setProductQuantity(product.quantity);
    } catch (err) {}
  };

  const updateQuantityy = async () => {
    const x = {
      x: "-",
    };
    try {
      userRequest.put("/carts/" + id, x);
      setProductQuantity(product.quantity);
    } catch (err) {}
  };

  return (
    <>
      <div className=" d-flex justify-content-between mb-3">
        <div className="d-flex product-info">
          <img alt="" className="img img-fluid" src={product.img} />
          <div className="d-flex flex-column justify-content-center p-3">
            <div className="d-flex m-1">
              <p>
                <strong>Ürün:</strong> {product.name}
              </p>
            </div>
            <div className="d-flex m-1">
              <p>
                {" "}
                <strong>Beden:</strong> {product.size}
              </p>
            </div>
            <div className="m-1">
              <ProductColor color={product.color} />
            </div>
          </div>
        </div>

        <div className="d-flex  align-items-center  justify-content-between w-25">
          <div className="d-flex align-items-center">
            <Add onClick={updateQuantity} />
            <span className="product-quantity">{product.quantity}</span>
            <Remove onClick={updateQuantityy} />
          </div>
          <div className="product-price d-flex align items center  ">
            <storng>₺</storng> {product.price * product.quantity}
          </div>
          <div className="delete-icon ">
            <Delete onClick={deleteProduct} />
          </div>
        </div>
      </div>
        <hr className="space"/>
      
      
    </>
  );
};

export default CartProduct;
