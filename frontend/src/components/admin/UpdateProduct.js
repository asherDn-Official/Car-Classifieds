import { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MetaData from "../layouts/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../../actions/productActions";
import { toast } from "react-toastify";
import { clearError, clearProductUpdated } from "../../slicers/productslice";
// import { getProduct } from "../../../actions/productActions";

export default function UpdateProduct() {
  const [name, setName] = useState("");
  const [bikename, setBikename] = useState("");
  const [bikekm, setBikekm] = useState("");
  const [bikeyear, setbikeyear] = useState("");
  const [bikeemmision, setbikeemmision] = useState("");
  const [bikedescription, setbikedescription] = useState("");
  const [bikebrand, setbikebrand] = useState("");
  const [bikemodel, setbikemodel] = useState("");
  const [bikeinsurance, setbikeinsurance] = useState("");
  const [bikeownership, setbikeownership] = useState("");
  const [bikelocation, setbikelocation] = useState("");
  const [enginehealth, setenginehealth] = useState("");
  const [enginehealthDescription, setenginehealthDescription] = useState("");
  const [electricalhealth, setelectricalhealth] = useState("");
  const [electricalhealthDescription, setelectricalhealthDescription] =
    useState("");
  const [mechanicalchasishealth, setmechanicalchasishealth] = useState("");
  const [
    mechanicalchasishealthDescription,
    setmechanicalchasishealthDescription,
  ] = useState("");
  const [paintfaringhealth, setpaintfaringhealth] = useState("");
  const [paintfaringhealthDescription, setpaintfaringhealthDescription] =
    useState("");
  const [tyre, settyre] = useState("");
  const [tyreDescription, settyreDescription] = useState("");
  const [power, setpower] = useState("");
  const [torque, settorque] = useState("");
  const [mileage, setmileage] = useState("");
  const [bikebookingdetails, setbikebookingdetails] = useState("");
  const [bikesellrequest, setbikesellrequest] = useState("");
  // const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [ratings, setratings] = useState("");
  const [category, setcategory] = useState("");
  const [biketype, setcbiketype] = useState("");
  // const [bikecccategories, setBikecccategories] = useState("");
  const [bikeCCtypecategories, setBikeCCtypecategories] = useState("");
  const [seller, setsellere] = useState("");
  const [stock, setstock] = useState(0);
  const [numOfReviews, setnumOfReviews] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [imagesCleared, setImagesCleared] = useState(false);
  const { id: productId } = useParams();

  const { loading, isProductUpdated, error, product } = useSelector(
    (state) => state.productState
  );

  // const {} = useSelector((state) => state.productState);

  const categories = [
    "Audi",
    "BMW",
    "Citroen",
    "Fiat",
    "Ford",
    "Hyundai",
    "Jaguar",
    "Jeep",
    "Kia",
    "Mahindra",
    "Maruti Suzuki",
    "Mercedes-Benz",
    "MG",
    "Mitsubishi",
    "Nissan",
    "Renault",
    "Skoda",
    "Tata",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];

  const bikeCCtypecategories1 = [
    "1.0L-1.5L",
    "1.5L-2.0L",
    "2.0L-2.5L",
    "2.5L-3.0L",
    "Above 3.0L",
  ];

  const biketypes = ["Petrol", "Electric", "Diesel"];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onImagesChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState == 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, file]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("bikename", bikename);
    formData.append("bikekm", bikekm);
    formData.append("bikeyear", bikeyear);
    formData.append("bikeemmision", bikeemmision);
    formData.append("bikedescription", bikedescription);
    formData.append("bikebrand", bikebrand);
    formData.append("bikemodel", bikemodel);
    formData.append("bikeinsurance", bikeinsurance);
    formData.append("bikeownership", bikeownership);
    formData.append("bikelocation", bikelocation);
    formData.append("enginehealth", enginehealth);
    formData.append("enginehealthDescription", enginehealthDescription);
    formData.append("electricalhealth", electricalhealth);
    formData.append("electricalhealthDescription", electricalhealthDescription);
    formData.append("mechanicalchasishealth", mechanicalchasishealth);
    formData.append(
      "mechanicalchasishealthDescription",
      mechanicalchasishealthDescription
    );
    formData.append("paintfaringhealth", paintfaringhealth);
    formData.append(
      "paintfaringhealthDescription",
      paintfaringhealthDescription
    );
    formData.append("tyre", tyre);
    formData.append("tyreDescription", tyreDescription);
    formData.append("power", power);
    formData.append("torque", torque);
    formData.append("mileage", mileage);
    formData.append("bikebookingdetails", bikebookingdetails);
    formData.append("bikesellrequest", bikesellrequest);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("ratings", ratings);
    formData.append("category", category);
    formData.append("biketype", biketype);
    formData.append("bikeCCtypecategories", bikeCCtypecategories);
    formData.append("seller", seller);
    formData.append("stock", stock);
    formData.append("numOfReviews", numOfReviews);
    images.forEach((image) => {
      formData.append("images", image);
    });

    formData.append("imagesCleared", imagesCleared);

    dispatch(updateProduct(productId, formData));
  };

  const clearImagesHandler = () => {
    setImages([]);
    setImagesPreview([]);
    setImagesCleared(true);
  };

  useEffect(() => {
    if (isProductUpdated) {
      toast("Product Updated Successfully", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
        onOpen: () => dispatch(clearProductUpdated()),
      });
      setImages([]);
      return;
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearError());
        },
      });
      return;
    }
    dispatch(getProduct(productId));
  }, [isProductUpdated, error, dispatch]);

  // console.log(loading);
  useEffect(() => {
    if (product._id) {
      setName(product.name);
      setBikename(product.bikename);
      setBikekm(product.bikekm);
      setbikeyear(product.bikeyear);
      setbikeemmision(product.bikeemmision);
      setbikedescription(product.bikedescription);
      setbikebrand(product.bikebrand);
      setbikemodel(product.bikemodel);
      setbikeinsurance(product.bikeinsurance);
      setbikeownership(product.bikeownership);
      setbikelocation(product.bikelocation);
      setenginehealth(product.enginehealth);
      setenginehealthDescription(product.enginehealthDescription);
      setelectricalhealth(product.electricalhealth);
      setelectricalhealthDescription(product.electricalhealthDescription);
      setmechanicalchasishealth(product.mechanicalchasishealth);
      setmechanicalchasishealthDescription(
        product.mechanicalchasishealthDescription
      );
      setpaintfaringhealth(product.paintfaringhealth);
      setpaintfaringhealthDescription(product.paintfaringhealthDescription);
      settyre(product.tyre);
      settyreDescription(product.tyreDescription);
      setpower(product.power);
      settorque(product.torque);
      setmileage(product.mileage);
      setbikebookingdetails(product.bikebookingdetails);
      setbikesellrequest(product.bikesellrequest);
      setprice(product.price);
      setdescription(product.description);
      setratings(product.ratings);
      setcategory(product.category);
      setcbiketype(product.biketype);
      setBikeCCtypecategories(product.bikeCCtypecategories);
      setsellere(product.seller);
      setstock(product.stock);
      setnumOfReviews(product.numOfReviews);

      let images = [];

      product.images.forEach((image) => {
        images.push(image.image);
      });
      setImagesPreview(images);
    }
  }, [product]);

  return (
    <div className="row" style={{ width: "100%" }}>
      <MetaData title={"Update Product"} />
      <div className="col-12 col-md-2">
        <Sidebar />
      </div>
      <div className="col-12 col-md-10">
        <Fragment>
          <div className="wrapper my-5">
            <form
              onSubmit={submitHandler}
              className="shadow-lg"
              encType="multipart/form-data"
            >
              <h1 className="mb-4">Update Product</h1>

              <div className="form-group">
                <label htmlFor="name_field">Car Name</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setBikename(e.target.value)}
                  value={bikename}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Kilometer</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setBikekm(e.target.value)}
                  value={bikekm}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car year</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikeyear(e.target.value)}
                  value={bikeyear}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Emmision</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikeemmision(e.target.value)}
                  value={bikeemmision}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Description</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikedescription(e.target.value)}
                  value={bikedescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Brand</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikebrand(e.target.value)}
                  value={bikebrand}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Model</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikemodel(e.target.value)}
                  value={bikemodel}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Insurance</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikeinsurance(e.target.value)}
                  value={bikeinsurance}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Ownership</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikeownership(e.target.value)}
                  value={bikeownership}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Location</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikelocation(e.target.value)}
                  value={bikelocation}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Engine Health Rating</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setenginehealth(e.target.value)}
                  value={enginehealth}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">
                  Car Engine Health Description
                </label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setenginehealthDescription(e.target.value)}
                  value={enginehealthDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Electrical Health Rating</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setelectricalhealth(e.target.value)}
                  value={electricalhealth}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">
                  Car Electrical Health Description
                </label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) =>
                    setelectricalhealthDescription(e.target.value)
                  }
                  value={electricalhealthDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">
                  Car Mechanical and Chassis Health Rating
                </label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setmechanicalchasishealth(e.target.value)}
                  value={mechanicalchasishealth}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">
                  Car Mechanical and Chassis Health Description
                </label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) =>
                    setmechanicalchasishealthDescription(e.target.value)
                  }
                  value={mechanicalchasishealthDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">
                  Car Paint Faring Health Rating
                </label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setpaintfaringhealth(e.target.value)}
                  value={paintfaringhealth}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">
                  Car Paint Faring Health Description
                </label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) =>
                    setpaintfaringhealthDescription(e.target.value)
                  }
                  value={paintfaringhealthDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Tyre Rating</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => settyre(e.target.value)}
                  value={tyre}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Tyre Description</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => settyreDescription(e.target.value)}
                  value={tyreDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Power</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setpower(e.target.value)}
                  value={power}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Torque</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => settorque(e.target.value)}
                  value={torque}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Car Mileage</label>
                <input
                  required
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setmileage(e.target.value)}
                  value={mileage}
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="name_field">Car Booking Details</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikebookingdetails(e.target.value)}
                  value={bikebookingdetails}
                />
              </div> */}

              {/* <div className="form-group">
                <label htmlFor="name_field">Car Sell Request</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikesellrequest(e.target.value)}
                  value={bikesellrequest}
                />
              </div> */}

              <div className="form-group">
                <label htmlFor="price_field">Price</label>
                <input
                  required
                  type="text"
                  id="price_field"
                  className="form-control"
                  onChange={(e) => setprice(e.target.value)}
                  value={price}
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="description_field">Description</label>
                <textarea
                  className="form-control"
                  id="description_field"
                  rows="8"
                  onChange={(e) => setdescription(e.target.value)}
                  value={description}
                ></textarea>
              </div> */}

              <div className="form-group">
                <label htmlFor="category_field">Category</label>

                <select
                  value={category}
                  onChange={(e) => setcategory(e.target.value)}
                  className="form-control"
                  id="category_field"
                >
                  <option value="">Select</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="category_field">Car Type</label>
                <select
                  value={biketype}
                  onChange={(e) => setcbiketype(e.target.value)}
                  className="form-control"
                  id="category_field"
                >
                  <option value="">Select</option>
                  {biketypes.map((biketype) => (
                    <option key={biketype} value={biketype}>
                      {biketype}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="category_field">Car CC</label>
                <select
                  value={bikeCCtypecategories}
                  onChange={(e) => setBikeCCtypecategories(e.target.value)}
                  className="form-control"
                  id="category_field"
                >
                  <option value="">Select</option>
                  {bikeCCtypecategories1.map((bikeCCtypecategories) => (
                    <option
                      key={bikeCCtypecategories}
                      value={bikeCCtypecategories}
                    >
                      {bikeCCtypecategories}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="stock_field">Stock</label>
                <input
                  type="number"
                  id="stock_field"
                  className="form-control"
                  onChange={(e) => setstock(e.target.value)}
                  value={stock}
                />
              </div>

              <div className="form-group">
                <label htmlFor="seller_field">Video Link</label>
                <input
                  required
                  type="text"
                  id="seller_field"
                  className="form-control"
                  onChange={(e) => setsellere(e.target.value)}
                  value={seller}
                />
              </div>

              <div className="form-group">
                <label>Images</label>

                <div className="custom-file">
                  <input
                    required
                    type="file"
                    name="product_images"
                    className="custom-file-input"
                    id="customFile"
                    multiple
                    onChange={onImagesChange}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Images
                  </label>
                </div>

                <div>
                  {imagesPreview.length > 0 && (
                    <span
                      className="mr-2"
                      onClick={clearImagesHandler}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fa fa-trash"></i>
                    </span>
                  )}

                  {imagesPreview.map((image) => (
                    <img
                      className="mt-3 mr-2"
                      key={image}
                      src={image}
                      alt={"Image Preview"}
                      width="55"
                      height="53"
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit2"
                disabled={loading}
                className="btn update-btn btn-block mt-4 mb-3"
              >
                Update
              </button>
            </form>
          </div>
        </Fragment>
      </div>
    </div>
  );
}
