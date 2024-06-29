import { useEffect, useState } from "react";
import {
  updatePassword as updatePasswordAction,
  clearAuthError,
} from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearUpdatePassword } from "../../slicers/authSlice";
import NewSlider from "../layouts/NewSlider";

export default function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [oldpassword, setOldPassword] = useState("");
  const dispatch = useDispatch();
  const { isUpdated, error } = useSelector((state) => state.authState);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("oldPassword", oldpassword);
    formData.append("password", password);
    dispatch(updatePasswordAction(formData));
  };

  useEffect(() => {
    if (isUpdated) {
      toast("Password Updated Successfully", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
        onOpen: () => dispatch(clearUpdatePassword()),
      });
      setPassword("");
      setOldPassword("");

      return;
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
  }, [isUpdated, error, dispatch]);

  return (
    <div>
      <div className="NewClassifiedFirstHBanne">
        <img src="/images/AboutPageBannerimg.png" alt="" />
      </div>
      <div>
        <NewSlider />
      </div>
      <div className="Miandivmobilepaddingdiv">
        <div className="row wrapper" style={{ width: "100%" }}>
          <div className="col-10 col-lg-5">
            <form onSubmit={submitHandler} className="shadow-lg">
              <h1 className="mt-2 mb-5">Update Password</h1>
              <div className="form-group">
                <label htmlFor="old_password_field">Old Password</label>
                <input
                  type="password"
                  id="old_password_field"
                  className="form-control"
                  value={oldpassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="new_password_field">New Password</label>
                <input
                  type="password"
                  id="new_password_field"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit2"
                className="btn update-btn btn-block mt-4 mb-3"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
