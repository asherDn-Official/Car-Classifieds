import { Fragment, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";
// import { deletUser, getUsers } from "../../actions/userActions";
// import { clearError, clearUserDeleted } from "../../slicers/userSlice";
import Loader from "../layouts/Loader";
import { MDBDataTable } from "mdbreact";
import { toast } from "react-toastify";
import Sidebar from "./Sidebar";
import { deletUser, getUser, getUsers } from "../../actions/userActions";
import { clearError, clearUserDeleted } from "../../slicers/userSlice";

export default function UserList() {
  const {
    users = [],
    loading = true,
    error,
    isUserDeleted,
  } = useSelector((state) => state.userState);

  const dispatch = useDispatch();

  const setUsers = () => {
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
          label: "Email",
          field: "email",
          sort: "asc",
        },
        {
          label: "Role",
          field: "role",
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

    users.forEach((user) => {
      data.rows.push({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        actions: (
          <Fragment>
            <Link to={`/admin/user/${user._id}`} className="btn btn-primary">
              <i className="fa fa-pencil"></i>
            </Link>
            <Button
              onClick={(e) => deleteHandler(e, user._id)}
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

  // const deleteHandler = (e, id) => {
  //   e.target.disabled = true;
  //   dispatch(deletUser(id));
  // };
  const deleteHandler = (e, id) => {
    // Display a confirmation dialog
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this User?"
    );

    if (userConfirmed) {
      // If the user clicks "OK", proceed with the deletion
      e.target.disabled = true; // Disable the delete button to prevent multiple clicks
      dispatch(deletUser(id)); // Call the delete action
    }
    // If the user clicks "Cancel", do nothing
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
    if (isUserDeleted) {
      toast("User Deleted Succesfully!", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
        onOpen: () => dispatch(clearUserDeleted()),
      });
      return;
    }

    dispatch(getUsers);
  }, [dispatch, error, isUserDeleted]);

  return (
    <div className="row" style={{ width: "100%" }}>
      <MetaData title={"User List"} />
      <div className="col-12 col-md-2">
        <Sidebar />
      </div>
      <div className="col-12 col-md-10">
        <h1 className="my-4">Users List</h1>
        <Fragment>
          {loading ? (
            <Loader />
          ) : (
            <MDBDataTable
              data={setUsers()}
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
