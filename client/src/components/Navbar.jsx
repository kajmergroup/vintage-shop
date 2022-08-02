import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/apiCalls";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  display: flex;
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const MenuHome = styled.div`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleClick = (e) => {
   
    logout(dispatch);
  };


  return (
    <Container>
      <Wrapper>
        <Left>
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
            <Logo>BCH.</Logo>
          </NavLink>
        </Left>
        <Center>
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
            <MenuHome>ANASAYFA</MenuHome>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/products"
          >
            <MenuItem>Yeni Gelenler</MenuItem>
          </NavLink>

          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/products/man"
          >
            <MenuItem>Erkek</MenuItem>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/products/women"
          >
            <MenuItem>Kadın</MenuItem>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/products/children"
          >
            <MenuItem>Çocuk</MenuItem>
          </NavLink>

          <MenuItem>Premium Vintage</MenuItem>
        </Center>
        <Right>
          {!user && (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/register"
            >
              <MenuItem>ÜYE OL</MenuItem>
            </Link>
          )}

          {user ? (
            <MenuItem onClick={handleClick}>ÇIKIŞ YAP</MenuItem>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/login"
            >
              <MenuItem>GİRİŞ YAP</MenuItem>
            </Link>
          )}
          <MenuItem>
            <FavoriteBorderIcon />
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
              <Badge  color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
