import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";

export default function CheckoutSteps({ shipping, confirmOrder, payment }) {
  return (
    <div>
      <div id="checkoutdivhideformobilediv">
        <div className="checkout-progress d-flex justify-content-center mt-5">
          {shipping ? (
            // <Link to="/shipping">
            <div>
              <div className="triangle2-active"></div>
              <div className="step active-step">Shipping Info</div>
              <div className="triangle-active"></div>
            </div>
          ) : (
            // </Link>
            // <Link to="/shipping">
            <div>
              <div className="triangle2-incomplete"></div>
              <div className="step incomplete">Shipping Info</div>
              <div className="triangle-incomplete"></div>
            </div>

            // </Link>
          )}

          {confirmOrder ? (
            // <Link to="/order/confirm">
            <div>
              <div className="triangle2-active"></div>
              <div className="step active-step">Confirm Order</div>
              <div className="triangle-active"></div>
            </div>
          ) : (
            // </Link>
            // <Link to="/order/confirm">
            <div>
              <div className="triangle2-incomplete"></div>
              <div className="step incomplete">Confirm Order</div>
              <div className="triangle-incomplete"></div>
            </div>

            // </Link>
          )}

          {payment ? (
            // <Link to="/payment">
            <div>
              <div className="triangle2-active"></div>
              <div className="step active-step">Order Success</div>
              <div className="triangle-active"></div>
            </div>
          ) : (
            // </Link>
            // <Link to="/payment">
            <div>
              <div className="triangle2-incomplete"></div>
              <div className="step incomplete">Order Success</div>
              <div className="triangle-incomplete"></div>
            </div>

            // </Link>
          )}
        </div>
      </div>
    </div>
  );
}

<div></div>;
