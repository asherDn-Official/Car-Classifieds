// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateProfile, clearAuthError } from "../../actions/userActions";
// import { toast } from "react-toastify";
// import { clearUpdateProfile } from "../../slicers/authSlice";
// import { orderDetail as orderDetailAction } from "../../actions/orderActions";
// import { Link, useParams } from "react-router-dom";

// function MyAccountPage() {
//   // const { error, user , isUpdated } = useSelector((state) => state.authState);
//   const { orderDetail, loading } = useSelector((state) => state.orderState);
//   const {
//     shippingInfo = {},
//     user = {},
//     orderStatus = "Processing",
//     orderItems = [],
//     totalPrice = 0,
//     paymentInfo = {},
//   } = orderDetail;

//   const isPaid =
//     paymentInfo && paymentInfo.status === "succeeded" ? true : false;

//   const { id } = useParams();

//   useEffect(() => {
//     dispatch(orderDetailAction(id));
//   }, [id]);

//   // const { user } = useSelector((state) => state.authState);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const dispatch = useDispatch();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     dispatch(updateProfile(formData));
//   };

//   useEffect(() => {
//     if (user) {
//       setName(user.name);
//       setEmail(user.email);
//     }

//     if (isUpdated) {
//       toast("Profile Updated Successfully", {
//         type: "success",
//         position: toast.POSITION.BOTTOM_CENTER,
//         onOpen: () => dispatch(clearUpdateProfile()),
//       });
//       return;
//     }

//     if (error) {
//       toast(error, {
//         position: toast.POSITION.BOTTOM_CENTER,
//         type: "error",
//         onOpen: () => {
//           dispatch(clearAuthError);
//         },
//       });
//       return;
//     }
//   }, [user, isUpdated, error, dispatch]);

//   return (
//     <div>
//       <div className="myacccountpagedivflexsectrion">
//         <div className="myaccountpagewidthsection">
//           <div>
//             {/* <!------------------------------About Section---------------------------> */}
//             <div className="myaccountpageaboutsection">
//               <img src="/images/Rectangle26.png" alt="" />
//               <div className="myaccountpageaboutsectioncontent">
//                 <div className="myaccountpageaboutheading">My Account</div>
//                 <div className="myaccountaboutparagraph">
//                   "RevNitro classNameified is your trusted destination for
//                   selling pre-owned motorbikes. With our secure and
//                   user-friendly platform, we make it easy to find the right
//                   buyer for your bike. Simply leave your bike with us at Pro
//                   Street, where our expert team conducts thorough inspections
//                   and facilitates the sale based on the vehicle's condition. We
//                   prioritize transparency and reliability, ensuring a seamless
//                   experience for both sellers and buyers."
//                 </div>
//               </div>
//             </div>
//             {/* <!-------------------------------About Section--------------------------->

//             <!----------------------------------Personall Section---------------------------> */}
//             <div className="myaccountmyaccountmaindivflex">
//               <div className="myaccountmyaccountpagemyaccountpagebubuttonmaindivss">
//                 <div className="myaccountpagebubuttonmaindiv">
//                   <div
//                     className="myaccountpageindividualbutton"
//                     id="focus"
//                     onClick={personalbuttonclick}
//                   >
//                     <div>
//                       <img
//                         style={{ marginTop: "4px" }}
//                         className="myaccountpageshow"
//                         src="./images/mdi_account-outline (3).png"
//                         alt=""
//                       />
//                       <img
//                         style={{ marginTop: "4px" }}
//                         className="myaccountpagehide"
//                         src="./images/mdi_account-outline.png"
//                         alt=""
//                       />
//                     </div>
//                     <div className="LeftnVabariconmarginleftspace">
//                       Personal&nbsp;Details
//                     </div>
//                   </div>
//                   <div
//                     className="myaccountpageindividualbutton"
//                     id="focus"
//                     onClick={mybookingbuttonclick}
//                   >
//                     <div>
//                       <img
//                         className="myaccountpageshow"
//                         style={{ marginTop: "5px" }}
//                         src="./images/memory_book (1).png"
//                         alt=""
//                       />
//                       <img
//                         style={{ marginTop: "4px" }}
//                         className="myaccountpagehide"
//                         src="./images/memory_book (2).png"
//                         alt=""
//                       />
//                     </div>
//                     <div className="LeftnVabariconmarginleftspace">
//                       My&nbsp;Booking
//                     </div>
//                   </div>
//                   <div
//                     className="myaccountpageindividualbutton"
//                     id="focus"
//                     onClick={sellrequestbuttonclick}
//                   >
//                     <div>
//                       <img
//                         className="myaccountpageshow"
//                         style={{ marginTop: "4px" }}
//                         src="./images/ic_outline-sell (1).png"
//                         alt=""
//                       />
//                       <img
//                         style={{ marginTop: "4px" }}
//                         className="myaccountpagehide"
//                         src="./images/ic_outline-sell (2).png"
//                         alt=""
//                       />
//                     </div>
//                     <div className="LeftnVabariconmarginleftspace">
//                       Sell&nbsp;Request
//                     </div>
//                   </div>
//                   <div
//                     className="myaccountpageindividualbutton"
//                     id="focus"
//                     onClick={documentdetailsclick}
//                   >
//                     <div>
//                       <img
//                         className="myaccountpageshow"
//                         style={{ marginTop: "4px" }}
//                         src="./images/teenyicons_text-document-alt-outline (1).png"
//                         alt=""
//                       />
//                       <img
//                         style={{ marginTop: "4px" }}
//                         className="myaccountpagehide"
//                         src="./images/teenyicons_text-document-alt-outline.png"
//                         alt=""
//                       />
//                     </div>
//                     <div className="LeftnVabariconmarginleftspace">
//                       Document&nbsp;Details
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="myaccountpagerightareasection">
//                 {/* <!--------------------------Owner Deatils-----------------------------------------> */}

//                 <div className="ownersectionmyaccountpagehide">
//                   <form
//                     onSubmit={submitHandler}
//                     // className="shadow-lg"
//                     // encType="multipart/form-data"
//                   >
//                     <div className="myaccountpagersellerbikedeatils1">
//                       Personal Details
//                     </div>
//                     {/*
//                     <h4>Joined</h4>
//                     <p>{String(user.createdAt).substring(0, 10)}</p> */}

//                     <div className="myaccountpagerownerdeatilsflex">
//                       {/* <div>
//                       <select
//                         className="myaccountpageBrandname1"
//                         name="Brandname"
//                         id=""
//                       >
//                         <option value="">Owner</option>
//                         <option value="">KTM</option>
//                       </select>
//                     </div> */}

//                       <div>
//                         <input
//                           className="myaccountpageNameoftheOwner"
//                           placeholder="Name*"
//                           type="text"
//                           value={name}
//                           onChange={(e) => setName(e.target.value)}
//                         />
//                       </div>
//                       <div>
//                         <input
//                           className="myaccountpageNameoftheOwner"
//                           placeholder="Email Id*"
//                           type="email"
//                           name="email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                         />
//                       </div>
//                       {/* <div>
//                       <input
//                         className="myaccountpageNameoftheOwner"
//                         placeholder="Mobile No*"
//                         type="text"
//                         name="kilometer"
//                       />
//                     </div> */}
//                       {/* <div>
//                       <input
//                         className="myaccountpageNameoftheOwner"
//                         placeholder="Location*"
//                         type="text"
//                         name="kilometer"
//                       />
//                     </div> */}

//                       <div className="myaccountpageownwersubmit">
//                         <button>Submit</button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>

//                 {/* <!--------------------------Owner Deatils----------------------------------------->

//                 <!--------------------------My Bookingg-----------------------------------------> */}
//                 <div className="bookingsectiondiv">
//                   <div className="myaccountpagersellerbikedeatils1">
//                     My Booking
//                   </div>

//                   <h4 className="mb-4">Shipping Info</h4>
//                   <p>
//                     <b>Name:</b> {user.name}
//                   </p>
//                   <p>
//                     <b>Phone:</b> {shippingInfo.phoneNo}
//                   </p>
//                   <p className="mb-4">
//                     <b>Address:</b> {shippingInfo.address}, {shippingInfo.city},
//                     &nbsp;{shippingInfo.postalCode} {shippingInfo.state},
//                     {shippingInfo.country}
//                   </p>
//                   <p>
//                     <b>Amount:</b> {totalPrice}
//                   </p>

//                   <div className="myaccountpageomybookingsection">
//                     <div className="myaccountpagebikemyaccoundcardn">
//                       <div className="myaccountpagmyaccountbikephoto">
//                         <img src="./images/Rectangle 95.png" alt="" />
//                       </div>
//                       <div>
//                         <div className="myaccountpamycoountbikename">
//                           KTM Duke 200
//                         </div>
//                         <div className="myaccountrange">
//                           5000km | Petrol | 2020 | BS4
//                         </div>
//                         <div className="myaccountbookingstatus">
//                           Successfully Booked
//                         </div>
//                         <div className="myacoountview">
//                           <button>View</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!--------------------------My Bookingg----------------------------------------->

//                 <!--------------------------Sell Request-----------------------------------------> */}
//                 <div className="sellrequestsectiondiv">
//                   <div className="myaccountpagersellerbikedeatils1">
//                     Sell Request
//                   </div>

//                   <div className="sellrequestsection">
//                     <div className="bikesellrequest">
//                       <div className="sellrequestbikephoto">
//                         <img src="./images/Rectangle 95.png" alt="" />
//                       </div>
//                       <div>
//                         <div className="sellrequestbikename">KTM Duke 200</div>
//                         <div className="sellrequestrange">
//                           5000km | Petrol | 2020 | BS4
//                         </div>
//                         <div className="sellrequeststatus">
//                           Sell Request Pending
//                         </div>
//                         <div className="sellrequestview">
//                           <button>View</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!--------------------------Sell Request----------------------------------------->

//                 <!--------------------------Document Details----------------------------------------->
//                 <!----------------------------RC Deatils----------------------------> */}
//                 <div className="myaccountpamyc">
//                   <div className="myaccountpagersellerbikedeatils1">
//                     Document Details
//                   </div>
//                   <div className="documentdetailspagesection">
//                     <div className="myaccountpageuploadrcbook">
//                       Upload RC Book Photocopies
//                     </div>

//                     <div className="rcbookflex">
//                       <div>
//                         <div className="file-input">
//                           <input
//                             type="file"
//                             name="file-input"
//                             id="file-input"
//                             className="file-input__input"
//                           />
//                           <label
//                             className="file-input__label"
//                             htmlFor="file-input"
//                           >
//                             <img src="./images/SelllnfUploadiMage.png" alt="" />
//                             <span className="uploadimagecreatepost"></span>
//                           </label>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="file-input">
//                           <input
//                             type="file"
//                             name="file-input"
//                             id="file-input"
//                             className="file-input__input"
//                           />
//                           <label
//                             className="file-input__label"
//                             htmlFor="file-input"
//                           >
//                             <img src="./images/SelllnfUploadiMage.png" alt="" />
//                             <span className="uploadimagecreatepost"></span>
//                           </label>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="file-input">
//                           <input
//                             type="file"
//                             name="file-input"
//                             id="file-input"
//                             className="file-input__input"
//                           />
//                           <label
//                             className="file-input__label"
//                             htmlFor="file-input"
//                           >
//                             <img src="./images/SelllnfUploadiMage.png" alt="" />
//                             <span className="uploadimagecreatepost"></span>
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                     {/* <!----------------------------RC Deatils---------------------------->
//                     <!----------------------------Insurance Deatils----------------------------> */}
//                     <div className="myaccountpageuploadrcbook">
//                       Upload Bike Insurance Photocopies
//                     </div>

//                     <div className="rcbookflex">
//                       <div>
//                         <div className="file-input">
//                           <input
//                             type="file"
//                             name="file-input"
//                             id="file-input"
//                             className="file-input__input"
//                           />
//                           <label
//                             className="file-input__label"
//                             htmlFor="file-input"
//                           >
//                             <img src="./images/SelllnfUploadiMage.png" alt="" />
//                             <span className="uploadimagecreatepost"></span>
//                           </label>
//                         </div>
//                       </div>

//                       <div>
//                         <div className="file-input">
//                           <input
//                             type="file"
//                             name="file-input"
//                             id="file-input"
//                             className="file-input__input"
//                           />
//                           <label
//                             className="file-input__label"
//                             htmlFor="file-input"
//                           >
//                             <img src="./images/SelllnfUploadiMage.png" alt="" />
//                             <span className="uploadimagecreatepost"></span>
//                           </label>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="file-input">
//                           <input
//                             type="file"
//                             name="file-input"
//                             id="file-input"
//                             className="file-input__input"
//                           />
//                           <label
//                             className="file-input__label"
//                             htmlFor="file-input"
//                           >
//                             <img src="./images/SelllnfUploadiMage.png" alt="" />
//                             <span className="uploadimagecreatepost"></span>
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     {/* <!----------------------------Insurance Deatils---------------------------->
//                     <!----------------------------Video Deatils----------------------------> */}
//                     <div className="myaccountpageuploadrcbook">
//                       Upload Bike Video with Owner
//                     </div>

//                     <div className="rcbookflex">
//                       <div>
//                         <div className="file-input">
//                           <input
//                             type="file"
//                             name="file-input"
//                             id="file-input"
//                             className="file-input__input"
//                           />
//                           <label
//                             className="file-input__label"
//                             htmlFor="file-input"
//                           >
//                             <img src="./images/SelllnfUploadiMage.png" alt="" />
//                             <span className="uploadimagecreatepost"></span>
//                           </label>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="file-input">
//                           <input
//                             type="file"
//                             name="file-input"
//                             id="file-input"
//                             className="file-input__input"
//                           />
//                           <label
//                             className="file-input__label"
//                             htmlFor="file-input"
//                           >
//                             <img src="./images/SelllnfUploadiMage.png" alt="" />
//                             <span className="uploadimagecreatepost"></span>
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     {/* <!----------------------------Video Deatils---------------------------->
//                     <!----------------------------Bike Images Deatils----------------------------> */}
//                     <div className="myaccountpageuploadrcbook">
//                       Upload Bike Images
//                     </div>

//                     <div className="rcbookflex">
//                       <div>
//                         <div className="file-input">
//                           <input
//                             type="file"
//                             name="file-input"
//                             id="file-input"
//                             className="file-input__input"
//                           />
//                           <label
//                             className="file-input__label"
//                             htmlFor="file-input"
//                           >
//                             <img src="./images/SelllnfUploadiMage.png" alt="" />
//                             <span className="uploadimagecreatepost"></span>
//                           </label>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="file-input">
//                           <input
//                             type="file"
//                             name="file-input"
//                             id="file-input"
//                             className="file-input__input"
//                           />
//                           <label
//                             className="file-input__label"
//                             htmlFor="file-input"
//                           >
//                             <img src="./images/SelllnfUploadiMage.png" alt="" />
//                             <span className="uploadimagecreatepost"></span>
//                           </label>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="file-input">
//                           <input
//                             type="file"
//                             name="file-input"
//                             id="file-input"
//                             className="file-input__input"
//                           />
//                           <label
//                             className="file-input__label"
//                             htmlFor="file-input"
//                           >
//                             <img src="./images/SelllnfUploadiMage.png" alt="" />
//                             <span className="uploadimagecreatepost"></span>
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                     {/* <!----------------------------Bike Images Deatils----------------------------> */}
//                     <div className="myaccountpageownwersubmits">
//                       <button>Submit</button>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!--------------------------Document Details-----------------------------------------> */}
//               </div>
//             </div>
//             {/* <!----------------------------------Personall Section---------------------------> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// var bookingsectiondiv = document.getElementsByClassName("bookingsectiondiv");
// var ownersectionmyaccountpagehide = document.getElementsByClassName(
//   "ownersectionmyaccountpagehide"
// );
// var sellrequestsectiondiv = document.getElementsByClassName(
//   "sellrequestsectiondiv"
// );
// function personalbuttonclick() {
//   ownersectionmyaccountpagehide[0].style.display = "block";
//   bookingsectiondiv[0].style.display = "none";
//   sellrequestsectiondiv[0].style.display = "none";
//   myaccountpamyc[0].style.display = "none";
// }
// function mybookingbuttonclick() {
//   ownersectionmyaccountpagehide[0].style.display = "none";
//   bookingsectiondiv[0].style.display = "block";
//   sellrequestsectiondiv[0].style.display = "none";
//   myaccountpamyc[0].style.display = "none";
// }
// function sellrequestbuttonclick() {
//   ownersectionmyaccountpagehide[0].style.display = "none";
//   bookingsectiondiv[0].style.display = "none";
//   sellrequestsectiondiv[0].style.display = "block";
//   myaccountpamyc[0].style.display = "none";
// }
// function documentdetailsclick() {
//   ownersectionmyaccountpagehide[0].style.display = "none";
//   bookingsectiondiv[0].style.display = "none";
//   sellrequestsectiondiv[0].style.display = "none";
//   myaccountpamyc[0].style.display = "block";
// }
// var myaccountpamyc = document.getElementsByClassName("myaccountpamyc");

// export default MyAccountPage;
