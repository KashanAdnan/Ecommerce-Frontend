import "./App.css";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import UserOptions from "./Components/Layout/Header/UserOptions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React, useEffect, useState } from "react";
import ProductDetails from "./Components/Product/ProductDetails";
import Home from "./Components/Home/Home";
import axios from "axios";
import Products from "./Components/Product/Products";
import Search from "./Components/Product/Search";
import LoginSignUp from "./Components/User/LoginSignUp";
import store from "./Store";
import { loadUser } from "./Action/User.Action";
import { useSelector } from "react-redux";
import Profile from "./Components/User/Profile";
import UpdateProfile from "./Components/User/UpdateProfile";
import UpdatePassword from "./Components/User/UpdatePassword";
import ForgotPassword from "./Components/User/ForgotPassword";
import ResetPassword from "./Components/User/ResetPassword";
import Cart from "./Components/Cart/Cart";
import Shipping from "./Components/Cart/Shipping";
import ConfirmOrder from "./Components/Cart/ConfirmOrder";
import Payment from "./Components/Cart/Payment";
import OrderSucess from "./Components/Cart/OrderSuccess";
import MyOrders from "./Components/Order/MyOrders";
import OrderDetails from "./Components/Order/OrderDetails";
import Dashboard from "./Components/Admin/Dashboard";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProductList from "./Components/Admin/ProductList";
import NewProduct from "./Components/Admin/NewProduct";
import UpdateProduct from "./Components/Admin/UpdateProduct.jsx";
import UsersList from "./Components/Admin/UsersList.jsx";
import UpdateUser from "./Components/Admin/UpdateUser";
import OrderList from "./Components/Admin/OrderLists";
import ProccesOrder from "./Components/Admin/ProccesOrder.jsx";
import ProductReviews from "./Components/Admin/ProductReviews";
import NotFound from "./Components/Layout/NotFound/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState(
    "pk_test_51N4r2ZAnGUbycV6lUpB7JTRF9zOEcyy4DSUfJ47ogXdbv29eDwEcSvQt2HOZZc056MigftUAbNewEN2X0Wn5jJ2k00EkCME04b"
  );
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  const stripePromise = loadStripe(
    "pk_test_51N4r2ZAnGUbycV6lUpB7JTRF9zOEcyy4DSUfJ47ogXdbv29eDwEcSvQt2HOZZc056MigftUAbNewEN2X0Wn5jJ2k00EkCME04b"
  );
  window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <>
      <BrowserRouter>
        <Header />
        {isAuthenticated && <UserOptions user={user} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<LoginSignUp />} />
          {isAuthenticated && <Route path="/account" element={<Profile />} />}
          {isAuthenticated && (
            <Route path="/me/update" element={<UpdateProfile />} />
          )}
          {isAuthenticated && (
            <Route path="/password/update" element={<UpdatePassword />} />
          )}
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/cart" element={<Cart />} />
          {isAuthenticated && <Route path="/shipping" element={<Shipping />} />}

          {stripeApiKey && isAuthenticated && (
            <Route
              path="/process/payment"
              element={
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              }
            />
          )}
          {isAuthenticated && <Route path="/orders" element={<MyOrders />} />}
          {isAuthenticated && (
            <Route path="/success" element={<OrderSucess />} />
          )}
          {isAuthenticated && (
            <Route path="/order/confirm" element={<ConfirmOrder />} />
          )}
          {isAuthenticated && (
            <Route path="/order/:id" element={<OrderDetails />} />
          )}
          {isAuthenticated && (
            <Route path="/order/:id" element={<OrderDetails />} />
          )}
          {isAuthenticated && (
            <Route path="/admin/dashboard" element={<Dashboard />} />
          )}
          {isAuthenticated && (
            <Route path="/admin/products" element={<ProductList />} />
          )}
          {isAuthenticated && (
            <Route path="/admin/product" element={<NewProduct />} />
          )}
          {isAuthenticated && (
            <Route path="/admin/product/:id" element={<UpdateProduct />} />
          )}
          {isAuthenticated && (
            <Route path="/admin/product/:id" element={<UpdateProduct />} />
          )}
          {isAuthenticated && (
            <Route path="/admin/users" element={<UsersList />} />
          )}
          {isAuthenticated && (
            <Route path="/admin/user/:id" element={<UpdateUser />} />
          )}
          {isAuthenticated && (
            <Route path="/admin/orders" element={<OrderList />} />
          )}
          {isAuthenticated && (
            <Route path="/admin/order/:id" element={<ProccesOrder />} />
          )}
          {isAuthenticated && (
            <Route path="/admin/reviews" element={<ProductReviews />} />
          )}
          {isAuthenticated && <Route path="*" element={<NotFound />} />}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
