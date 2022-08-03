import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { userRequest } from "../requestMethods";
import { useState } from "react";
import { useEffect } from "react";
import CartProduct from "../components/CartProduct";
import { Link } from "react-router-dom";
import "../css/CartPage.css";

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const [productQuantity, setProductQuantity] = useState();

  const user = useSelector((state) => state.user.currentUser);
  const id = user._id;
  console.log(id)

  const cartQuantity = products.length;

  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await userRequest.get("carts/find/" + id);
        console.log(res);
        setProducts(res.data);
      } catch (err) {}
    };
    getCart();
  }, [productQuantity, id]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="wrapper w-100">
          <div className="h3 text-center">SEPETİM ({cartQuantity})Ürün</div>
          <div className="d-flex align-items-center justify-content-between p-2">
            <button className="btn top-button">ALIŞVERİŞE DEVAM ET</button>

            
          </div>
          <div className="d-flex justify-content-between">
            <div className="col-9">
              {products.map((product) => (
                <CartProduct
                  product={product}
                  setProductQuantity={setProductQuantity}
                />
              ))}
            </div>
            <div className="d-flex flex-column col-3">
            <Link to="/address" style={{textDecoration: 'none'}}>
                <button className="btn accept-buton mb-3">SEPETİ ONAYLA</button>
              </Link>
              <div className="summary">
                
              <div className="h3 text-center">SİPARİŞ ÖZETİ</div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Ürünün Toplamı</span>
                <strong> ₺</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Kargo Toplamı</span>
                <strong> ₺</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Kargo İndirimi</span>
                <strong> ₺</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="summary-total"> TOPLAM</span>
                <strong> ₺</strong>
              </div>
              </div>
              <Link to="/address" style={{textDecoration: 'none'}}>
                <button className="btn accept-buton mt-3 m-1">SEPETİ ONAYLA</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
