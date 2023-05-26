// import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, element: Element, ...rest }) => {
  const {  isAuthenticated, user } = useSelector((state) => state.user);
console.log(...rest);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated === false) {
          return <Navigate to="/login" />;
        }

        if (isAdmin === true && user.role !== "admin") {
          return <Navigate to="/login" />;
        }

        return <Element {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
