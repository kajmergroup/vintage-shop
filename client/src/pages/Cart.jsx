import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { userRequest } from "../requestMethods";
import { useState } from "react";
import { useEffect } from "react";
import CartProduct from "../components/CartProduct";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [productQuantity,setProductQuantity] = useState();
  console.log(productQuantity)
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
  }, [productQuantity,id]);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>SEPETİM ({cartQuantity})Ürün</Title>
        <Top>
          <TopButton>ALIŞVERİŞE DEVAM ET</TopButton>

          <TopButton type="filled">SEPETİ ONAYLA</TopButton>
        </Top>
        <Bottom>
          <Info>
            {products.map((product) => (
              <CartProduct product={product} setProductQuantity={setProductQuantity} />
            ))}

            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>SİPARİŞ ÖZETİ</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Ürünün Toplamı</SummaryItemText>
              <SummaryItemPrice>₺</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Kargo Toplam</SummaryItemText>
              <SummaryItemPrice>₺ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Kargo İndirimi</SummaryItemText>
              <SummaryItemPrice>₺ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Toplam</SummaryItemText>
              <SummaryItemPrice>₺ </SummaryItemPrice>
            </SummaryItem>
            <Link to="/address">
              <Button>SEPETİ ONAYLA</Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
