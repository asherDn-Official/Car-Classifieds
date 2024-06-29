import { Fragment, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { clearError } from "../../slicers/productsSlice";
import { deleteProduct, getAdminProducts } from "../../actions/productActions";
import Loader from "..//layouts/Loader";
import { MDBDataTable } from "mdbreact";
import { toast } from "react-toastify";
import MetaData from "../layouts/MetaData";
import Sidebar from "./Sidebar";
import {} from "../../slicers/productslice";
import { clearError, clearOrderDeleted } from "../../slicers/orderSlice";
import {
  deleteOrder,
  adminOrders as adminOrdersAction,
} from "../../actions/orderActions";

export default function OrderList() {
  const {
    adminOrders = [],
    loading = true,
    error,
    isOrderDeleted,
  } = useSelector((state) => state.orderState);

  const dispatch = useDispatch();

  // const deleteHandler = (e, id) => {
  //   e.target.disabled = true;
  //   dispatch(deleteOrder(id));
  // };

  const deleteHandler = (e, id) => {
    // Display a confirmation dialog
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this Order?"
    );

    if (userConfirmed) {
      // If the user clicks "OK", proceed with the deletion
      e.target.disabled = true; // Disable the delete button to prevent multiple clicks
      dispatch(deleteOrder(id)); // Call the delete action
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

  const setOrders = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Bike Details",
          field: "noOfItems",
          sort: "asc",
        },
        {
          label: "Amount",
          field: "amount",
          sort: "asc",
        },
        {
          label: "Status",
          field: "status",
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

    adminOrders.forEach((order) => {
      data.rows.push({
        id: order._id,
        noOfItems: order.orderItems[0].name,
        amount: formatNumberWithCommasIndian(order.orderItems[0].price),
        status: (
          <p
            style={{
              color: order.orderStatus.includes("Processing") ? "red" : "green",
            }}
          >
            {order.orderStatus}
          </p>
        ),
        actions: (
          <Fragment>
            <Link
              to={`/admin/order/${order._id}`}
              className="btn btn-primary  py-1 px-2 ml-2"
            >
              <i className="fa fa-pencil  "></i>
            </Link>
            <Button
              onClick={(e) => deleteHandler(e, order._id)}
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

    if (isOrderDeleted) {
      toast("Order Deleted Successfully", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
        onOpen: () => dispatch(clearOrderDeleted()),
      });
      return;
    }

    dispatch(adminOrdersAction);
  }, [dispatch, error, isOrderDeleted]);

  return (
    <div className="row" style={{ width: "100%" }}>
      <MetaData title={"Orders List"} />
      <div className="col-12 col-md-2">
        <Sidebar />
      </div>
      <div className="col-12 col-md-10">
        <h1 className="my-4">Order List</h1>
        <Fragment>
          {loading ? (
            <Loader />
          ) : (
            <MDBDataTable
              data={setOrders()}
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
