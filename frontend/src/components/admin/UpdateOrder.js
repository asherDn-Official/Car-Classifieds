import { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MetaData from "../layouts/MetaData";
import {
  orderDetail as orderDetailAction,
  updateOrder,
} from "../../actions/orderActions";
import { toast } from "react-toastify";
import { clearOrderUpdated, clearError } from "../../slicers/orderSlice";
import { Link } from "react-router-dom";

export default function UpdateOrder() {
  const { loading, isOrderUpdated, error, orderDetail } = useSelector(
    (state) => state.orderState
  );
  const {
    user = {},
    orderItems = [],
    shippingInfo = {},
    totalPrice = 0,
    paymentInfo = {},
  } = orderDetail;
  const isPaid = paymentInfo.status === "succeeded" ? true : false;
  const [orderStatus, setOrderStatus] = useState("Processing");
  const { id: orderId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const orderData = {};
    orderData.orderStatus = orderStatus;
    dispatch(updateOrder(orderId, orderData));
  };

  useEffect(() => {
    if (isOrderUpdated) {
      toast("Order Updated Succesfully!", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
        onOpen: () => dispatch(clearOrderUpdated()),
      });

      return;
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearError());
        },
      });
      return;
    }

    dispatch(orderDetailAction(orderId));
  }, [isOrderUpdated, error, dispatch]);

  useEffect(() => {
    if (orderDetail._id) {
      setOrderStatus(orderDetail.orderStatus);
    }
  }, [orderDetail]);

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
    <div className="row" style={{ width: "100%" }}>
      <MetaData title={"Update Order"} />
      <div className="col-12 col-md-2">
        <Sidebar />
      </div>
      <div className="col-12 col-md-10">
        <Fragment>
          <div className="row d-flex justify-content-around">
            <div className="col-12 col-lg-8 mt-5 order-details">
              <h1 className="my-5">Order # {orderDetail._id}</h1>

              <h4 className="mb-4">Shipping Info</h4>
              <p>
                <b>User-Id :</b> {user._id}
              </p>
              <p>
                <b>Name :</b> {user.name}
              </p>
              <p>
                <b>Phone :</b> {shippingInfo.phoneNo}
              </p>
              <p className="mb-4">
                <b>Address :</b> {shippingInfo.address}, {shippingInfo.city},{" "}
                {shippingInfo.postalCode}, {shippingInfo.countrystate},{" "}
                {shippingInfo.country}
              </p>

              <p></p>
              <p>{/* <b>Price:</b> {orderItems[0].price} */}</p>

              <hr />

              {/* <h4 className="my-4">Payment</h4>
              <p className={isPaid ? "greenColor" : "redColor"}>
                <b>{isPaid ? "PAID" : "NOT PAID"}</b>
              </p> */}

              <h4 className="my-4">Order Status:</h4>
              <p
                className={
                  orderStatus && orderStatus.includes("Delivered")
                    ? "greenColor"
                    : "redColor"
                }
              >
                <b>{orderStatus}</b>
              </p>

              <h4 className="my-4">Ordered Items:</h4>

              <hr />
              <div className="cart-item my-1">
                {orderItems &&
                  orderItems.map((item) => (
                    <div className="row my-5">
                      <div className="col-4 col-lg-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          height="45"
                          width="65"
                        />
                      </div>

                      <div className="col-5 col-lg-5">
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </div>

                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p>Rs.{formatNumberWithCommasIndian(item.price)}</p>
                      </div>

                      {/* <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p>ID-{item.product}</p>
                        {console.log("Type", typeof item.product)}
                      </div> */}

                      {/* <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <p>{item.quantity} Piece(s)</p>
                      </div> */}
                    </div>
                  ))}
              </div>
              <hr />
            </div>
            <div className="col-12 col-lg-3 mt-5">
              <h4 className="my-4">Order Status</h4>
              <div className="form-group">
                <select
                  className="form-control"
                  onChange={(e) => setOrderStatus(e.target.value)}
                  value={orderStatus}
                  name="status"
                >
                  <option value="Test Ride Booking">Test Ride Booking</option>
                  <option value="Pre-book">Pre-book</option>
                  <option value="Payment Received">Payment Received</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
              <button
                disabled={loading}
                onClick={submitHandler}
                className="btn btn-primary btn-block"
              >
                Update Status
              </button>
            </div>
          </div>
        </Fragment>
      </div>
    </div>
  );
}
