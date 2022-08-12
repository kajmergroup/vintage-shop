import "./singleproduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/find/" + id
        );
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

 
  const PF = "http://localhost:5000/images/";

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Product Information</h1>
            <div className="item">
              <img src={PF + product.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle"></h1>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">{product.desc}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">{product.price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Quantity:</span>
                  <span className="itemValue">{product.quantity}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Colors:</span>
                  <span className="itemValue">{product.color}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Sizes:</span>
                  <span className="itemValue">{product.size}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Product Sales ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
