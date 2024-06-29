import React from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

export default function NewSlider() {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;
  const { isAuthenticated, user } = useSelector((state) => state.authState);
  const LogoutHandler = () => {
    dispatch(logout);
  };

  const getLinkStyle = (path) => {
    return currentPath === path ? { border: "2px solid #C60937" } : {}; // Change 'red' to your desired color
  };
  return (
    <div>
      <div className="Bannericonflexdivbdwg2344">
        <Link to="/">
          <div className="Classhniehfnewrjpfjjsfh" style={getLinkStyle("/")}>
            <div className="hdgvsgxzcgvf2g324u">
              <img src="/images/flowbite_home-solid.png" alt="" />
            </div>
            <div className="Honehjgdvhuhsduhff">Home</div>
          </div>
        </Link>

        <Link to="/BuyPage">
          <div
            className="Classhniehfnewrjpfjjsfh"
            style={getLinkStyle("/BuyPage")}
          >
            <div className="hdgvsgxzcgvf2g324u">
              <img src="/images/mdi_cart.png" alt="" />
            </div>
            <div className="Honehjgdvhuhsduhff">Buy</div>
          </div>
        </Link>

        <Link to="/sellbike">
          <div
            className="Classhniehfnewrjpfjjsfh"
            style={getLinkStyle("/sellbike")}
          >
            <div className="hdgvsgxzcgvf2g324u">
              <img src="/images//ic_round-sell.png" alt="" />
            </div>
            <div className="Honehjgdvhuhsduhff">Sell</div>
          </div>
        </Link>
        <Link to="/orders">
          <div
            className="Classhniehfnewrjpfjjsfh"
            style={getLinkStyle("/orders")}
          >
            <div className="hdgvsgxzcgvf2g324u">
              <img src="/images/ordersICON.png" alt="" />
            </div>
            <div className="Honehjgdvhuhsduhff">Orders</div>
          </div>
        </Link>

        <Link to="/mywishlists">
          <div
            className="Classhniehfnewrjpfjjsfh"
            style={getLinkStyle("/mywishlists")}
          >
            <div className="hdgvsgxzcgvf2g324u">
              <img src="/images/ph_heart-fill.png" alt="" />
            </div>
            <div className="Honehjgdvhuhsduhff">Wishlist</div>
          </div>
        </Link>

        <Link to="/PolicyPage">
          <div
            className="Classhniehfnewrjpfjjsfh"
            style={getLinkStyle("/PolicyPage")}
          >
            <div className="hdgvsgxzcgvf2g324u">
              <img src="/images/fluent_notepad-32-filled.png" alt="" />
            </div>
            <div className="Honehjgdvhuhsduhff">Policy</div>
          </div>
        </Link>

        <Link to="/myprofile">
          <div
            className="Classhniehfnewrjpfjjsfh"
            style={getLinkStyle("/myprofile")}
          >
            <div className="hdgvsgxzcgvf2g324u">
              <img src="/images/Pofileohptodp.png" alt="" />
            </div>
            <div className="Honehjgdvhuhsduhff">
              {/* {isAuthenticated ? `${user.name.slice(0, 7)}..` : "Login"} */}
              {isAuthenticated
                ? user.name.length < 8
                  ? `${user.name.slice(0, 7)}`
                  : `${user.name.slice(0, 7)}..`
                : "Login"}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
