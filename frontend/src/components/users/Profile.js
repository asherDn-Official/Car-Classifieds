import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";
import NewSlider from "../layouts/NewSlider";
import { logout } from "../../actions/userActions";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.authState);
  const LogoutHandler = () => {
    dispatch(logout);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/BuyPage", { state: { scrollTo: "content-section" } });
  };

  return (
    <div>
      <MetaData title={"My Account"} />
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
        <div
          className="row justify-content-center mt-5 user-info"
          style={{ paddingBottom: "60px" }}
        >
          <div className="col-12 col-md-5" id="mobileSeceenPaddingAddd">
            <h4 style={{ color: "#000", fontWeight: "500" }}>Full Name</h4>
            <p>{user.name}</p>

            <h4 style={{ color: "#000", fontWeight: "500" }}>Email Address</h4>
            <p>{user.email}</p>

            <h4 style={{ color: "#000", fontWeight: "500" }}>Joined</h4>
            <p>{String(user.createdAt).substring(0, 10)}</p>

            <h4 style={{ color: "#000", fontWeight: "500" }}>Contact</h4>
            <p>+91 8015927292</p>
            <p>
              <a
                style={{ background: "none" }}
                href="mailto:classifieds@revnitro.com<"
              >
                classifieds@revnitro.com
              </a>
            </p>

            <Link
              to="/myprofile/update"
              className="btn btn-primary btn-block mt-3"
            >
              Edit Profile
            </Link>

            {/* <Link to="/orders" className="btn btn-success btn-block mt-3">
              My Orders
            </Link> */}

            <Link
              to="/myprofile/update/password"
              className="btn btn-success btn-block mt-3"
            >
              Change Password
            </Link>

            {isAuthenticated && user.role === "admin" && (
              <Link
                to="/admin/dashboard"
                className="btn btn-warning btn-block mt-3"
              >
                Admin Dashboard
              </Link>
            )}

            <Link
              onClick={LogoutHandler}
              className="btn btn-danger btn-block mt-3"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
