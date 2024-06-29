import { Fragment, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { clearError } from "../../slicers/productsSlice";
import { deleteProduct, getAdminProducts } from "../../actions/productActions";
import Loader from "..//layouts/Loader";
import { MDBDataTable } from "mdbreact";
import { toast } from "react-toastify";
import Sidebar from "./Sidebar";
import MetaData from "../layouts/MetaData";
import { clearError, clearProductDeleted } from "../../slicers/productslice";

export default function ProductList() {
  const {
    products = [],
    loading = true,
    error,
  } = useSelector((state) => state.productsState);

  const { isProductDeleted, error: productError } = useSelector(
    (state) => state.productState
  );

  const dispatch = useDispatch();

  // const deleteHandler = (e, id) => {
  //   e.target.disabled = true;
  //   dispatch(deleteProduct(id));
  // };
  const deleteHandler = (e, id) => {
    // Display a confirmation dialog
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this Bike?"
    );

    if (userConfirmed) {
      // If the user clicks "OK", proceed with the deletion
      e.target.disabled = true; // Disable the delete button to prevent multiple clicks
      dispatch(deleteProduct(id)); // Call the delete action
    }
    // If the user clicks "Cancel", do nothing
  };
  function formatNumberWithCommasIndian(number) {
    if (number === null || number === undefined) return ""; // Check for undefined or null
    const numStr = number.toString();
    if (numStr.length <= 3) return numStr;

    let lastThreeDigits = numStr.slice(-3);
    let otherDigits = numStr.slice(0, -3);

    otherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");

    return otherDigits + "," + lastThreeDigits;
  }
  const setProducts = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Price",
          field: "price",
          sort: "asc",
        },
        {
          label: "Kilo Meter",
          field: "stock",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [{}],
    };

    products.forEach((product) => {
      data.rows.push({
        id: product._id,
        name: product.bikename,
        price: `Rs.${formatNumberWithCommasIndian(product.price)}`,
        stock: `${product.bikekm} km`,
        actions: (
          <Fragment>
            <Link
              to={`/admin/product/${product._id}`}
              className="btn btn-primary  py-1 px-2 ml-2"
            >
              <i className="fa fa-pencil  "></i>
            </Link>
            <Button
              onClick={(e) => deleteHandler(e, product._id)}
              className="btn btn-danger py-1 px-2 ml-2"
            >
              <i className="fa fa-trash"></i>
            </Button>
          </Fragment>
        ),
      });
    });
    return data;
  };

  useEffect(() => {
    if (error || productError) {
      toast(error || productError, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearError());
        },
      });
      return;
    }

    if (isProductDeleted) {
      toast("Product Deleted Successfully", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
        onOpen: () => dispatch(clearProductDeleted()),
      });
      return;
    }

    dispatch(getAdminProducts);
  }, [dispatch, error, isProductDeleted]);

  return (
    <div className="row" style={{ width: "100%" }}>
      <MetaData title={"Products List"} />
      <div className="col-12 col-md-2">
        <Sidebar />
      </div>
      <div className="col-12 col-md-10">
        <h1 className="my-4">Product List</h1>
        <Fragment>
          {loading ? (
            <Loader />
          ) : (
            <MDBDataTable
              data={setProducts()}
              bordered
              striped
              hover
              className="px-3"
            />
          )}
        </Fragment>
      </div>
    </div>
  );
}
