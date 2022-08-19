import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [leftover, setLeftover] = useState([])
  const totalOrder = orders.length
  const [user,setUser] = useState('')
  const earning = data.map(data => data.total)
  let sum = 0
  for (let i=0; i< earning.length; i++) {
    sum += earning[i] 
  }


  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:5000/api/orders/income");
      setData(res.data);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:5000/api/products/stats");
      setLeftover(res.data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getOrders = async () => {
      const res = await axios.get("http://localhost:5000/api/orders/");
      setOrders(res.data);
    };
    getOrders();
  }, []);
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("http://localhost:5000/api/users/stats");
      
      setUser(res.data[0].total);
    };
    getUsers();
  }, []);
  const x = data.sort(function (a, b) {
    if (a._id < b._id) return -1;
  });

  const newArr = data.map((obj) => {
    if (obj._id === 2) {
      return { ...obj, _id: "February" };
    } else if (obj._id === 3) {
      return { ...obj, _id: "March" };
    } else if (obj._id === 4) {
      return { ...obj, _id: "April" };
    } else if (obj._id === 5) {
      return { ...obj, _id: "May" };
    } else if (obj._id === 6) {
      return { ...obj, _id: "June" };
    } else if (obj._id === 7) {
      return { ...obj, _id: "July" };
    } else if (obj._id === 8) {
      return { ...obj, _id: "Agust" };
    }

    return obj;
  });

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" amount={user} />
          <Widget type="order" amount={totalOrder} />
          <Widget type="earning" amount={sum} />
          <Widget type="balance" amount={sum} />
        </div>
        <div className="charts">
          <Featured data={leftover} />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} data={newArr} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table data={orders} />
        </div>
      </div>
    </div>
  );
};

export default Home;
