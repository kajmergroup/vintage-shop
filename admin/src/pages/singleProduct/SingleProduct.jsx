import "./singleproduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import BarChar from "../../components/chart2/Chart2";
import Transactions from "../../components/transactions/Transactions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const id = params.id;
  const [query, setQuery] = useState("");
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState([]);
  console.log(query);

  useEffect(() => {
    const getOrders = async () => {
      const res = await axios.get("http://localhost:5000/api/products/" + id);
      setOrder(res.data);
    };
    getOrders();
  }, [id]);

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
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(
          query
            ? `http://localhost:5000/api/products/stats/${id}?query=${query}`
            : `http://localhost:5000/api/products/stats/${id}?query='last 6 months'`
        );
        setData(res.data);
      } catch (err) {}
    };
    getStats();
  }, [id, query]);

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
                <h1 className="itemTitle">{product.title}</h1>
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
            <BarChar
              title="Last 6 Months (Sales)"
              aspect={3 / 1}
              data={data}
              setQuery={setQuery}
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Transactions data={order} id={id} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
