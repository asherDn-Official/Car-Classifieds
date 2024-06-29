import { useDispatch, useSelector } from "react-redux";
// import "../css/productdetail.css";
import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../actions/productActions";
import Loader from "../Loader";
import MetaData from "../MetaData";

export default function ProductDetail() {
  const { loading, product } = useSelector((state) => state.productState);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={product.bikename} />
          <div>
            <div className="myacccountpagedivflexsectrion">
              <div className="myaccountpagewidthsection">
                <div>
                  {/* <!------------------------------About Section---------------------------> */}
                  <div className="myaccountpageaboutsection">
                    <img src="./images/Rectangle 26.png" alt="" />
                    <div className="myaccountpageaboutsectioncontent">
                      <div className="myaccountpageaboutheading">
                        My Account
                      </div>
                      <div className="myaccountaboutparagraph">
                        "RevNitro classNameified is your trusted destination for
                        selling pre-owned motorbikes. With our secure and
                        user-friendly platform, we make it easy to find the
                        right buyer for your bike. Simply leave your bike with
                        us at Pro Street, where our expert team conducts
                        thorough inspections and facilitates the sale based on
                        the vehicle's condition. We prioritize transparency and
                        reliability, ensuring a seamless experience for both
                        sellers and buyers."
                      </div>
                    </div>
                  </div>
                  {/* <!-------------------------------About Section--------------------------->

          <!----------------------------------Personall Section---------------------------> */}
                  <div className="myaccountmyaccountmaindivflex">
                    <div className="myaccountmyaccountpagemyaccountpagebubuttonmaindivss">
                      <div className="myaccountpagebubuttonmaindiv">
                        <div
                          className="myaccountpageindividualbutton"
                          id="focus"
                          onClick={personalbuttonclick}
                        >
                          <div>
                            <img
                              style={{ marginTop: "4px" }}
                              className="myaccountpageshow"
                              src="./images/mdi_account-outline (3).png"
                              alt=""
                            />
                            <img
                              style={{ marginTop: "4px" }}
                              className="myaccountpagehide"
                              src="./images/mdi_account-outline.png"
                              alt=""
                            />
                          </div>
                          <div className="LeftnVabariconmarginleftspace">
                            Personal&nbsp;Details
                          </div>
                        </div>
                        <div
                          className="myaccountpageindividualbutton"
                          id="focus"
                          onClick={mybookingbuttonclick}
                        >
                          <div>
                            <img
                              className="myaccountpageshow"
                              style={{ marginTop: "5px" }}
                              src="./images/memory_book (1).png"
                              alt=""
                            />
                            <img
                              style={{ marginTop: "4px" }}
                              className="myaccountpagehide"
                              src="./images/memory_book (2).png"
                              alt=""
                            />
                          </div>
                          <div className="LeftnVabariconmarginleftspace">
                            My&nbsp;Booking
                          </div>
                        </div>
                        <div
                          className="myaccountpageindividualbutton"
                          id="focus"
                          onClick={sellrequestbuttonclick}
                        >
                          <div>
                            <img
                              className="myaccountpageshow"
                              style={{ marginTop: "4px" }}
                              src="./images/ic_outline-sell (1).png"
                              alt=""
                            />
                            <img
                              style={{ marginTop: "4px" }}
                              className="myaccountpagehide"
                              src="./images/ic_outline-sell (2).png"
                              alt=""
                            />
                          </div>
                          <div className="LeftnVabariconmarginleftspace">
                            Sell&nbsp;Request
                          </div>
                        </div>
                        <div
                          className="myaccountpageindividualbutton"
                          id="focus"
                          onClick={documentdetailsclick}
                        >
                          <div>
                            <img
                              className="myaccountpageshow"
                              style={{ marginTop: "4px" }}
                              src="./images/teenyicons_text-document-alt-outline (1).png"
                              alt=""
                            />
                            <img
                              style={{ marginTop: "4px" }}
                              className="myaccountpagehide"
                              src="./images/teenyicons_text-document-alt-outline.png"
                              alt=""
                            />
                          </div>
                          <div className="LeftnVabariconmarginleftspace">
                            Document&nbsp;Details
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="myaccountpagerightareasection">
                      {/* <!--------------------------Owner Deatils-----------------------------------------> */}
                      <div className="ownersectionmyaccountpagehide">
                        <div className="myaccountpagersellerbikedeatils1">
                          Personal Details
                        </div>

                        <div className="myaccountpagerownerdeatilsflex">
                          <div>
                            <select
                              className="myaccountpageBrandname1"
                              name="Brandname"
                              id=""
                            >
                              <option value="">Owner</option>
                              <option value="">KTM</option>
                            </select>
                          </div>
                          <div>
                            <input
                              className="myaccountpageNameoftheOwner"
                              placeholder="Name*"
                              type="text"
                              name="Name*"
                            />
                          </div>
                          <div>
                            <input
                              className="myaccountpageNameoftheOwner"
                              placeholder="Email Id*"
                              type="email"
                              name="kilometer"
                            />
                          </div>
                          <div>
                            <input
                              className="myaccountpageNameoftheOwner"
                              placeholder="Mobile No*"
                              type="text"
                              name="kilometer"
                            />
                          </div>
                          <div>
                            <input
                              className="myaccountpageNameoftheOwner"
                              placeholder="Location*"
                              type="text"
                              name="kilometer"
                            />
                          </div>

                          <div className="myaccountpageownwersubmit">
                            <button>Submit</button>
                          </div>
                        </div>
                      </div>
                      {/* <!--------------------------Owner Deatils----------------------------------------->

              <!--------------------------My Bookingg-----------------------------------------> */}
                      <div className="bookingsectiondiv">
                        <div className="myaccountpagersellerbikedeatils1">
                          My Booking
                        </div>

                        <div className="myaccountpageomybookingsection">
                          <div className="myaccountpagebikemyaccoundcardn">
                            <div className="myaccountpagmyaccountbikephoto">
                              <img src="./images/Rectangle 95.png" alt="" />
                            </div>
                            <div>
                              <div className="myaccountpamycoountbikename">
                                KTM Duke 200
                              </div>
                              <div className="myaccountrange">
                                5000km | Petrol | 2020 | BS4
                              </div>
                              <div className="myaccountbookingstatus">
                                Successfully Booked
                              </div>
                              <div className="myacoountview">
                                <button>View</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!--------------------------My Bookingg----------------------------------------->

              <!--------------------------Sell Request-----------------------------------------> */}
                      <div className="sellrequestsectiondiv">
                        <div className="myaccountpagersellerbikedeatils1">
                          Sell Request
                        </div>

                        <div className="sellrequestsection">
                          <div className="bikesellrequest">
                            <div className="sellrequestbikephoto">
                              <img src="./images/Rectangle 95.png" alt="" />
                            </div>
                            <div>
                              <div className="sellrequestbikename">
                                KTM Duke 200
                              </div>
                              <div className="sellrequestrange">
                                5000km | Petrol | 2020 | BS4
                              </div>
                              <div className="sellrequeststatus">
                                Sell Request Pending
                              </div>
                              <div className="sellrequestview">
                                <button>View</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!--------------------------Sell Request----------------------------------------->

              <!--------------------------Document Details----------------------------------------->
              <!----------------------------RC Deatils----------------------------> */}
                      <div className="myaccountpamyc">
                        <div className="myaccountpagersellerbikedeatils1">
                          Document Details
                        </div>
                        <div className="documentdetailspagesection">
                          <div className="myaccountpageuploadrcbook">
                            Upload RC Book Photocopies
                          </div>

                          <div className="rcbookflex">
                            <div>
                              <div className="file-input">
                                <input
                                  type="file"
                                  name="file-input"
                                  id="file-input"
                                  className="file-input__input"
                                />
                                <label
                                  className="file-input__label"
                                  htmlFor="file-input"
                                >
                                  <img src="./images/Vector (38).png" alt="" />
                                  <span className="uploadimagecreatepost"></span>
                                </label>
                              </div>
                            </div>
                            <div>
                              <div className="file-input">
                                <input
                                  type="file"
                                  name="file-input"
                                  id="file-input"
                                  className="file-input__input"
                                />
                                <label
                                  className="file-input__label"
                                  htmlFor="file-input"
                                >
                                  <img src="./images/Vector (38).png" alt="" />
                                  <span className="uploadimagecreatepost"></span>
                                </label>
                              </div>
                            </div>
                            <div>
                              <div className="file-input">
                                <input
                                  type="file"
                                  name="file-input"
                                  id="file-input"
                                  className="file-input__input"
                                />
                                <label
                                  className="file-input__label"
                                  htmlFor="file-input"
                                >
                                  <img src="./images/Vector (38).png" alt="" />
                                  <span className="uploadimagecreatepost"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* <!----------------------------RC Deatils---------------------------->
                  <!----------------------------Insurance Deatils----------------------------> */}
                          <div className="myaccountpageuploadrcbook">
                            Upload Bike Insurance Photocopies
                          </div>

                          <div className="rcbookflex">
                            <div>
                              <div className="file-input">
                                <input
                                  type="file"
                                  name="file-input"
                                  id="file-input"
                                  className="file-input__input"
                                />
                                <label
                                  className="file-input__label"
                                  htmlFor="file-input"
                                >
                                  <img src="./images/Vector (38).png" alt="" />
                                  <span className="uploadimagecreatepost"></span>
                                </label>
                              </div>
                            </div>

                            <div>
                              <div className="file-input">
                                <input
                                  type="file"
                                  name="file-input"
                                  id="file-input"
                                  className="file-input__input"
                                />
                                <label
                                  className="file-input__label"
                                  htmlFor="file-input"
                                >
                                  <img src="./images/Vector (38).png" alt="" />
                                  <span className="uploadimagecreatepost"></span>
                                </label>
                              </div>
                            </div>
                            <div>
                              <div className="file-input">
                                <input
                                  type="file"
                                  name="file-input"
                                  id="file-input"
                                  className="file-input__input"
                                />
                                <label
                                  className="file-input__label"
                                  htmlFor="file-input"
                                >
                                  <img src="./images/Vector (38).png" alt="" />
                                  <span className="uploadimagecreatepost"></span>
                                </label>
                              </div>
                            </div>
                          </div>

                          {/* <!----------------------------Insurance Deatils---------------------------->
                  <!----------------------------Video Deatils----------------------------> */}
                          <div className="myaccountpageuploadrcbook">
                            Upload Bike Video with Owner
                          </div>

                          <div className="rcbookflex">
                            <div>
                              <div className="file-input">
                                <input
                                  type="file"
                                  name="file-input"
                                  id="file-input"
                                  className="file-input__input"
                                />
                                <label
                                  className="file-input__label"
                                  htmlFor="file-input"
                                >
                                  <img src="./images/Vector (38).png" alt="" />
                                  <span className="uploadimagecreatepost"></span>
                                </label>
                              </div>
                            </div>
                            <div>
                              <div className="file-input">
                                <input
                                  type="file"
                                  name="file-input"
                                  id="file-input"
                                  className="file-input__input"
                                />
                                <label
                                  className="file-input__label"
                                  htmlFor="file-input"
                                >
                                  <img src="./images/Vector (38).png" alt="" />
                                  <span className="uploadimagecreatepost"></span>
                                </label>
                              </div>
                            </div>
                          </div>

                          {/* <!----------------------------Video Deatils---------------------------->
                  <!----------------------------Bike Images Deatils----------------------------> */}
                          <div className="myaccountpageuploadrcbook">
                            Upload Bike Images
                          </div>

                          <div className="rcbookflex">
                            <div>
                              <div className="file-input">
                                <input
                                  type="file"
                                  name="file-input"
                                  id="file-input"
                                  className="file-input__input"
                                />
                                <label
                                  className="file-input__label"
                                  htmlFor="file-input"
                                >
                                  <img src="./images/Vector (38).png" alt="" />
                                  <span className="uploadimagecreatepost"></span>
                                </label>
                              </div>
                            </div>
                            <div>
                              <div className="file-input">
                                <input
                                  type="file"
                                  name="file-input"
                                  id="file-input"
                                  className="file-input__input"
                                />
                                <label
                                  className="file-input__label"
                                  htmlFor="file-input"
                                >
                                  <img src="./images/Vector (38).png" alt="" />
                                  <span className="uploadimagecreatepost"></span>
                                </label>
                              </div>
                            </div>
                            <div>
                              <div className="file-input">
                                <input
                                  type="file"
                                  name="file-input"
                                  id="file-input"
                                  className="file-input__input"
                                />
                                <label
                                  className="file-input__label"
                                  htmlFor="file-input"
                                >
                                  <img src="./images/Vector (38).png" alt="" />
                                  <span className="uploadimagecreatepost"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* <!----------------------------Bike Images Deatils----------------------------> */}
                          <div className="myaccountpageownwersubmits">
                            <button>Submit</button>
                          </div>
                        </div>
                      </div>
                      {/* <!--------------------------Document Details-----------------------------------------> */}
                    </div>
                  </div>
                  {/* <!----------------------------------Personall Section---------------------------> */}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

// var bikeDeatilsdiv = document.getElementById("bikeDeatilsdiv");
// var inspectionDeatildiv = document.getElementById("inspectionDeatildiv");
// var otherbikeDeatilsdiv = document.getElementById("otherbikeDeatilsdiv");
// var imagefirsthide = document.getElementById("imagefirsthide");
// var imagesecondhide = document.getElementById("imagesecondhide");
// var imagethirdhide = document.getElementById("imagethirdhide");
// var imagefourhide = document.getElementById("imagefourhide");

function bikedetails() {
  var bikeDeatilsdiv = document.getElementById("bikeDeatilsdiv");
  var inspectionDeatildiv = document.getElementById("inspectionDeatildiv");
  var otherbikeDeatilsdiv = document.getElementById("otherbikeDeatilsdiv");
  // var imagefirsthide = document.getElementById("imagefirsthide");
  // var imagesecondhide = document.getElementById("imagesecondhide");
  // var imagethirdhide = document.getElementById("imagethirdhide");
  // var imagefourhide = document.getElementById("imagefourhide");
  bikeDeatilsdiv.style.display = "block";
  inspectionDeatildiv.style.display = "none";
  otherbikeDeatilsdiv.style.display = "none";
}
function inspectiondetails() {
  var bikeDeatilsdiv = document.getElementById("bikeDeatilsdiv");
  var inspectionDeatildiv = document.getElementById("inspectionDeatildiv");
  var otherbikeDeatilsdiv = document.getElementById("otherbikeDeatilsdiv");
  // var imagefirsthide = document.getElementById("imagefirsthide");
  // var imagesecondhide = document.getElementById("imagesecondhide");
  // var imagethirdhide = document.getElementById("imagethirdhide");
  // var imagefourhide = document.getElementById("imagefourhide");
  bikeDeatilsdiv.style.display = "none";
  inspectionDeatildiv.style.display = "block";
  otherbikeDeatilsdiv.style.display = "none";
}
function otherdeatils() {
  var bikeDeatilsdiv = document.getElementById("bikeDeatilsdiv");
  var inspectionDeatildiv = document.getElementById("inspectionDeatildiv");
  var otherbikeDeatilsdiv = document.getElementById("otherbikeDeatilsdiv");
  // var imagefirsthide = document.getElementById("imagefirsthide");
  // var imagesecondhide = document.getElementById("imagesecondhide");
  // var imagethirdhide = document.getElementById("imagethirdhide");
  // var imagefourhide = document.getElementById("imagefourhide");
  bikeDeatilsdiv.style.display = "none";
  inspectionDeatildiv.style.display = "none";
  otherbikeDeatilsdiv.style.display = "block";
}
function firstimagehide() {
  // var bikeDeatilsdiv = document.getElementById("bikeDeatilsdiv");
  // var inspectionDeatildiv = document.getElementById("inspectionDeatildiv");
  // var otherbikeDeatilsdiv = document.getElementById("otherbikeDeatilsdiv");
  var imagefirsthide = document.getElementById("imagefirsthide");
  var imagesecondhide = document.getElementById("imagesecondhide");
  var imagethirdhide = document.getElementById("imagethirdhide");
  var imagefourhide = document.getElementById("imagefourhide");
  imagefirsthide.style.display = "block";
  imagesecondhide.style.display = "none";
  imagethirdhide.style.display = "none";
  imagefourhide.style.display = "none";
}

function secondimagehide() {
  // var bikeDeatilsdiv = document.getElementById("bikeDeatilsdiv");
  // var inspectionDeatildiv = document.getElementById("inspectionDeatildiv");
  // var otherbikeDeatilsdiv = document.getElementById("otherbikeDeatilsdiv");
  var imagefirsthide = document.getElementById("imagefirsthide");
  var imagesecondhide = document.getElementById("imagesecondhide");
  var imagethirdhide = document.getElementById("imagethirdhide");
  var imagefourhide = document.getElementById("imagefourhide");
  imagefirsthide.style.display = "none";
  imagesecondhide.style.display = "block";
  imagethirdhide.style.display = "none";
  imagefourhide.style.display = "none";
}
function thirdimagehide() {
  // var bikeDeatilsdiv = document.getElementById("bikeDeatilsdiv");
  // var inspectionDeatildiv = document.getElementById("inspectionDeatildiv");
  // var otherbikeDeatilsdiv = document.getElementById("otherbikeDeatilsdiv");
  var imagefirsthide = document.getElementById("imagefirsthide");
  var imagesecondhide = document.getElementById("imagesecondhide");
  var imagethirdhide = document.getElementById("imagethirdhide");
  var imagefourhide = document.getElementById("imagefourhide");
  imagefirsthide.style.display = "none";
  imagesecondhide.style.display = "none";
  imagethirdhide.style.display = "block";
  imagefourhide.style.display = "none";
}
function fourthimagehide() {
  // var bikeDeatilsdiv = document.getElementById("bikeDeatilsdiv");
  // var inspectionDeatildiv = document.getElementById("inspectionDeatildiv");
  // var otherbikeDeatilsdiv = document.getElementById("otherbikeDeatilsdiv");
  var imagefirsthide = document.getElementById("imagefirsthide");
  var imagesecondhide = document.getElementById("imagesecondhide");
  var imagethirdhide = document.getElementById("imagethirdhide");
  var imagefourhide = document.getElementById("imagefourhide");
  imagefirsthide.style.display = "none";
  imagesecondhide.style.display = "none";
  imagethirdhide.style.display = "none";
  imagefourhide.style.display = "block";
}

function addtowishlist() {
  alert("Add to Wishlist");
}

function addlistclick() {
  alert("Hii");
}
function sharebikedetails() {
  alert("Share Button");
}
