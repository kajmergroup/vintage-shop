import { useEffect, useState } from "react";

import Product from "./Product";
import axios from "axios";



const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {}
    };
    fetchProducts();
  }, []);

  return (
    <div className="row m-2">
      {products.slice(0,4).map((item)=>(
        <Product item={item}/>
      )) }
    </div>
  );
};

export default HomeProducts;
