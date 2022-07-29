import { Add, Remove, Delete } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { userRequest } from "../requestMethods";
import { useState, useEffect } from "react";

const Product = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  display: flex;
  justify-items: space-between;
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const CartProduct = ({ product }) => {
  const id = product.productId;

  const deleteProduct = async () => {
    userRequest.delete("/carts/delete/" + id);
  };

  const updateQuantity = async () => {
    const x = {
      x: "+",
    };
    try {
      userRequest.put("/carts/" + id, x);
    } catch (err) {}
  };

  const updateQuantityy = async () => {
    const x = {
      x: "-",
    };
    try {
      userRequest.put("/carts/" + id, x);
    } catch (err) {}
  };



  return (
    <>
      <Product>
        <ProductDetail>
          <Image src={product.img} />
          <Details>
            <ProductName>
              <b>Ürün:</b> {product.name}
            </ProductName>
            <ProductColor color={product.color} />
            <ProductSize>
              <b>Beden:</b> {product.size}
            </ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Add onClick={updateQuantity} />
            <ProductAmount>{product.quantity}</ProductAmount>
            <Remove onClick={updateQuantityy} />
          </ProductAmountContainer>
          <ProductPrice>₺ {product.price * product.quantity}</ProductPrice>
          <Delete onClick={deleteProduct} />
        </PriceDetail>
      </Product>
    </>
  );
};

export default CartProduct;
