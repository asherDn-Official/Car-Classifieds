import { Fragment, useState } from "react";
import MetaData from "../layouts/MetaData";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { saveShippingInfo, shippingInfo } from "../../slicers/cartSlice";
import CheckoutSteps from "./CheckoutsSteps";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { set } from "mongoose";
export const validateShipping = (shippingInfo, navigate) => {
  if (
    !shippingInfo.address ||
    !shippingInfo.city ||
    !shippingInfo.phoneNo ||
    !shippingInfo.countrystate ||
    !shippingInfo.postalCode
    // !shippingInfo.country
  ) {
    toast.error("Please fill the Details", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    navigate("/shipping");
  }
};

export default function Shipping() {
  const { shippingInfo = {} } = useSelector((state) => state.cartState);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
  const [countrystate, setCountrystate] = useState(shippingInfo.countrystate);
  const [country, setCountry] = useState(shippingInfo.country);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingInfo({
        address,
        city,
        phoneNo,
        postalCode,
        country,
        countrystate,
      })
    );
    navigate("/order/confirm/");
  };

  return (
    <Fragment>
      <MetaData title={"Booking Info"} />
      <CheckoutSteps shipping />

      <div className="row wrapper" style={{ width: "100%" }}>
        <div className="col-10 col-lg-5">
          <form onSubmit={submitHandler} className="shadow-lg">
            <h1 className="mb-4">Booking Info</h1>
            <div className="form-group">
              <label htmlFor="address_field">Address</label>
              <input
                type="text"
                id="address_field"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="city_field">City</label>
              <input
                type="text"
                id="city_field"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone_field">Phone No</label>
              <input
                type="phone"
                id="phone_field"
                className="form-control"
                minLength={10}
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="postal_code_field">Postal Code</label>
              <input
                type="text"
                id="postal_code_field"
                className="form-control"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
                max={2}
              />
            </div>

            <div className="form-group">
              <label htmlFor="state_field">State</label>
              <input
                type="text"
                id="postal_code_field"
                className="form-control"
                value={countrystate}
                onChange={(e) => setCountrystate(e.target.value)}
                required
              />
            </div>

            {/* <div className="form-group">
              <label htmlFor="country_field">Country</label>
              <select
                id="country_field"
                class="form-control"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                {countryList.map((country, i) => (
                  <option value={country.name} key={i}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div> */}

            <button
              type="submit2"
              className="btn update-btn btn-block mt-4 mb-3"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
