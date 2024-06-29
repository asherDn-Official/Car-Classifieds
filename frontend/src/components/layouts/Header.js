import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./css/navbar.css";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { DropdownButton, Dropdown, Image } from "react-bootstrap";
import { logout } from "../../actions/userActions";

export default function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.authState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const LogoutHandler = () => {
    dispatch(logout);
  };

  const [isVisiblesdfdsf, setIsVisttibleswe234] = useState(false);

  const toggleVisibility2323edrfe = () => {
    setIsVisttibleswe234(!isVisiblesdfdsf);
  };
  const [isVisibldfesdfdsfdsadff, setIsdssdVdsddisttibleswe234] =
    useState(false);

  const toggleVfsdfsf2323edrfe = () => {
    setIsdssdVdsddisttibleswe234(!isVisibldfesdfdsfdsadff);
  };

  const [isVisiblefOthemaninnavbar, setIsVisiblefo3244rthwsmainfiv] =
    useState(false);

  const toggleVisibility = () => {
    setIsVisiblefo3244rthwsmainfiv(!isVisiblefOthemaninnavbar);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      {/* <div className="Navbardivareawodth">
        <div className="Navbardicfelxsecirer">
          <div>
            <div className="newNavbarswidthflex">
              <div className="firstnavbarwidthdiv">
                <div className="fordesktop">
                  <div className="NavbARDIV">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                      <i className="fas fa-bars"></i>
                    </label>
                    <Link
                      style={{ background: "none", cursor: "pointer" }}
                      to={"/"}
                    >
                      <label
                        className="NavbarLOGO"
                        style={{ background: "none", cursor: "pointer" }}
                      >
                        <img src="/images/logo.png" alt="no image" />
                      </label>
                    </Link>
                    <ul>
                      <li>
                        <a href="#">Book Service</a>
                      </li>
                      <li>
                        <a href="https://revnitro.com/">Blogs</a>
                      </li>
                      <li>
                        <a href="https://revnitro.com/">Course</a>
                      </li>
                      <li>
                        <a href="https://revnitro.com/">Forum</a>
                      </li>
                      <li>
                        <a href="https://revnitro.com/">Team</a>
                      </li>

                      <li>
                        <a href="#">Bike Resale</a>
                      </li>
                      <li>
                        <a href="#">Shop</a>
                      </li>

                      <li>
                        {isAuthenticated ? (
                          <Dropdown className="d-inline">
                            <Dropdown.Toggle
                              variant="default text-white pr-5"
                              id="dropdown-basic"
                            >
                              <span>{user.name}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {user.role === "admin" && (
                                <Dropdown.Item
                                  style={{
                                    padding: "0px",
                                    margin: "0px",
                                    lineHeight: "40px",
                                    paddingLeft: "25px",
                                    color: "#000",
                                  }}
                                  onClick={() => {
                                    navigate("admin/dashboard");
                                  }}
                                  className="text-dark"
                                >
                                  Dashboard
                                </Dropdown.Item>
                              )}

                              <Dropdown.Item
                                style={{
                                  padding: "0px",
                                  margin: "0px",
                                  lineHeight: "40px",
                                  paddingLeft: "25px",
                                }}
                                onClick={LogoutHandler}
                                className="text-danger"
                              >
                                Logout
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        ) : (
                          <Link to={"/login"}>Login</Link>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mobilefelesvccdwidth">
              <div className="mobilevsesiosdnwidthhdiv">
                <div className="formobile">
                  <div className="mobilef54cdwidth">
                    <div className="navbarDi24243ervsa">
                      <div className="dropdo344wn4234">
                        <div className="dr34324opdownflexconcept">
                          <div>
                            <button
                              className="dro434pbtn4342"
                              onClick={toggleVisibility}
                            >
                              <span className="namechangingsection">Home</span>{" "}
                              &nbsp;
                              <i className="fa fa-caret-down"></i>
                            </button>
                          </div>
                          <div>
                            <Link to="/">
                              <img src="/images/Group64.png" alt="" />
                            </Link>
                          </div>
                        </div>

                        {isVisiblefOthemaninnavbar && (
                          <div>
                            <div className="drop234downwn-content">
                              <Link>Blog</Link>
                              <Link>Forum</Link>
                              <Link>Course</Link>
                              <Link>Classified</Link>
                              <Link>Shop</Link>
                              <Link>Team</Link>

                              {isAuthenticated ? (
                                <Link>
                                  <span>
                                    {user.name} &nbsp; &nbsp;
                                    <span
                                      style={{ color: "red" }}
                                      onClick={LogoutHandler}
                                    >
                                      Logout
                                    </span>
                                  </span>
                                </Link>
                              ) : (
                                <Link to={"/login"}>Login</Link>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <nav>
        <Link style={{ background: "black" }} to="/" className="title">
          <img
            className="ImageNavbrsixecontrol"
            src="/images/footerlogo.webp"
            alt=""
          />
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="https://revnitro.com/">Home</NavLink>
          </li>
          <li>
            <NavLink to="https://blog.revnitro.com/">Blog</NavLink>
          </li>
          <li>
            <NavLink className="actived" to="/">
              Classifieds
            </NavLink>
          </li>
          <li>
            <NavLink to="https://revnitro.com/commingsoon.html">Shop</NavLink>
          </li>
          <li>
            <NavLink to="https://forum.revnitro.com/" target="_blank">
              Forum
            </NavLink>
          </li>
          <li>
            <NavLink to="https://revnitro.com/car&bike-event.html">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="https://revnitro.com/team.html">Team</NavLink>
          </li>
          <li>
            <NavLink to="https://forms.revnitro.com/Contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
