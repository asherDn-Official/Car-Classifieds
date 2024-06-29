import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";
export default function OrderSuccess() {
  return (
    <div id="OrderPageMaindivpaddbis">
      <MetaData title={"Order Sucess"} />
      <div className="row justify-content-center" style={{ width: "100%" }}>
        <div className="col-12 mt-5 text-center">
          <img
            id="OrderSucrswssjImagwdf"
            src="/images/success.png"
            alt="Order Success"
            width="200"
            height="200"
          />

          <h2 id="oeddsucewsdhbjdghsd">
            Your Order has been placed successfully.
          </h2>

          <Link to="/orders" style={{ background: "none" }}>
            Go to Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
