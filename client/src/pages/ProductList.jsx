import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";



const ProductContainer = styled.div`
  width: 50%;
  margin: auto;
  padding: 10px;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

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

      <ProductContainer>
        <Title>Yeni Gelenler</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filtrele</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Renk</Option>
              <Option>Beyaz</Option>
              <Option>Yeşil</Option>
              <Option>Kırmızı</Option>
              <Option>Mavi</Option>
              <Option>Sarı</Option>
              <Option>Siyah</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Beden</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Ürünleri Sırala</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">En Yeniler</Option>
              <Option value="asc">Fiyat Artan</Option>
              <Option value="desc">Fiyat Azalan</Option>
            </Select>
          </Filter>
        </FilterContainer>

        <Products cat={cat} filters={filters} sort={sort} />
      </ProductContainer>

      <Footer />
    </>
  );
};

export default ProductList;
