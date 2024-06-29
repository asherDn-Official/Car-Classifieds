import "../layouts/css/loginpage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, clearAuthError } from "../../actions/userActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import MetaData from "../layouts/MetaData";
import axios from "axios";
import { logout } from "../../actions/userActions";

export default function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    dispatch(logout);
  };
  const handleShow = () => setShow(true);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const [avatar, setAvatar] = useState("");

  // const [avatartPreview, stAvatarPreview] = useState("/images/profile.jpg");

  const [otp, setOtp] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.authState
  );

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      // reader.onload = () => {
      //   if (reader.readyState === 2) {
      //     stAvatarPreview(reader.result);
      //     setAvatar(e.target.files[0]);
      //   }
      // };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  function checkCookie(name) {
    // Split all cookies by semicolon and space to get individual cookie pairs
    const cookies = document.cookie
      .split("; ")
      .map((cookie) => cookie.split("="));
    // Iterate through cookie pairs
    for (const [cookieName, cookieValue] of cookies) {
      // If the current cookie's name matches the one we're looking for
      if (cookieName === name) {
        return cookieValue; // Return the value of the cookie
      }
    }
    return null; // Return null if the cookie doesn't exist
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    // formData.append("avatar", avatar);

    const DISPATCHVALUE = dispatch(register(formData));
    console.log("DISPATCHVALUE", DISPATCHVALUE);

    // DISPATCHVALUE.then((result) => {
    //   console.log("result", result);
    //   handleShow();
    // });

    // if (isAuthenticated) {
    //   handleShow();
    // }
    const token = checkCookie("token");
    // If 'token' cookie exists, run the code inside the if block

    console.log("errorss", error);
    if (document.cookie) {
      // handleShow();
    }
  };

  const signUpButton = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/verify", { otp: otp });
      if (response.data.success === true) {
        // alert("Account Created Sucessfully click ok to Homepage");
        toast("Account Created Successfully", {
          type: "success",
          position: toast.POSITION.BOTTOM_CENTER,
        });
        navigate("/");
      } else {
        // alert("OTP Incorrect. Check and Try Again.");
        toast("OTP Incorrect Check and Try Again", {
          type: "error",
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      handleShow();
      // return;
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

  const [isCheckedregisterbutton, setIsCheckedButtonregsiter] = useState(false);

  const handleCheckboxChangeForResgidter = () => {
    setIsCheckedButtonregsiter(!isCheckedregisterbutton);
  };

  return (
    <div>
      <MetaData title={"Register"} />
      <div className="signupppageflexmainconcept">
        <div className="signupspagemaindiv">
          <div className="signupbodylast">
            {/* <div className="backgroungimage">
              <img
                className="mobileversionhide"
                src="./images/Vector41.png"
                alt=""
              />
              <img
                className="desktopversionhide"
                src="./images/Vector42.png"
                alt=""
              />
            </div> */}

            <div className="signupform1">
              <div className="signupformwelcome1">Welcome</div>

              <div className="signupformdetails1">SignUp</div>
              <form onSubmit={(e) => submitHandler(e)} action="">
                <div className="formdivflexsigninform">
                  <div className="signupforminputformbox12">
                    <input
                      type="text"
                      name="name"
                      onChange={onChange}
                      placeholder="User Name"
                      required
                    />
                  </div>
                  <div className="signupforminputformbox12">
                    <input
                      type="email"
                      name="email"
                      onChange={onChange}
                      placeholder="Email Id"
                      required
                    />
                  </div>
                  <div className="signupforminputformbox12">
                    <input
                      type="password"
                      name="password"
                      onChange={onChange}
                      placeholder="Password"
                      required
                    />
                  </div>
                  {/* 
                <div class="form-group">
                  <label for="avatar_upload">Avatar</label>
                  <div class="d-flex align-items-center">
                    <div>
                      <figure class="avatar mr-3 item-rtl">
                        <img
                          src={avatartPreview}
                          class="rounded-circle"
                          alt="image"
                        />
                      </figure>
                    </div>
                    <div class="custom-file">
                      <input
                        type="file"
                        name="avatar"
                        class="custom-file-input"
                        id="customFile"
                        onChange={onChange}
                      />
                      <label class="custom-file-label" for="customFile">
                        Choose Avatar
                      </label>
                    </div>
                  </div>
                </div> */}

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Please Enter OTP</Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                    //  style={{ paddingLeft: "30px" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          paddingBottom: "20px",
                        }}
                      >
                        <div className="signupforminputformbox12">
                          <input
                            type="text"
                            name="emailPassword"
                            // onChange={onChange}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                          />
                        </div>
                      </div>
                      <div className="resgiterPagedivflex">
                        {/* Code here */}
                        <div>
                          <label>
                            <div className="Disapaldsyferlcgfretheregsiter">
                              <div>
                                <input
                                  id="Checkboxclickbuttonforresgiter"
                                  type="checkbox"
                                  checked={isCheckedregisterbutton}
                                  onChange={handleCheckboxChangeForResgidter}
                                />
                              </div>
                              <div
                                style={{ textAlign: "center" }}
                                className="pLEASEcHECKTHEDIV"
                              >
                                I Accept all the terms and condition
                              </div>
                            </div>

                            <div className="resgiterpagecheckstyle">
                              <h1
                                className="policyheading"
                                style={{ fontSize: "25px" }}
                              >
                                Revnitro Policy
                              </h1>
                              <h3
                                className="policy-sub-heading"
                                style={{ marginTop: "20px" }}
                              >
                                Privacy Policy
                              </h3>
                              <p className="policy-paragraphics">
                                At RevNitro Classifieds, safeguarding your
                                privacy is paramount. This Privacy Policy
                                elucidates our practices concerning the
                                collection, use, and protection of your
                                information when utilizing our classifieds
                                platform to list Cars for sale. By utilizing our
                                website, you implicitly consent to the
                                collection and utilization of your information
                                as delineated herein.
                              </p>
                              <h3 className="policy-sub-heading">
                                Collection of Information:
                              </h3>

                              <p className="policy-paragraphics">
                                When you submit a Cars for sale on our platform,
                                we gather personal data such as your name,
                                contact information, and Cars specifications to
                                facilitate the sales process. During the
                                inspection phase, additional information about
                                the Car's condition and specifications may be
                                collected.
                              </p>
                              <h3 className="policy-sub-heading">
                                Use of Information:
                              </h3>

                              <p className="policy-paragraphics">
                                The information provided is utilized solely for
                                the verification of listings, facilitating
                                communication between RevNitro Classifieds and
                                you as the seller, and coordinating the sale
                                process. We do not disclose your contact
                                information to potential buyers until the sale
                                is finalized.
                              </p>
                              <h3 className="policy-sub-heading">
                                Storage and Security:
                              </h3>

                              <p className="policy-paragraphics">
                                Your personal information is securely stored in
                                our database and is only accessible to
                                authorized personnel who require access for the
                                purpose of facilitating the sale process.
                                Rigorous security measures are employed to
                                protect your information from unauthorized
                                access, disclosure, alteration, or destruction.
                              </p>
                              <h3 className="policy-sub-heading">
                                Margin and Payment:
                              </h3>

                              <p className="policy-paragraphics">
                                RevNitro Classifieds retains a margin of each
                                sale, as stipulated in the Memorandum of
                                Understanding (MOM) signed between you and us.
                                Upon the successful conclusion of the sale, we
                                promptly remit the agreed-upon amount to you,
                                deducting our margin and any applicable fees.
                              </p>
                              <h3 className="policy-sub-heading">
                                Right to Collect Cars:
                              </h3>

                              <p className="policy-paragraphics">
                                You retain the right to collect your Car from us
                                with three days' prior notice. Upon receiving
                                your request, we will promptly arrange for the
                                return of your Car and any accompanying
                                documents.
                              </p>
                              <h3 className="policy-sub-heading">
                                Communication between Buyer and Seller:
                              </h3>

                              <p className="policy-paragraphics">
                                As an intermediary, we manage all communication
                                between buyers and sellers. Direct communication
                                between parties is prohibited until the sale is
                                finalized. After the sale is completed, the
                                buyer may contact you directly to request a No
                                Objection Certificate (NOC) for registration
                                purposes.
                              </p>
                              <h3 className="policy-sub-heading">
                                Third-Party Links:
                              </h3>

                              <p className="policy-paragraphics">
                                Our website may contain links to third-party
                                websites or services. We are not responsible for
                                the privacy practices or content of these
                                third-party sites. We recommend reviewing the
                                privacy policies of these websites before
                                providing any personal information.
                              </p>
                              <h3 className="policy-sub-heading">
                                Changes to Privacy Policy:
                              </h3>

                              <p className="policy-paragraphics">
                                We reserve the right to update or modify this
                                Privacy Policy at any time. Any changes will be
                                reflected on this page, and we encourage you to
                                review it periodically for updates.
                              </p>
                              <h3 className="policy-sub-heading">
                                Contact Us:
                              </h3>

                              <p className="policy-paragraphics">
                                If you have any inquiries or concerns regarding
                                our Privacy Policy or the handling of your
                                personal information, please contact us at
                                [contact email or phone number]. By utilizing
                                our platform to list Cars for sale, you agree to
                                abide by the terms outlined in this Privacy
                                Policy. Thank you for entrusting RevNitro
                                Classifieds with your personal information.
                              </p>
                            </div>
                          </label>
                          {isCheckedregisterbutton && (
                            <div className="butttforthamindeivnflwex">
                              <button
                                className="Modealbpopifnbutton"
                                onClick={(e) => signUpButton(e)}

                                //  disabled={loading}
                              >
                                Sign up
                              </button>
                              {/* {console.log("Cookie", document.cookie)} */}
                            </div>
                          )}
                        </div>

                        {/* Code here */}
                      </div>
                    </Modal.Body>
                  </Modal>

                  <button disabled={loading}>Sign up</button>
                  <div className="signupformdonthaveaccount12">
                    Already have an account ?
                    <Link to="/login" style={{ background: "none" }}>
                      <a style={{ background: "none", color: "red" }} href="">
                        &nbsp;Log in
                      </a>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
