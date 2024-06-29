import React, { useEffect, useState } from "react";
import ProductsCSS from "./ProductsCSS.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderCompleted } from "../../../slicers/cartSlice";
import { WishListItem } from "../../../actions/wishListActions";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Product({ product }) {
  // const [color, setColor] = useState("#cdcdcd");
  const [color, setColor] = useState("#cdcdcd");
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  // const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const processPayment = () => {
    dispatch(orderCompleted());
  };

  const WishList = JSON.parse(localStorage.getItem("WishListItems"));

  async function queueData(product) {
    try {
      const response = await axios.post(`/api/v1/queue/${product}`);
      if (response.data.success === true) {
        return setQueueCount(String(response.data.length));
      } else {
        return setQueueCount("x");
      }
    } catch (e) {
      console.error(e);
    }
  }

  const [queueCounts, setQueueCount] = useState("0");

  useEffect(() => {
    queueData(product._id);
    // dispatch(getProduct(id));
  }, []);

  return (
    // <div className="buyPagebikecards">
    //   <div className="buyPagebikebackgroundsection">
    //     <div className="buyPagebiimageaddlistrelative">
    //       <img
    //         className="buyPageimagesize"
    //         src={product.images[0].image}
    //         alt=""
    //       />

    //       <div>
    //         <img
    //           id="Postioisnsdhjdsghbhabsdodsulr"
    //           className="buyPageimagesize"
    //           src="/images/LayerofthIamgedfediv.png"
    //           alt=""
    //         />
    //       </div>
    //       <div className="buyPageaddlistposition">
    //         <Link to="/mywishlists" style={{ background: "none" }}>
    //           {/* {console.log("WishList")} */}
    //           {product &&
    //           WishList &&
    //           WishList.some((prod) => prod.product === product._id) ? (
    //             <i
    //               className="fa fa-heart"
    //               id="heartcoulour"
    //               style={{ color: "red" }}
    //               // onClick={likebuttonclick}
    //               onClick={() => {
    //                 dispatch(WishListItem(product._id, quantity));
    //                 toast("Added to Wishlist", {
    //                   type: "success",
    //                   position: toast.POSITION.BOTTOM_CENTER,
    //                 });
    //               }}
    //             />
    //           ) : (
    //             <i
    //               className="fa fa-heart"
    //               id="heartcoulour"
    //               // style={{ color: "red" }}
    //               // onClick={likebuttonclick}
    //               onClick={() => {
    //                 dispatch(WishListItem(product._id, quantity));
    //                 toast("Added to Wishlist", {
    //                   type: "success",
    //                   position: toast.POSITION.BOTTOM_CENTER,
    //                 });
    //               }}
    //             />
    //           )}
    //         </Link>
    //       </div>

    //       <div className="buyPageaddlistposition1">
    //         <Link style={{ background: "none" }}>
    //           {/* {console.log("WishList")} */}

    //           <div className="queeueListDivcflex">
    //             <div>
    //               <img src="/images/ThunderSymbolIcon.png" />
    //             </div>
    //             <div className="Numberofusewrsonthediv"> {queueCounts}</div>
    //             <div className="Numberofusewrsonthediv">Enquiry</div>
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="buyPagecontentsection">
    //       <span className="buyPagebikename">
    //         <div>{product.bikename}</div>
    //       </span>
    //       <div className="butmobiledivfdhdsd">
    //         <span className="buyPagspecification">
    //           <span className="odoofbike">{product.bikekm}</span>&nbsp;|&nbsp;
    //           <span className="typeofvechicle">{product.biketype}</span>
    //           &nbsp;|&nbsp;
    //           <span className="bikeyear">{product.bikeyear}</span>&nbsp;|&nbsp;
    //           <span className="emmisontype">{product.bikeemmision}&nbsp;</span>
    //         </span>
    //       </div>
    //       <div>
    //         <Link to={`/product/${product._id}`}>
    //           <button
    //             onClick={processPayment}
    //             className="buyPagsbikeviewbutton"
    //           >
    //             View
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <!---------------------------------------Products List--------------------------------->

    <div className="prodcutwidthmain2343">
      <div>
        <div className="Prody84843826234">
          <img src={product.images[0].image} alt="" />
        </div>
        <div className="Nameofyhenoghisry43383">{product.bikename}</div>
        <div className="detailsofthebiejh347">
          <div className="Dretsah874235uu">{product.bikekm}km |</div>
          <div className="Dretsah874235uu">{product.biketype} |</div>
          <div className="Dretsah874235uu">{product.bikeyear} |</div>
          <div className="Dretsah874235uu">{product.bikeemmision}</div>
        </div>
        <div className="bdfgs7g47833">
          <Link to={`/product/${product._id}`}>
            <button onClick={processPayment} className="Butjhsdfui3478ugy3w">
              View
            </button>
          </Link>
        </div>
      </div>
      <div className="buyPageaddlistposition1">
        <Link style={{ background: "none" }}>
          {/* {console.log("WishList")} */}

          <div className="queeueListDivcflex">
            <div>
              <img src="/images/ThunderSymbolIcon.png" />
            </div>
            <div className="Numberofusewrsonthediv"> {queueCounts}</div>
            <div className="Numberofusewrsonthediv">Enquiry</div>
          </div>
        </Link>
      </div>
      <div className="buyPageaddlistposition">
        <Link to="/mywishlists" style={{ background: "none" }}>
          {/* {console.log("WishList")} */}
          {product &&
          WishList &&
          WishList.some((prod) => prod.product === product._id) ? (
            <i
              className="fa fa-heart"
              id="heartcoulour"
              style={{ color: "red" }}
              // onClick={likebuttonclick}
              onClick={() => {
                dispatch(WishListItem(product._id, quantity));
                toast("Added to Wishlist", {
                  type: "success",
                  position: toast.POSITION.BOTTOM_CENTER,
                });
              }}
            />
          ) : (
            <i
              className="fa fa-heart"
              id="heartcoulour"
              // style={{ color: "red" }}
              // onClick={likebuttonclick}
              onClick={() => {
                dispatch(WishListItem(product._id, quantity));
                toast("Added to Wishlist", {
                  type: "success",
                  position: toast.POSITION.BOTTOM_CENTER,
                });
              }}
            />
          )}
        </Link>
      </div>
    </div>

    // <!---------------------------------------Products List--------------------------------->
  );
}
