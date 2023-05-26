import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../Images/logo.png";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

const options = {
  burgerColor: "#000",
  burgerColorHover: "#fff",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#fff",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "About",
  link4Text: "Contact",
  link1Url: "/",
  link1Family: "Poppins",
  link2Url: "/products",
  link3Url: "/about",
  link4Url: "/contact",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#000",
  link1Margin: "1vmax",
  searchIcon: true,
  profileIcon: true,
  cartIcon: true,
  ProfileIconElement: FaUserAlt,
  CartIconElement: IoMdCart,
  SearchIconElement: FaSearch,
  searchIconUrl: "/search",
  profileIconUrl: "/login",
  cartIconUrl: "/cart",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#000",
  searchIconColorHover: "#000",
  cartIconColorHover: "#000",
  cartIconMargin: "1vmax",
  profileIconSize: "3vmax",
  cartIconSize: "3.5vmax",
  searchIconSize: "3vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
