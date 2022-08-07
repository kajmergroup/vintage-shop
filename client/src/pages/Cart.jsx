import { useSelector } from "react-redux";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { userRequest } from "../requestMethods";
import { useState } from "react";
import { useEffect } from "react";
import CartProduct from "../components/CartProduct";
import { Link } from "react-router-dom";
import "../css/CartPage.css";

const Cart = () => {
  const [products, setProducts] = useState([]);

  const [productQuantity, setProductQuantity] = useState();

  const user = useSelector((state) => state.user.currentUser);
  const id = user._id;

  const cartQuantity = products.length;

  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await userRequest.get("carts/find/" + id);

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
              {products ? products.map((product) => (
                <CartProduct
                  product={product}
                  setProductQuantity={setProductQuantity}
                />
              )) : <div>CART EMPTY</div>}
            </div>
            <div className="d-flex flex-column col-3">
              <Link to="/address" style={{ textDecoration: "none" }}>
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
              <Link to="/address" style={{ textDecoration: "none" }}>
                <button className="btn accept-buton mt-3 m-1">
                  SEPETİ ONAYLA
                </button>
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
