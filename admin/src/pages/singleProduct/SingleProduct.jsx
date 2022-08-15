import "./singleproduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Transactions from "../../components/transactions/Transactions";
import { useEffect , useState   } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



const data = [
  { _id: "January", total: 1200 },
  { _id: "February", total: 2100 },
  { _id: "March", total: 800 },
  { _id: "April", total: 1600 },
  { _id: "May", total: 900 },
  { _id: "June", total: 1700 },
  { _id: "July", total: 300 },
];
const SingleProduct = () => {
  const params = useParams();
  const id = params.id

  const [product, setProduct] = useState({});
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const res = await axios.get("http://localhost:5000/api/products/stats/" + id);
      setOrder(res.data);
    };
    getOrders();
  }, [id]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/find/" + id)
        setProduct(res.data);
      } catch (err) {}
    }
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
          <Chart title="Last 6 Months (Revenue)" aspect={3 / 1} data={data} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
            <Transactions data={order} id={id}/>
        </div>
      </div>
    </div>
  
  );
};

export default SingleProduct;
