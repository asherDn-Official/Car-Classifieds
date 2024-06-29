import React, { useState } from "react";
import { Fragment, useEffect } from "react";
import MetaData from "../MetaData";
import { getProducts } from "../../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../layouts/Loader";
import Product from "./Product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./css/home.css";
import Pagination from "react-js-pagination";
import Search from "../Search";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import { useParams } from "react-router-dom";

export default function ProductSearch() {
  const { products, loading, error, productsCount, resPerPage } = useSelector(
    (state) => state.productsState
  );

  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const [currentPage, setCurrentPage] = useState(1);

  // console.log(currentPage);
  const setCurrentPageNo = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const [price, setprice] = useState([1, 1000000]);
  const [priceChanged, setpriceChanged] = useState(price);

  const [bikekm, setBikekm] = useState([1, 100000]);
  const [bikekmChanged, setBikekmChanged] = useState(bikekm);

  const [category, setCategory] = useState(null);
  const categories = [
    "Bajaj",
    "Hero",
    "KTM",
    "TVS",
    "Royal Enfield",
    "Yamaha",
    "Susuzki",
    "Honda",
    "Mahindra",
  ];
  const [checkedItem, setCheckedItem] = useState("");

  const [biketype, setBiketype] = useState(null);
  const biketypecategories = ["Petrol", "Electric", "Diesel"];
  const [checkedItem1, setCheckedItem1] = useState("");
  const bikeCCtypecategories1 = ["100cc-160cc", "160cc-200cc", "200cc-400cc"];

  const [bikecccategories, setBikecccategories] = useState(null);

  const bikeCCtypecategories = ["100cc-160cc", "160cc-200cc", "200cc-400cc"];
  const { keyword } = useParams();
  // console.log("Keyword", keyword);

  useEffect(() => {
    if (error) {
      return toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    dispatch(
      getProducts(
        keyword,
        // null,
        price,
        bikekm,
        category,
        biketype,
        bikecccategories,
        currentPage
      )
    );
  }, [
    error,
    dispatch,
    null,
    priceChanged,
    bikekmChanged,
    category,
    biketype,
    bikecccategories,
    currentPage,
    keyword,
  ]);

  const handleCheckboxChange = (itemName) => {
    setCheckedItem(itemName);
  };
  // Function to handle checkbox clicks
  const handleCheckboxChange1 = (itemName) => {
    setCheckedItem1(itemName);
  };
  return (
    <Fragment>
      <Fragment>
        <MetaData title={"Buy Page"} />
        <div>
          <div>
            <div className="buyPageFlexmIANDIV">
              <div className="buyPageWidthMainDiv">
                {/* <Search /> */}
                {/* <!-----------------------------Mobile Navbar Search-------------------------> */}
                <div className="classformobileshowinputbox">
                  <Search />
                  {/* <form>
                      <div className="formnamedivforbuypagesdivs">
                        <div>
                          <input
                            className="buyPagesearchareaforbikessdsdsd"
                            type="searchdiv"
                            placeholder="Search here"
                          />
                        </div>

                        <div>
                          <button type="buyPagessubmit1212">Search here</button>
                        </div>
                      </div>
                    </form> */}
                </div>
                {/* <!-----------------------------Mobile Navbar Search------------------------->
            {/* <!--------------------------------Banner-----------------------------------------> */}

                <div className="buyPagebannerarea">
                  <div className="buyPageimagebenersection">
                    <img src="../HomeBanner.png" alt="" />
                    <div className="buyPageparagraghsection">
                      <h2>Buy</h2>
                      <span className="buyPagspansectionforbanner">
                        <div className="divnamewidthforbanner">
                          Discover trusted and verified used bikes on RevNitro
                          classNameified. Explore detailed listings, filter by
                          preferences, and join a community of bike enthusiasts.
                          Find your perfect ride with confidence today !
                        </div>
                      </span>
                      <div className="buyPagssearchinputboxes">
                        <div className="buyPagecontainer">
                          <Search />
                          {/* <form>
                              <div className="formnamedivforbuypagesdivs">
                                <div>
                                  <input
                                    className="buyPagesearchareaforbikessdsdsd"
                                    type="searchdiv"
                                    placeholder="Search here"
                                  />
                                </div>

                                <div>
                                  <button type="buyPagessubmit">
                                    Search here
                                  </button>
                                </div>
                              </div>
                            </form> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--------------------------------Banner----------------------------------------->
          <!--------------------------------Cards and Filter Section---------------------------------------> */}
                <div className="buyPageSECTION">
                  {/* <!------------------------------------Cards Section-----------------------------------------> */}
                  <div className="buyPageBikemaindiv">
                    <div className="noofbikefliterflexdiv">
                      <h2 className="numberofbikesecrtion">
                        Showing Searched Bikes
                        {/* Showing Bikes  */}
                      </h2>
                      <div className="secondflitermaindivforflex">
                        <div
                          id="nav-container"
                          className={isActive ? "is-active" : ""}
                        >
                          <div
                            id="nav-toggle"
                            className="filternameformobileversions"
                          >
                            <button className="filterbuttonforMobileversion">
                              <div onClick={toggleNav}>Filters</div>

                              <div className="imagereplacingdivbuttonline">
                                <div className="Firstbuttonline"></div>
                                <div className="Secondbuttonline"></div>
                                <div className="Thirdbuttonline"></div>
                              </div>
                            </button>
                          </div>
                          <nav className="nav-items">
                            <div className="filtersection">
                              <div className="filterheadings">Filter</div>
                              <div className="brandsection">
                                <div>
                                  <div className="brandheading">
                                    <span className="brandnameflex">Brand</span>
                                  </div>
                                </div>
                                <div className="hrlineforbrand">
                                  <hr className="hrlineforbrand" />
                                </div>
                                <div
                                  className="slidersdiv"
                                  onMouseUp={() => setpriceChanged(price)}
                                >
                                  <Slider
                                    range={true}
                                    marks={{
                                      1: "1",
                                      100000: "100000",
                                    }}
                                    min={1}
                                    max={100000}
                                    defaultValue={price}
                                    onChange={(price) => {
                                      setprice(price);
                                    }}
                                    handleRender={(renderProps) => {
                                      return (
                                        <Tooltip
                                          overlay={`Rs. ${renderProps.props["aria-valuenow"]}`}
                                        >
                                          <div {...renderProps.props}></div>
                                        </Tooltip>
                                      );
                                    }}
                                  />
                                </div>
                                <div className="companynames">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label htmlFor="vehicle1">All Brands</label>
                                  <br />
                                </div>
                                <div className="companynames">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label htmlFor="vehicle1">Bajaj</label>
                                  <br />
                                </div>
                                <div className="companynames">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label htmlFor="vehicle1">Hero</label>
                                  <br />
                                </div>
                                <div className="companynames">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label htmlFor="vehicle1">TVS</label>
                                  <br />
                                </div>
                                <div className="companynames">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label htmlFor="vehicle1">KTM</label>
                                  <br />
                                </div>
                                <div className="companynames">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label htmlFor="vehicle1">
                                    Royal Enfield
                                  </label>
                                  <br />
                                </div>
                                <div className="companynames">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label htmlFor="vehicle1">Yamaha</label>
                                  <br />
                                </div>
                              </div>

                              {/* <!--------------------------Type-------------------------------------------> */}
                              <div className="brandsection">
                                <div>
                                  <div className="brandheading">
                                    <span className="brandnameflex">Type</span>
                                  </div>
                                </div>
                                <div className="hrlineforbrand">
                                  <hr className="hrlineforbrand" />
                                </div>
                                <div className="companynames">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label htmlFor="vehicle1">Petrol</label>
                                  <br />
                                </div>
                                <div className="companynames">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label htmlFor="vehicle1">Diesel</label>
                                  <br />
                                </div>
                                <div className="companynames">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label htmlFor="vehicle1">Electric</label>
                                  <br />
                                </div>
                              </div>

                              <div className="brandsection">
                                <div>
                                  <div className="brandheading">
                                    <span className="brandnameflex">
                                      Engine Capacity
                                    </span>
                                  </div>
                                </div>
                                <div className="hrlineforbrand">
                                  <hr className="hrlineforbrand" />
                                </div>
                                <div className="companynames">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label htmlFor="vehicle1">
                                    100cc - 160cc
                                  </label>
                                  <br />
                                </div>
                                <div className="companynames">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label htmlFor="vehicle1">
                                    160cc - 200cc
                                  </label>
                                  <br />
                                </div>
                                <div className="companynames">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label htmlFor="vehicle1">
                                    200cc - 400cc
                                  </label>
                                  <br />
                                </div>
                              </div>
                              {/* <!--------------------------Engine Capacity-------------------------------------------> */}
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>

                    <div className="buyPageCardsandFilter">
                      <div className="buyPagecardssection">
                        {/* <!----------------------------Bike1---------------------------> */}

                        {products &&
                          products.map((product) => (
                            <Product key={product._id} product={product} />
                          ))}
                      </div>

                      {/* <!------------------------------------Cards Section-----------------------------------------> */}

                      <div
                        className="filtersection"
                        id="mobilesfiltersecrionssfordiv"
                      >
                        <div className="filtersectionhomegdhdivfle">
                          <div className="filterheadings">Filter</div>
                          <div>
                            <form className="ResrFilterBUttondiv">
                              <button className="resrtFiltrerButtonsduv">
                                Reset Filter
                              </button>
                            </form>
                          </div>
                        </div>

                        <div className="brandsection">
                          <div>
                            <div className="brandheading">
                              <span className="brandnameflex">Budget</span>
                            </div>
                          </div>
                          <div className="hrlineforbrand">
                            <hr className="hrlineforbrand" />
                          </div>

                          {/* ---------------Price Filter-------------------- */}
                          <div
                            className="slidersdiv"
                            style={{
                              marginTop: "20px",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                              paddingBottom: "20px",
                            }}
                            onMouseUp={() => setpriceChanged(price)}
                          >
                            <Slider
                              range={true}
                              marks={{
                                1: "1",
                                1000000: "1000000",
                              }}
                              min={1}
                              max={1000000}
                              defaultValue={price}
                              onChange={(price) => {
                                setprice(price);
                              }}
                              handleRender={(renderProps) => {
                                return (
                                  <Tooltip
                                    overlay={`Rs. ${renderProps.props["aria-valuenow"]}`}
                                  >
                                    <div {...renderProps.props}></div>
                                  </Tooltip>
                                );
                              }}
                            />
                          </div>
                          {/* ---------------Price Filter-------------------- */}
                        </div>

                        <div className="brandsection">
                          <div>
                            <div className="brandheading">
                              <span className="brandnameflex">Brand</span>
                            </div>
                          </div>
                          <div className="hrlineforbrand">
                            <hr className="hrlineforbrand" />
                          </div>
                          <div>
                            <ul>
                              {categories.map((category, index) => (
                                <li key={category}>
                                  <div
                                    className="companynames"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <input
                                      value="Bike"
                                      type="checkbox"
                                      name={category}
                                      checked={checkedItem === category}
                                      onChange={() =>
                                        handleCheckboxChange(category)
                                      }
                                      onClick={() => {
                                        setCategory(category);
                                      }}
                                      style={{
                                        cursor: "pointer",
                                      }}
                                    />
                                    <label htmlFor="vehicle1">{category}</label>
                                    <br />
                                  </div>
                                </li>
                              ))}
                            </ul>

                            <hr />
                          </div>
                        </div>

                        <div className="brandsection">
                          <div>
                            <div className="brandheading">
                              <span className="brandnameflex">Kilometer</span>
                            </div>
                          </div>
                          <div className="hrlineforbrand">
                            <hr className="hrlineforbrand" />
                          </div>

                          <div
                            className="slidersdiv"
                            style={{
                              marginTop: "20px",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                              paddingBottom: "20px",
                            }}
                            onMouseUp={() => setBikekmChanged(bikekm)}
                          >
                            <Slider
                              range={true}
                              marks={{
                                1: "1",
                                100000: "100000",
                              }}
                              min={1}
                              max={100000}
                              defaultValue={bikekm}
                              onChange={(bikekm) => {
                                setBikekm(bikekm);
                              }}
                              handleRender={(renderProps) => {
                                return (
                                  <Tooltip
                                    overlay={`${renderProps.props["aria-valuenow"]} Km `}
                                  >
                                    <div {...renderProps.props}></div>
                                  </Tooltip>
                                );
                              }}
                            />
                          </div>
                        </div>

                        {/* <!--------------------------Type-------------------------------------------> */}
                        <div className="brandsection">
                          <div>
                            <div className="brandheading">
                              <span className="brandnameflex">Type</span>
                            </div>
                          </div>
                          <div className="hrlineforbrand">
                            <hr className="hrlineforbrand" />
                          </div>
                          <div>
                            <ul>
                              {biketypecategories.map((biketype, index) => (
                                <li key={biketype}>
                                  <div
                                    className="companynames"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <input
                                      value="Bike"
                                      type="checkbox"
                                      name={biketype}
                                      checked={checkedItem1 === biketype}
                                      onChange={() =>
                                        handleCheckboxChange1(biketype)
                                      }
                                      onClick={() => {
                                        setBiketype(biketype);
                                      }}
                                      style={{
                                        cursor: "pointer",
                                      }}
                                    />
                                    <label htmlFor="vehicle1">{biketype}</label>
                                    <br />
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* <!--------------------------Type------------------------------------------->
                  <!--------------------------Engine Capacity-------------------------------------------> */}
                        <div className="brandsection">
                          <div>
                            <div className="brandheading">
                              <span className="brandnameflex">
                                Engine Capacity 1
                              </span>
                            </div>
                          </div>
                          <div className="hrlineforbrand">
                            <hr className="hrlineforbrand" />
                          </div>

                          <div>
                            <ul>
                              {bikeCCtypecategories1.map(
                                (bikeCCtypecategories, index) => (
                                  <li key={bikeCCtypecategories}>
                                    <div
                                      className="companynames"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <input
                                        value="Bike"
                                        type="checkbox"
                                        name={bikeCCtypecategories}
                                        checked={
                                          checkedItem1 === bikeCCtypecategories
                                        }
                                        onChange={() =>
                                          handleCheckboxChange1(
                                            bikeCCtypecategories
                                          )
                                        }
                                        onClick={() => {
                                          setBikecccategories(
                                            bikeCCtypecategories
                                          );
                                        }}
                                        style={{
                                          cursor: "pointer",
                                        }}
                                      />
                                      <label htmlFor="vehicle1">
                                        {bikeCCtypecategories}
                                      </label>
                                      <br />
                                    </div>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                        {/* <!--------------------------Engine Capacity-------------------------------------------> */}
                      </div>
                    </div>

                    <div>
                      {productsCount > 0 ? (
                        <div className="d-flex justify-content-center mt-5">
                          <Pagination
                            activePage={currentPage}
                            onChange={setCurrentPageNo}
                            totalItemsCount={productsCount}
                            itemsCountPerPage={resPerPage}
                            nextPageText={"Next"}
                            firstPageText={"First"}
                            lastPageText={"Last"}
                            itemClass={"page-item"}
                            linkClass={"page-link"}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* <!--------------------------------Cards and Filter Section---------------------------------------> */}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
  function likebuttonclick() {
    document.getElementById("heartcoulour").style.color = "#F00";
  }
}
