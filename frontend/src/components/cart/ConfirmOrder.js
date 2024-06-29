import { Fragment, useEffect } from "react";
import MetaData from "../layouts/MetaData";
import { Link, useNavigate, useParams } from "react-router-dom";
import { validateShipping } from "./Shipping";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "./CheckoutsSteps";
import { createOrder } from "../../actions/orderActions";
import { orderCompleted } from "../../slicers/cartSlice";
import axios from "axios";
import { clearError as clearOrderError } from "../../slicers/orderSlice";
import { toast } from "react-toastify";

export default function ConfirmOrder() {
  const totalPrice = 500;
  // const { shippingInfo, items: cartItems } = useSelector(
  //   (state) => state.cartState
  // );
  const { items: cartItems, shippingInfo } = useSelector(
    (state) => state.cartState
  );
  // const { user } = useSelector((state) => state.authState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const { user } = useSelector((state) => state.authState);

  const { error: orderError } = useSelector((state) => state.orderState);

  const shippingPrice = itemsPrice > 200 ? 0 : 25;
  let taxPrice = Number(0.05 * itemsPrice);
  // const totalPrice = Number(itemsPrice + shippingPrice + taxPrice).toFixed(2);

  const paymentData = {
    // amount: orderInfo.totalPrice,
    shipping: {
      name: user.name,
      address: {
        line1: shippingInfo.address,
        city: shippingInfo.city,
        countrystate: shippingInfo.countrystate,
        postal_code: shippingInfo.postalCode,
        // country: shippingInfo.country,
      },
      phone: shippingInfo.phoneNo,
    },
  };

  const order = {
    orderItems: cartItems,
    shippingInfo,
  };

  if (orderInfo) {
    order.itemsPrice = orderInfo.itemsPrice;
    order.shippingPrice = orderInfo.shippingPrice;
    order.taxPrice = orderInfo.taxPrice;
    // order.totalPrice = orderInfo.totalPrice;
  }

  useEffect(() => {
    validateShipping(shippingInfo, navigate);
    if (orderError) {
      toast(orderError, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearOrderError());
        },
      });
    }
  });
  const processPayment = () => {
    const data = {
      itemsPrice,
      shippingPrice,
      taxPrice,
      // totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    dispatch(orderCompleted());
    dispatch(createOrder(order));
    navigate("/order/success");

    // navigate("/payment");
  };

  useEffect(() => {
    validateShipping(shippingInfo, navigate);
  }, []);
  function formatNumberWithCommasIndian(number) {
    if (number === null || number === undefined) return ""; // Check for undefined or null
    const numStr = number.toString();
    if (numStr.length <= 3) return numStr;

    let lastThreeDigits = numStr.slice(-3);
    let otherDigits = numStr.slice(0, -3);

    otherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");

    return otherDigits + "," + lastThreeDigits;
  }
  return (
    <Fragment>
      <MetaData title={"Confirm Order"} />
      <MetaData title={"Confirm Order"} />
      <CheckoutSteps shipping confirmOrder />

      <div
        id="OrderMianmagshmobile"
        className="row d-flex justify-content-center"
        style={{ width: "100%" }}
      >
        <div className="col-12 col-lg-8 mt-5 order-confirm">
          <h4 className="mb-3">Booking Info</h4>
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Phone:</b>
            {shippingInfo.phoneNo}
          </p>
          <p className="mb-4">
            <b>Address:</b> {shippingInfo.address},{shippingInfo.city} ,
            {shippingInfo.postalCode},{shippingInfo.countrystate},{" "}
            {/* {shippingInfo.country} */}
          </p>

          <hr />
          <h4 className="mt-4">Your Bike Details:</h4>

          {cartItems.map((item) => (
            <Fragment>
              <div className="cart-item my-1">
                <div className="row">
                  <div className="col-4 col-lg-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      height="65"
                      width="65"
                    />
                  </div>

                  <div className="col-5 col-lg-6">
                    <Link to={`/product/${item.product}`} href="#">
                      {item.name} ({item.bikeyear})
                    </Link>
                  </div>

                  <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                    <p>
                      Rs. <b>{formatNumberWithCommasIndian(item.price)}</b>
                    </p>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}

          <hr />
        </div>

        <div className="col-12 col-lg-3 my-4">
          <div id="order_summary">
            <h4>Order Summary</h4>
            <hr />

            <p>Are you sure to Book</p>

            {/* <button
              onClick={processPayment}
              id="checkout_btn"
              className="btn btn-primary btn-block"
            >
              Proceed
            </button> */}
          </div>

          <div>
            <button
              onClick={processPayment}
              id="checkout_btn"
              className="btn btn-primary btn-block"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
