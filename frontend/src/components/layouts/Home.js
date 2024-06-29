import React, { useState } from "react";
import { Fragment, useEffect, useRef } from "react";
import MetaData from "./MetaData";
import { getProducts } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Product from "./product/Product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./css/home.css";
import Pagination from "react-js-pagination";
import Search from "./Search";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import NewHomeCss from "./NewHomeCss.css";
import NewSlider from "./NewSlider";

export default function Home() {
  const { products, loading, error, productsCount, resPerPage } = useSelector(
    (state) => state.productsState
  );

  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const [price, setprice] = useState([1, 15000000]);
  const [priceChanged, setpriceChanged] = useState(price);

  const [bikekm, setBikekm] = useState([1, 500000]);
  const [bikekmChanged, setBikekmChanged] = useState(bikekm);

  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("all");
  const [sortedProducts, setSortedProducts] = useState([]);
  const categories = [
    "All",
    "Audi",
    "BMW",
    "Citroen",
    "Fiat",
    "Ford",
    "Hyundai",
    "Jaguar",
    "Jeep",
    "Kia",
    "Mahindra",
    "Maruti Suzuki",
    "Mercedes-Benz",
    "MG",
    "Mitsubishi",
    "Nissan",
    "Renault",
    "Skoda",
    "Tata",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];

  const [biketype, setBiketype] = useState("All");
  const biketypecategories = ["All", "Petrol", "Electric", "Diesel"];

  // const [bikecccategories, setBikecccategories] = useState(null);

  const [bikeCCtypecategories, setBikeCCtypecategories] = useState("All");
  const bikeCCtypecategories1 = [
    "All",
    "1.0L-1.5L",
    "1.5L-2.0L",
    "2.0L-2.5L",
    "2.5L-3.0L",
    "Above 3.0L",
  ];
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (error) {
      return toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    dispatch(
      getProducts(
        keyword,
        price,
        bikekm,
        category,
        biketype,
        bikeCCtypecategories,
        currentPage,
        null
      )
    );
  }, [
    error,
    dispatch,
    keyword,
    priceChanged,
    bikekmChanged,
    category,
    biketype,
    bikeCCtypecategories,
    currentPage,
    null,
  ]);

  const [normalColor, setNormalColor] = useState("red");

  // State to keep track of the currently checked item
  const [checkedItem, setCheckedItem] = useState("");

  // Function to handle checkbox clicks
  const handleCheckboxChange = (itemName) => {
    setCheckedItem(itemName);
  };

  // State to keep track of the currently checked item
  const [checkedItem1, setCheckedItem1] = useState("");

  // Function to handle checkbox clicks
  const handleCheckboxChange1 = (itemName) => {
    setCheckedItem1(itemName);
  };

  // State to keep track of the currently checked item
  const [checkedItem12, setCheckedItem2] = useState("");

  // Function to handle checkbox clicks
  const handleCheckboxChange2 = (itemName) => {
    setCheckedItem2(itemName);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    // Sort products based on selected sort option

    // const prodctsNamechange =

    if (keyword) {
    }
    if (products) {
      setSortedProducts(
        [...products].sort((a, b) => {
          if (sort === "asc") {
            return a.price - b.price;
          } else if (sort === "dsc") {
            return b.price - a.price;
          } else {
            return new Date(b.createdAt) - new Date(a.createdAt);
          }
        })
      );
    }
  }, [products, sort]);

  const setAllfunction = (e) => {
    e.preventDefault();
    setCategory("All");
    handleCheckboxChange(category);
    setBiketype("All");
    handleCheckboxChange1(biketype);
    setBikeCCtypecategories("All");
    handleCheckboxChange2(bikeCCtypecategories);
    setprice([1, 15000000]);
    setpriceChanged([1, 15000000]);
    setBikekm([1, 500000]);
    setBikekmChanged([1, 500000]);
  };
  function formatNumberWithCommasIndian(number) {
    // Convert number to string
    const numStr = number.toString();

    // If number is less than 1000, no need to format
    if (numStr.length <= 3) return numStr;

    // Split into two parts, the last three digits and the rest
    let lastThreeDigits = numStr.slice(-3);
    let otherDigits = numStr.slice(0, -3);

    // Add commas every two digits in the remaining part
    otherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");

    // Combine the two parts with a comma
    return otherDigits + "," + lastThreeDigits;
  }
  const contentSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "content-section") {
      contentSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/BuyPage", { state: { scrollTo: "content-section" } });
  };
  return (
    <Fragment>
      <Fragment>
        <MetaData title={"Buy Page"} />
        <div style={{ background: "#fff", paddingBottom: "60px" }}>
          <div>
            <div
              onClick={handleClick}
              style={{ cursor: "pointer" }}
              className="NewClassifiedFirstHBanne"
            >
              <img src="/images/AboutPageBannerimg.png" alt="" />
            </div>
            <div>
              <NewSlider />
            </div>

            <div className="classformobileshowinputbox">{/* <Search /> */}</div>

            {/* <!------------------------------------Cards Section-----------------------------------------> */}

            {/* <div className="buyPageCardsandFilter">
                      <div className="buyPagecardssection">
                        {products &&
                          products.map((product) => (
                            <Product key={product._id} product={product} />
                          ))}
                      </div>

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
                                          setBikeCCtypecategories(
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
                      </div>
                    </div> */}
            <div>
              <div>
                <div className="Maindyu23784yu3478y63hgs">
                  <div
                    ref={contentSectionRef}
                    id="content-section"
                    className="Maindivoftheconetenetwidtgh23478278"
                  >
                    <div>
                      <div className="Filyeruhyg6734gyws76">
                        <div class="Searchuiew82348259">
                          <div class="Calsadhjfdhij435675huy">
                            <input
                              type="text"
                              placeholder="Search your Bike"
                              // value={keyword}
                              onChange={(e) => {
                                setKeyword(e.target.value);
                              }}
                            />
                          </div>

                          <div class="gfuyweguywer38747243h">
                            <button class="Buttomnofthsearch3244">
                              <img src="/images/mynaui_search.png" alt="" />
                            </button>
                          </div>
                        </div>
                        <div>
                          {/* <div className="SortOptionnewCalssfiedflex">
                            <div className="Sortbysg2333">Sort by :</div>
                            <div className="q423Soryt6563234">
                              Price : Low to High
                            </div>
                          </div> */}

                          <div className="Dispjijji3478483448943894">
                            <div className="SortOptionnewCalssfiedflex121212">
                              <div className="sortbyuptiobb66234323">
                                Sort by :
                              </div>

                              <div>
                                <select
                                  onChange={handleSortChange}
                                  className="q423Soryt656323434w34"
                                  name=""
                                  id=""
                                >
                                  <option
                                    className="Sortbysg2333sss"
                                    value="all"
                                  >
                                    Price : All
                                  </option>
                                  <option
                                    className="Sortbysg2333sss"
                                    value="asc"
                                  >
                                    Price : Low to High
                                  </option>
                                  <option
                                    className="Sortbysg2333sss"
                                    value="dsc"
                                  >
                                    Price : High to Low
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div>
                              <div
                                style={{ display: "none" }}
                                className="Filteroptioniodns2383834"
                              >
                                <div>Filter</div>
                                <div>
                                  <img src="/images/gridicons_filter.png" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!---------------------------------------Products List---------------------------------> */}
                    <div className="rsu3274243y82348778234">
                      <div className="bikeproductdivflexcontenet">
                        {/* {products &&
                          products.map((product) => (
                            <Product key={product._id} product={product} />
                          ))} */}

                        {sortedProducts &&
                          sortedProducts.map((product) => (
                            <Product key={product._id} product={product} />
                          ))}
                      </div>
                    </div>

                    {/* <div className="seemoreiondiodbhnd">
                      <div className="seemoremaindivc23">
                        <div className="SeemorenewClassifiedsse">See More</div>
                      </div>
                    </div> */}

                    {/* <!---------------------------------------Products List---------------------------------> */}
                  </div>
                  <div className="filteroptionmaindfu237487">
                    <div
                      className="filtersection"
                      id="mobilesfiltersecrionssfordiv"
                    >
                      <div className="filtersectionhomegdhdivfle">
                        <div className="filterheadings">Filter</div>
                        <div>
                          <div className="ResrFilterBUttondiv">
                            <button
                              onClick={(e) => setAllfunction(e)}
                              className="resrtFiltrerButtonsduv"
                            >
                              Clear
                            </button>
                          </div>
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

                        <div
                          className="slidersdiv"
                          style={{
                            marginTop: "20px",
                            paddingLeft: "10px",
                            paddingRight: "15px",
                            paddingBottom: "20px",
                          }}
                          onMouseUp={() => setpriceChanged(price)}
                        >
                          <Slider
                            range={true}
                            marks={{
                              // 1: `₹${price.slice(0, 1)}`,
                              1: `₹${formatNumberWithCommasIndian(
                                price.slice(0, 1)
                              )}`,

                              // 1000000: `₹${price.slice(1, 2)}`,
                              15000000: `₹${formatNumberWithCommasIndian(
                                price.slice(1, 2)
                              )}`,
                            }}
                            min={1}
                            max={15000000}
                            defaultValue={price}
                            onChange={(price) => {
                              setprice(price);
                            }}
                            handleRender={(renderProps) => {
                              return (
                                <Tooltip
                                  // overlay={`Rs. ${renderProps.props["aria-valuenow"]}`}
                                  overlay={`Rs. ${formatNumberWithCommasIndian(
                                    renderProps.props["aria-valuenow"]
                                  )}`}
                                >
                                  <div {...renderProps.props}></div>
                                </Tooltip>
                              );
                            }}
                          />
                        </div>
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
                                <div className="companynames">
                                  <input
                                    className="Checkboxfilterinput555"
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
                            paddingLeft: "10px",
                            paddingRight: "15px",
                            paddingBottom: "20px",
                          }}
                          onMouseUp={() => setBikekmChanged(bikekm)}
                        >
                          <Slider
                            range={true}
                            marks={{
                              1: `${formatNumberWithCommasIndian(
                                bikekm.slice(0, 1)
                              )}km`,
                              500000: `${formatNumberWithCommasIndian(
                                bikekm.slice(1, 2)
                              )}km`,
                            }}
                            min={1}
                            max={500000}
                            defaultValue={bikekm}
                            onChange={(bikekm) => {
                              setBikekm(bikekm);
                            }}
                            handleRender={(renderProps) => {
                              return (
                                <Tooltip
                                  overlay={`${formatNumberWithCommasIndian(
                                    renderProps.props["aria-valuenow"]
                                  )} Km `}
                                >
                                  <div {...renderProps.props}></div>
                                </Tooltip>
                              );
                            }}
                          />
                        </div>
                      </div>

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
                                <div className="companynames">
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
                                  />
                                  <label htmlFor="vehicle1">{biketype}</label>
                                  <br />
                                </div>
                              </li>
                            ))}
                          </ul>
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

                        <div>
                          <ul>
                            {bikeCCtypecategories1.map(
                              (bikeCCtypecategories, index) => (
                                <li key={bikeCCtypecategories}>
                                  <div className="companynames">
                                    <input
                                      value="Bike"
                                      type="checkbox"
                                      name={bikeCCtypecategories}
                                      checked={
                                        checkedItem12 === bikeCCtypecategories
                                      }
                                      onChange={() =>
                                        handleCheckboxChange2(
                                          bikeCCtypecategories
                                        )
                                      }
                                      onClick={() => {
                                        setBikeCCtypecategories(
                                          bikeCCtypecategories
                                        );
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
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div>
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
                    </div> */}
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
  function likebuttonclick() {
    document.getElementById("heartcoulour").style.color = "#F00";
  }
}
