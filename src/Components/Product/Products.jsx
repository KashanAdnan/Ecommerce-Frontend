import React, { useEffect, useState } from "react";
import "./Products.css";
import { clearErrors, getProduct } from "../../Action/Product.Action";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Layout/Loader/Loader";
import { useAlert } from "react-alert";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import MetaData from "../Layout/MetaData"

const categories = [
  "Cat",
  "Dog",
  "Birds",
  "Tops",
  "Attire",
  "Shirts",
  "SmartPhones",
];
const Products = () => {
  const alert = useAlert();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const [price, setPrice] = useState([0, 25000]);

  console.log(price);
  const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };


  const {
    loading,
    error,
    products,
    productCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const { keyword } = useParams();
    let count = filteredProductsCount;  

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
       alert.error(error);
      dispatch(clearErrors())
    }
    dispatch(getProduct(keyword, currentPage, price, category , ratings));
  }, [dispatch, error, keyword, alert, currentPage, price, category , ratings]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <MetaData  title="PRODUCTS -- ECOMMERCE"  />
          <h2 className="productsHeading">Product</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>
          {resultPerPage <= count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Products;
