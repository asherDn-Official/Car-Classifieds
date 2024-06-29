import { Fragment, useEffect, useState } from "react";
import "../layouts/css/loginpage.css";
import "../../style.css";
import MetaData from "../layouts/MetaData";
import { clearAuthError, login } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useLocation, useNavigate, useNavigated } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.authState
  );

  const redirect = location.search ? "/" + location.search.split("=")[1] : "/";

  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  function logoutfunctionnewforlogin() {
    dispatch(logout);
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirect);
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
  }, [error, isAuthenticated, dispatch, navigate]);

  return (
    <Fragment>
      <MetaData title={`Login`} />
      <div>
        <div>
          <div className="loginpageflexmainconcept">
            <div className="loginpagemaindiv">
              <div className="loginbodyformloginpagdonthaveaccount4312">
                {/* <div className="loginbodybackgroungimage12">
                  <img
                    className="loginmobileversionhide12"
                    src="./images/Vector41.png"
                    alt=""
                  />
                  <img
                    className="logindesktopversionhide112"
                    src="./images/Vector42.png"
                    alt=""
                  />
                </div> */}
                <div className="Loginpahehgrw234784278423">
                  <div className="loginloginform">
                    <div className="loginwelcome122">Welcome</div>

                    <div className="loginpagelogindetails">Log in Details</div>
                    <form onSubmit={sumbitHandler} action="">
                      <div className="loginpageinputformbox23">
                        <input
                          type="text"
                          name="name"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="loginpageinputformbox23">
                        <input
                          type="password"
                          name="name"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button disable={loading}>Log in</button>
                      <div className="loginpageforgetpassword54">
                        <Link
                          onClick={logoutfunctionnewforlogin}
                          style={{ background: "transparent", color: "white" }}
                          to="/password/forgot"
                        >
                          Forgot Password
                        </Link>
                      </div>
                      <div className="loginpagdonthaveaccount43">
                        Don’t have an account ?{" "}
                        <Link style={{ background: "none" }} to="/register">
                          <a
                            style={{
                              background: "none",
                              color: "red",
                            }}
                            href=""
                          >
                            Signup here
                          </a>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
