import { Fragment, useEffect } from "react";
import MeataData from "../layouts/MetaData";
import { MDBDataTable } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userOrders as userOrdersAction } from "../../actions/orderActions";
import { Link } from "react-router-dom";
import NewSlider from "../layouts/NewSlider";

export default function UsersOrders() {
  const { userOrders = [] } = useSelector((state) => state.orderState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userOrdersAction);
  }, []);

  const setOrders = () => {
    const data = {
      columns: [
        {
          label: "Order ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Bike Name",
          field: "numOfItems",
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
      rows: [],
    };

    userOrders.forEach((userOrder) => {
      data.rows.push({
        id: userOrder._id,
        // numOfItems: userOrder.orderItems.length,
        numOfItems: userOrder.orderItems[0].name,
        amount: `Rs.${userOrder.orderItems[0].price}`,
        status:
          userOrder.orderStatus &&
          userOrder.orderStatus.includes("Delivered") ? (
            <p style={{ color: "green" }}>{userOrder.orderStatus}</p>
          ) : (
            <p style={{ color: "red" }}>{userOrder.orderStatus}</p>
          ),
        actions: (
          <Link to={`/order/${userOrder._id}`} className="btn btn-primary">
            <i className="fa fa-eye"></i>
          </Link>
        ),
      });
    });

    return data;
  };

  const handleClick = () => {
    navigate("/BuyPage", { state: { scrollTo: "content-section" } });
  };
  return (
    <div>
      <MeataData title="My Orders" />
      <Fragment>
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
        <div className="Orderoftheusewrs3434">
          {/* <h1 className="mt-5">My Orders</h1> */}
          <MDBDataTable
            className="px-3"
            bordered
            striped
            hover
            data={setOrders()}
          />
        </div>
      </Fragment>
    </div>
  );
}
