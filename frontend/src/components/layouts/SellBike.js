import { useState } from "react";
import MetaData from "./MetaData";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import NewSlider from "./NewSlider";
import Loader from "./Loader";

export default function SellBike() {
  const [formdata, setFormdata] = useState({
    Sellbrand: "",
    Sellmodel: "",
    Sellyear: "",
    Sellkm: "",
    SellImage1: "",
    SellImage2: "",
    SellImage3: "",
    SellImage4: "",
    SellImage5: "",
    SellImage6: "",
    SellImage7: "",
    SellImage8: "",
    SellImage9: "",
    SellImage10: "",
    OwnerORSeller: "",
    SellName: "",
    Email: "",
    Mobile: "",
    Location: "",
  });

  const [imageLink, setImageLink] = useState("");
  const [loading, setLoading] = useState(false); // State for loading indicator
  const handleFileInputChange = async (e, index) => {
    const file = e.target.files[0];

    if (!file) {
      alert("Please select an image to upload.");
      return;
    }

    // Check file size (maximum 5MB)
    const maxFileSizeMB = 5;
    const maxFileSizeBytes = maxFileSizeMB * 1024 * 1024;

    if (file.size > maxFileSizeBytes) {
      toast(`Please upload image Less than ${maxFileSizeMB} MB.`, {
        type: "error",
        position: toast.POSITION.BOTTOM_CENTER,
      });

      // alert();

      e.target.value = null; // Clear the file input field
      return;
    }

    const formData = new FormData();
    formData.append("sampleFile", file);

    try {
      setLoading(true); // Set loading to true when upload starts
      const response = await axios.post(`/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageUrl = response.data.link;

      setFormdata((prevFormData) => ({
        ...prevFormData,
        [`SellImage${index}`]: imageUrl,
      }));

      toast("Image Upload Successfully", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
      });

      setLoading(false); // Set loading to false after successful upload
    } catch (error) {
      console.error("Error uploading image:", error);
      toast("Image Upload Failed. Please check your internet connection.", {
        type: "error",
        position: toast.POSITION.BOTTOM_CENTER,
      });

      setLoading(false); // Set loading to false if upload fails
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Custom validation logic
    if (
      !formdata.SellImage1 ||
      !formdata.SellImage4 ||
      !formdata.SellImage7 ||
      !formdata.SellImage9
    ) {
      toast("Please Upload *Mandatory Images.", {
        type: "error",
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return;
    }

    // Submit form data
    try {
      const response = await axios.post("/mail", formdata);
      if (response.data === "Success") {
        toast("Upload Successfully", {
          type: "success",
          position: toast.POSITION.BOTTOM_CENTER,
        });
        navigate("/Thankingyou");
      } else {
        toast("Failed. Please try again.", {
          type: "error",
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleClick = () => {
    navigate("/BuyPage", { state: { scrollTo: "content-section" } });
  };
  return (
    <div>
      <MetaData title={"Sell Car Page"} />
      <div
        style={{
          backgroundColor: "rgba(244, 244, 249, 1)",
          paddingBottom: "60px",
        }}
      >
        <div>
          <div
            style={{ cursor: "pointer" }}
            onClick={handleClick}
            className="NewClassifiedFirstHBanne"
          >
            <img src="/images/AboutPageBannerimg.png" alt="" />
          </div>

          <NewSlider />

          <div className="sellpagedivflexcontenet">
            <div className="sellpagedivwidthmaindiv">
              <div className="sellourBikesellerbikeuploadsection">
                <div className="sellourheadingforbikeselling">
                  Give details of your Car
                </div>

                <div className="sellourinputformsellerbike">
                  <div className="sellourinbackgroundwhitediv">
                    <div className="sellourisellerbikedeatils">Car Details</div>

                    <form onSubmit={handleSubmit}>
                      {/* <!----------------------DropDown--------------------------> */}

                      <div>
                        <div className="selectdropdownflex">
                          <div>
                            <input
                              className="Brandname"
                              required
                              type="text"
                              placeholder="Brand"
                              value={formdata.Sellbrand}
                              onChange={(e) => {
                                setFormdata({
                                  ...formdata,
                                  Sellbrand: e.target.value,
                                });
                              }}
                            />
                          </div>

                          <div>
                            <input
                              required
                              className="bikemodel"
                              type="text"
                              placeholder="Model"
                              value={formdata.Sellmodel}
                              onChange={(e) => {
                                setFormdata({
                                  ...formdata,
                                  Sellmodel: e.target.value,
                                });
                              }}
                            />
                          </div>
                          <div>
                            <input
                              required
                              className="bikeyearsaz"
                              type="text"
                              placeholder="Year"
                              value={formdata.Sellyear}
                              onChange={(e) => {
                                setFormdata({
                                  ...formdata,
                                  Sellyear: e.target.value,
                                });
                              }}
                            />
                          </div>
                          <div>
                            <input
                              required
                              className="kilometerinput"
                              placeholder="Kilometre"
                              type="text"
                              name="kilometer"
                              value={formdata.Sellkm}
                              onChange={(e) => {
                                setFormdata({
                                  ...formdata,
                                  Sellkm: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>

                        {/* <!----------------------DropDown -------------------------->

  <!-----------------------Bike Document------------------------> */}
                        <div className="sellourisellerbikedeatils">
                          Car Document
                        </div>

                        {/* <!----------------------------RC Deatils----------------------------> */}

                        {loading ? (
                          <Loader />
                        ) : (
                          <div>
                            <div className="dispskjjndfflexcinpv">
                              <div>
                                <div className="sellouruploadrcbook">
                                  Upload RC Book Photocopies
                                </div>
                                <div>
                                  <div className="sellourrcbookflex">
                                    <div className="sellouraddphotosupload">
                                      <div className="file-input">
                                        <input
                                          type="file"
                                          name="file-input"
                                          id="file-input1"
                                          className="file-input__input"
                                          onChange={(e) => {
                                            handleFileInputChange(e, 1);
                                          }}
                                        />
                                        <label
                                          className="file-input__label"
                                          htmlFor="file-input1"
                                        >
                                          <img
                                            src="./images/MandatoryImage.png"
                                            alt=""
                                          />
                                          <span className="uploadimagecreatepost"></span>
                                        </label>
                                      </div>

                                      {formdata.SellImage1 && (
                                        <div
                                          className="UploadSUCESSFULLYSELLPAGESF"
                                          style={{ color: "red" }}
                                        >
                                          <i
                                            className="fa fa-check"
                                            style={{
                                              fontSize: "16px",
                                              color: "red",
                                            }}
                                          ></i>{" "}
                                          {""}
                                          Uploaded
                                        </div>
                                      )}
                                    </div>

                                    <div className="sellouraddphotosupload">
                                      <div className="file-input">
                                        <input
                                          type="file"
                                          name="file-input1"
                                          id="file-input2"
                                          className="file-input__input"
                                          onChange={(e) => {
                                            handleFileInputChange(e, 2);
                                          }}
                                        />
                                        <label
                                          className="file-input__label"
                                          htmlFor="file-input2"
                                        >
                                          <img
                                            src="./images/SelllnfUploadiMage.png"
                                            alt=""
                                          />
                                          <span className="uploadimagecreatepost"></span>
                                        </label>
                                      </div>

                                      {formdata.SellImage2 && (
                                        <div
                                          className="UploadSUCESSFULLYSELLPAGESF"
                                          style={{ color: "red" }}
                                        >
                                          <i
                                            className="fa fa-check"
                                            style={{
                                              fontSize: "16px",
                                              color: "red",
                                            }}
                                          ></i>{" "}
                                          {""}
                                          Uploaded
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="sellouruploadrcbook">
                                  Upload Car Insurance Photocopies
                                </div>
                                <div className="sellourrcbookflex">
                                  <div className="sellouraddphotosupload">
                                    <div className="file-input">
                                      <input
                                        type="file"
                                        name="file-input"
                                        id="file-input4"
                                        className="file-input__input"
                                        onChange={(e) => {
                                          handleFileInputChange(e, 4);
                                        }}
                                      />
                                      <label
                                        className="file-input__label"
                                        htmlFor="file-input4"
                                      >
                                        <img
                                          src="./images/MandatoryImage.png"
                                          alt=""
                                        />
                                        <span className="uploadimagecreatepost"></span>
                                      </label>
                                    </div>

                                    {formdata.SellImage4 && (
                                      <div
                                        className="UploadSUCESSFULLYSELLPAGESF"
                                        style={{ color: "red" }}
                                      >
                                        <i
                                          className="fa fa-check"
                                          style={{
                                            fontSize: "16px",
                                            color: "red",
                                          }}
                                        ></i>{" "}
                                        {""}
                                        Uploaded
                                      </div>
                                    )}
                                  </div>
                                  <div className="sellouraddphotosupload">
                                    <div className="file-input">
                                      <input
                                        type="file"
                                        name="file-input5"
                                        id="file-input5"
                                        className="file-input__input"
                                        onChange={(e) => {
                                          handleFileInputChange(e, 5);
                                        }}
                                      />
                                      <label
                                        className="file-input__label"
                                        htmlFor="file-input5"
                                      >
                                        <img
                                          src="./images/SelllnfUploadiMage.png"
                                          alt=""
                                        />
                                        <span className="uploadimagecreatepost"></span>
                                      </label>
                                    </div>

                                    {formdata.SellImage5 && (
                                      <div
                                        className="UploadSUCESSFULLYSELLPAGESF"
                                        style={{ color: "red" }}
                                      >
                                        <i
                                          className="fa fa-check"
                                          style={{
                                            fontSize: "16px",
                                            color: "red",
                                          }}
                                        ></i>{" "}
                                        {""}
                                        Uploaded
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="Secondfdivbcldef">
                              <div>
                                <div className="sellouruploadrcbook">
                                  Upload Car Photo with Owner
                                </div>
                                <div className="sellourrcbookflex">
                                  <div className="sellouraddphotosupload">
                                    <div className="file-input">
                                      <input
                                        type="file"
                                        name="file-input7"
                                        id="file-input7"
                                        className="file-input__input"
                                        onChange={(e) => {
                                          handleFileInputChange(e, 7);
                                        }}
                                      />
                                      <label
                                        className="file-input__label"
                                        htmlFor="file-input7"
                                      >
                                        <img
                                          src="./images/MandatoryImage.png"
                                          alt=""
                                        />
                                        <span className="uploadimagecreatepost"></span>
                                      </label>
                                    </div>

                                    {formdata.SellImage7 && (
                                      <div
                                        className="UploadSUCESSFULLYSELLPAGESF"
                                        style={{ color: "red" }}
                                      >
                                        <i
                                          className="fa fa-check"
                                          style={{
                                            fontSize: "16px",
                                            color: "red",
                                          }}
                                        ></i>{" "}
                                        {""}
                                        Uploaded
                                      </div>
                                    )}
                                  </div>
                                  <div className="sellouraddphotosupload">
                                    <div className="file-input">
                                      <input
                                        type="file"
                                        name="file-input8"
                                        id="file-input8"
                                        className="file-input__input"
                                        onChange={(e) => {
                                          handleFileInputChange(e, 8);
                                        }}
                                      />
                                      <label
                                        className="file-input__label"
                                        htmlFor="file-input8"
                                      >
                                        <img
                                          src="./images/SelllnfUploadiMage.png"
                                          alt=""
                                        />
                                        <span className="uploadimagecreatepost"></span>
                                      </label>
                                    </div>

                                    {formdata.SellImage8 && (
                                      <div
                                        className="UploadSUCESSFULLYSELLPAGESF"
                                        style={{ color: "red" }}
                                      >
                                        <i
                                          className="fa fa-check"
                                          style={{
                                            fontSize: "16px",
                                            color: "red",
                                          }}
                                        ></i>{" "}
                                        {""}
                                        Uploaded
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="sellouruploadrcbook">
                                  Upload Car Images
                                </div>
                                <div className="sellourrcbookflex">
                                  <div className="sellouraddphotosupload">
                                    <div className="file-input">
                                      <input
                                        type="file"
                                        name="file-input9"
                                        id="file-input9"
                                        className="file-input__input"
                                        onChange={(e) => {
                                          handleFileInputChange(e, 9);
                                        }}
                                      />
                                      <label
                                        className="file-input__label"
                                        htmlFor="file-input9"
                                      >
                                        <img
                                          src="./images/MandatoryImage.png"
                                          alt=""
                                        />
                                        <span className="uploadimagecreatepost"></span>
                                      </label>
                                    </div>

                                    {formdata.SellImage9 && (
                                      <div
                                        className="UploadSUCESSFULLYSELLPAGESF"
                                        style={{ color: "red" }}
                                      >
                                        <i
                                          className="fa fa-check"
                                          style={{
                                            fontSize: "16px",
                                            color: "red",
                                          }}
                                        ></i>{" "}
                                        {""}
                                        Uploaded
                                      </div>
                                    )}
                                  </div>
                                  <div className="sellouraddphotosupload">
                                    <div className="file-input">
                                      <input
                                        type="file"
                                        name="file-input10"
                                        id="file-input10"
                                        className="file-input__input"
                                        onChange={(e) => {
                                          handleFileInputChange(e, 10);
                                        }}
                                      />
                                      <label
                                        className="file-input__label"
                                        htmlFor="file-input10"
                                      >
                                        <img
                                          src="./images/SelllnfUploadiMage.png"
                                          alt=""
                                        />
                                        <span className="uploadimagecreatepost"></span>
                                      </label>
                                    </div>

                                    {formdata.SellImage10 && (
                                      <div
                                        className="UploadSUCESSFULLYSELLPAGESF"
                                        style={{ color: "red" }}
                                      >
                                        <i
                                          className="fa fa-check"
                                          style={{
                                            fontSize: "16px",
                                            color: "red",
                                          }}
                                        ></i>{" "}
                                        {""}
                                        Uploaded
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* <!----------------------------Bike Images Deatils---------------------------->

  <!-----------------------Bike Document------------------------>

  <!--------------------------Owner Deatils-----------------------------------------> */}
                      <div className="sellourisellerbikedeatils1">
                        Owner Details
                      </div>
                      <div className="sellourOwnerDeatils"></div>

                      <div className="sellourownerdeatilsflex">
                        <div>
                          <input
                            required
                            type="text"
                            className="sellourowneBrandname1"
                            placeholder="Owner"
                            value={formdata.OwnerORSeller}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                OwnerORSeller: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div>
                          <input
                            required
                            className="sellourNameoftheOwner"
                            placeholder="Name*"
                            type="text"
                            name="Name*"
                            value={formdata.SellName}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                SellName: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div>
                          <input
                            required
                            className="sellourNameoftheOwner"
                            placeholder="Email Id*"
                            type="email"
                            name="Email"
                            value={formdata.Email}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                Email: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div>
                          <input
                            required
                            minLength={10}
                            className="sellourNameoftheOwner"
                            placeholder="Mobile No*"
                            type="text"
                            name="Mobile"
                            value={formdata.Mobile}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                Mobile: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div>
                          <input
                            required
                            className="sellourNameoftheOwner"
                            placeholder="Location*"
                            type="text"
                            name="Location"
                            value={formdata.Location}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                Location: e.target.value,
                              });
                            }}
                          />
                        </div>

                        <div className="sellourownwersubmit">
                          <button>Submit</button>
                        </div>
                      </div>
                    </form>

                    {/* <!--------------------------Owner Deatils-----------------------------------------> */}
                  </div>
                </div>
              </div>
              {/* <!------------------------------------Upload Section---------------------------------> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
