import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { userRequest } from "../requestMethods";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inputtitle = styled.h4`
  margin-top: 5px;
  font-weight: 300;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &disabled: {
    color: green;
    cursor: not-allowed;
  }
`;

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [categories, setCategories] = useState("");
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [price, setPrice] = useState("");
  

  const handleClick = async (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      desc,
      img,
      categories,
      size,
      color,
      price,
      
    };
    try {
       await userRequest.post("/products",newProduct)
    }catch(err){}
  }

  return (
    <Container>
      <Wrapper>
        <Title>Ürün Ekle</Title>
        <Form>
          <Inputtitle>Ürün Adı</Inputtitle>
          <Input onChange={(e) => setTitle(e.target.value)} />
          <Inputtitle>Ürün Açıklaması</Inputtitle>
          <Input onChange={(e) => setDesc(e.target.value)} />
          <Inputtitle>Ürün Fotoğrafının URL</Inputtitle>
          <Input onChange={(e) => setImg(e.target.value)} />
          <Inputtitle>Kategori</Inputtitle>
          <Input onChange={(e) => setCategories(e.target.value)} />
          <Inputtitle>Beden</Inputtitle>
          <Input onChange={(e) => setSize(e.target.value.split(","))} />
          <Inputtitle>Renk</Inputtitle>
          <Input onChange={(e) => setColor(e.target.value.split(","))} />
          <Inputtitle>Fiyat</Inputtitle>
          <Input onChange={(e) => setPrice(e.target.value)} />
          <Button onClick={handleClick}>ÜRÜN EKLE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AddProduct;
