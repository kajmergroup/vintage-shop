import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import UserLastViews from "../components/User/UserLastViews";
import UserMenu from "../components/User/UserMenu.jsx";
import { userRequest } from "../requestMethods";

const UserLastViewsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getLastview = async () => {
      try {
        const res = await userRequest.get("lastviews");
        setProducts(res.data);
      } catch (err) {}
    };
    getLastview();
  }, []);

  const handleDelete = async () => {
    userRequest.delete("lastviews");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <UserMenu />
          </div>
          <div className="col-9">
            <div className="last-views">
              <div className="d-flex justify-content-between align-items-center last-views-header">
                <h6>Son Bakılan Ürünler</h6>
                <button onClick={handleDelete} className="btn-clear">
                  Temizle
                </button>
              </div>

              <div className="last-views-wrapper">
                <div className="last-views-list ">
                  {products.map((product) => (
                    <UserLastViews product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLastViewsPage;
