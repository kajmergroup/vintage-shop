
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../css/ProductList.css";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="m-3 h2">Yeni Gelenler</div>
        <div className="d-flex justify-content-between">
          <div className="m-3">
            <div className="d-flex">
              <div className="filter-text">Filtrele</div>
              <select className=" " name="color" onChange={handleFilters}>
                <option disabled>Renk</option>
                <option>Beyaz</option>
                <option>Yeşil</option>
                <option>Kırmızı</option>
                <option>Mavi</option>
                <option>Sarı</option>
                <option>Siyah</option>
              </select>
              <select className="" name="size" onChange={handleFilters}>
                <option disabled>Beden</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>

          <div className="m-3">
            <div className="d-flex">
              <div className="filter-text">Ürünleri Sırala</div>
              <select className="" onChange={(e) => setSort(e.target.value)}>
                <option value="newest">En Yeniler</option>
                <option value="asc">Fiyat Artan</option>
                <option value="desc">Fiyat Azalan</option>
              </select>
            </div>
          </div>
        </div>
        <div className="products">
          <Products cat={cat} filters={filters} sort={sort} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductList;
