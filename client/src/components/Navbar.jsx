import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import cookie from 'react-cookies'

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/apiCalls";
import "../css/Navbar.css";
import axios from "axios";



const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();





  const handleClick = async  (e) => {
    await axios.get('http://localhost:5000/api/auth/logout')
    logout(dispatch);
  };

  return (
    <div className="navbar-container">
      <div className="d-flex   justify-content-between align-items-center">
        <div className="brand">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
            <div className="brand">BCH.</div>
          </NavLink>
        </div>
        <div className="d-flex">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
            <p className="nav-item">ANASAYFA</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/products"
          >
            <p className="nav-item">Yeni Gelenler</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/products/man"
          >
            <p className="nav-item">Erkek</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/products/women"
          >
            <p className="nav-item">Kadın</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/products/children"
          >
            <p className="nav-item">Çocuk</p>
          </NavLink>
          <p className="nav-item">Premium Vintage</p>
        </div>
        <div className="d-flex">
          {!user && (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/register"
            >
              <span className="nav-item">ÜYE OL</span>
            </Link>
          )}

          {user ? (
            <span className="nav-item" onClick={handleClick}>
              ÇIKIŞ YAP
            </span>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/login"
            >
              <p className="nav-item">GİRİŞ YAP</p>
            </Link>
          )}

          <FavoriteBorderIcon className="nav-item" />

          <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
            <Badge color="primary"> 
              <ShoppingCartOutlined className="nav-item"/>
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
